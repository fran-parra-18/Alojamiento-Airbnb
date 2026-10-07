import { ChevronDown } from "lucide-react";
import { faqItems } from "../data";
import type { Lang } from "../i18n";

interface FaqProps {
  lang: Lang;
}

export default function Faq({ lang }: FaqProps) {
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqItems.map((item, idx) => (
        <details
          key={idx}
          className="group bg-white/80 rounded-2xl border border-slate-200/50 shadow-sm open:shadow-md transition-shadow"
        >
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 font-semibold text-forest [&::-webkit-details-marker]:hidden">
            <span>{item.q[lang]}</span>
            <ChevronDown className="w-5 h-5 text-wood shrink-0 transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="px-6 pb-6 -mt-1 text-sm text-slate-600 leading-relaxed">{item.a[lang]}</p>
        </details>
      ))}
    </div>
  );
}
