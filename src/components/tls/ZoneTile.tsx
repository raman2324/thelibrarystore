import { ArrowRight } from "lucide-react";

interface ZoneTileProps {
  image: string;
  number: string;
  name: string;
  subhead: string;
}

export function ZoneTile({ image, number, name, subhead }: ZoneTileProps) {
  return (
    <a
      href="#"
      className="group block overflow-hidden rounded-md border border-line-200 bg-white transition-all hover:border-tls-blue-100 hover:shadow-md"
    >
      <div className="aspect-[4/5] overflow-hidden bg-paper-100">
        <img
          src={image}
          alt={`${name} environment`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-4">
        <div className="font-mono text-[11px] uppercase tracking-wider text-ink-400">
          {number}
        </div>
        <h3 className="mt-1 text-lg font-semibold text-ink-900">{name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-ink-500">{subhead}</p>
        <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-tls-blue-700 group-hover:gap-2 transition-all">
          Shop the zone <ArrowRight size={14} />
        </div>
      </div>
    </a>
  );
}
