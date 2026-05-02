import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  institution: string;
  location: string;
  project: string;
}

export function TestimonialCard({
  quote,
  name,
  institution,
  location,
  project,
}: TestimonialCardProps) {
  return (
    <article className="relative flex flex-col gap-4 rounded-md border border-line-200 bg-paper-100 p-6">
      <span
        aria-hidden
        className="absolute left-4 top-2 font-serif text-[48px] leading-none text-tls-blue-700"
      >
        “
      </span>
      <div className="mt-6 flex gap-0.5" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} className="fill-tls-amber-600 text-tls-amber-600" />
        ))}
      </div>
      <p className="text-[16px] italic leading-relaxed text-ink-900">{quote}</p>
      <div className="mt-auto border-t border-line-200 pt-4">
        <div className="text-sm font-semibold text-ink-900">{name}</div>
        <div className="font-mono text-[12px] text-ink-500">
          {institution} · {location}
        </div>
        <div className="mt-1.5 font-mono text-[11px] text-ink-500">Used in: {project}</div>
        <div className="mt-3 inline-flex items-center gap-1 rounded-md bg-tls-amber-100 px-2 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wider text-tls-amber-600">
          ✓ Verified buyer
        </div>
      </div>
    </article>
  );
}
