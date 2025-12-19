"use client";

import { automations } from "@/data/automations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AutomationCard from "./AutomationCard";

export default function Automations() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="automations"
      className="w-full thin-border-top bg-gray-50/50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Label Column */}
          <div
            className={`md:col-span-3 text-gray-400 text-xs tracking-widest uppercase transition-all duration-600 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            (03) &mdash; Automatizaciones
          </div>

          {/* Content Column */}
          <div className="md:col-span-9">
            <div className="mb-12">
              <h2
                className={`serif-font text-3xl md:text-4xl text-gray-900 mb-4 transition-all duration-600 ${
                  isVisible
                    ? "animate-fade-in-up delay-100"
                    : "opacity-0 translate-y-5"
                }`}
              >
                Agentes de IA Conversacional
              </h2>
              <p
                className={`text-sm md:text-base text-gray-600 font-light max-w-2xl leading-relaxed transition-all duration-600 ${
                  isVisible
                    ? "animate-fade-in-up delay-200"
                    : "opacity-0 translate-y-5"
                }`}
              >
                Diseño agentes de IA conversacional que automatizan procesos
                empresariales vía WhatsApp. Mejoran eficiencia operativa,
                reducen costes y aceleran respuestas al cliente trabajando 24/7.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {automations.map((automation, index) => (
                <AutomationCard
                  key={automation.id}
                  automation={automation}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
