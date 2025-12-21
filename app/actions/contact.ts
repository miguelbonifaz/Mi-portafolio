"use server";

import { z } from "zod";
import { contactFormSchema } from "@/data/schemas";

export type ContactFormData = z.infer<typeof contactFormSchema>;

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(identifier);

  if (!limit || now > limit.resetTime) {
    // Reset or create new limit (5 requests per hour)
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + 60 * 60 * 1000, // 1 hour
    });
    return true;
  }

  if (limit.count >= 5) {
    return false;
  }

  limit.count++;
  return true;
}

export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  try {
    // Extract form data
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    // Validate data
    const validationResult = contactFormSchema.safeParse(data);

    if (!validationResult.success) {
      return {
        success: false,
        message: "Por favor, corrige los errores en el formulario",
        errors: validationResult.error.flatten().fieldErrors,
      };
    }

    const validatedData = validationResult.data;

    // Rate limiting check
    if (!checkRateLimit(validatedData.email)) {
      return {
        success: false,
        message:
          "Has enviado demasiados mensajes. Por favor, intenta más tarde.",
      };
    }

    // Send to n8n webhook
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    const webhookToken = process.env.N8N_WEBHOOK_TOKEN;

    console.log('Webhook URL exists:', !!webhookUrl);
    console.log('Webhook Token exists:', !!webhookToken);

    if (!webhookUrl || !webhookToken) {
      throw new Error('Webhook configuration missing - check environment variables in Vercel');
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Portfolio: webhookToken,
      },
      body: JSON.stringify({
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
      }),
    });

    console.log('Webhook response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Webhook error response:', errorText);
      throw new Error(
        `Webhook failed: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    return {
      success: true,
      message: "¡Mensaje enviado exitosamente! Te responderé pronto.",
    };
  } catch (error) {
    console.error("Error sending contact form:", error);
    return {
      success: false,
      message:
        "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctame directamente por email.",
    };
  }
}
