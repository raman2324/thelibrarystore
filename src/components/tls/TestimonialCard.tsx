import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  institution: string;
  location: string;
  project: string;
}

export function TestimonialCard({ quote, name, institution, location, project }: TestimonialCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-md border border-line-200 bg-paper-100 p-6">
      <div className="text-4xl leading-none text-tls-blue-700" aria-hidden>
        &ldquo;
      </div>
      <div className="flex gap-0.5" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} className="fill-tls-amber-500 text-tls-amber-500" />
        ))}
      </div>
      <p className="text-[15px] leading-relaxed text-ink-700">{quote}</p>
      <div className="mt-auto border-t border-line-200 pt-4">
        <div className="text-sm font-semibold text-ink-900">{name}</div>
        <div className="text-sm text-ink-500">
          {institution} · {location}
        </div>
        <div className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-400">
          Used in: {project}
        </div>
        <div className="mt-2 inline-flex items-center gap-1 rounded-sm bg-in-stock-700/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-in-stock-700">
          ✓ Verified buyer
        </div>
      </div>
    </article>
  );
}
