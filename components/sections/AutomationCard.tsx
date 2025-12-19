import Link from "next/link";
import { Scissors, Cake, Check, ArrowUpRight } from "lucide-react";
import type { Automation } from "@/data/types";

interface AutomationCardProps {
  automation: Automation;
  index: number;
  isVisible: boolean;
  href?: string;
}

function getStatusBadge(status: string) {
  if (status === "live") {
    return (
      <div className="flex items-center space-x-2 mb-6">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-xs uppercase tracking-widest text-gray-400">
          Agente en Vivo
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-center space-x-2 mb-6">
      <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
      <span className="text-xs uppercase tracking-widest text-gray-400">
        En Desarrollo
      </span>
    </div>
  );
}

function getIcon(iconName: string) {
  switch (iconName) {
    case "scissors":
      return <Scissors className="w-12 h-12 stroke-[1px]" />;
    case "cake":
      return <Cake className="w-12 h-12 stroke-[1px]" />;
    default:
      return <Scissors className="w-12 h-12 stroke-[1px]" />;
  }
}

export default function AutomationCard({
  automation,
  index,
  isVisible,
  href = "/automations#agents",
}: AutomationCardProps) {
  const cardContent = (
    <>
      <div className="absolute top-4 right-4 text-gray-100 smooth-color group-hover:text-gray-200">
        {getIcon(automation.icon)}
      </div>

      {getStatusBadge(automation.status)}

      <h3 className="serif-font text-2xl text-gray-900 mb-2">
        {automation.name}
      </h3>
      <p className="text-sm text-gray-500 mb-6 min-h-[40px]">
        {automation.shortDescription}
      </p>

      <ul className="space-y-2 mb-8">
        {automation.features.slice(0, 2).map((feature, i) => (
          <li key={i} className="flex items-center text-xs text-gray-600">
            <Check className="w-3 h-3 mr-2 text-gray-400" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="inline-flex items-center text-xs uppercase tracking-widest text-black border-b border-black pb-1 smooth-color hover:opacity-60 group">
        Conocer más...
        <ArrowUpRight className="w-3 h-3 ml-1 smooth-color group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </>
  );

  const className = `bg-white p-8 border border-gray-200 group smooth-color hover:border-gray-400 relative overflow-hidden hover-lift transition-all duration-600 ${
    isVisible
      ? `animate-fade-in-up delay-${300 + index * 100}`
      : "opacity-0 translate-y-5"
  }`;

  return (
    <Link href={href} className={className}>
      {cardContent}
    </Link>
  );
}
