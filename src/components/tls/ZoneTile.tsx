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
      className="group relative block overflow-hidden rounded-md border border-line-200 bg-white transition-all hover:border-tls-blue-700 hover:shadow-md"
    >
      <div className="aspect-[4/5] overflow-hidden bg-paper-100">
        <img
          src={image}
          alt={`${name} environment`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      {/* Bottom overlay card sitting over photo's bottom 35% */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-paper-100 via-paper-100/95 to-transparent p-4 pt-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-400">
          {number}
        </div>
        <h3 className="mt-1 text-[18px] font-semibold leading-tight text-ink-900">{name}</h3>
        <p className="mt-1 line-clamp-1 text-[13px] text-ink-500">{subhead}</p>
        <div className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-ink-900">
          Shop the zone <ArrowRight size={14} className="text-tls-blue-700" />
        </div>
      </div>
    </a>
  );
}
