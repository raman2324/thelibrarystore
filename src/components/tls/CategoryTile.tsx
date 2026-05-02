import { ArrowRight, type LucideIcon } from "lucide-react";

interface CategoryTileProps {
  icon: LucideIcon;
  name: string;
  subcategories: string[];
  count: string;
}

export function CategoryTile({ icon: Icon, name, subcategories, count }: CategoryTileProps) {
  return (
    <a
      href="#"
      className="group flex flex-col gap-3 rounded-md border border-line-200 bg-white p-5 transition-all hover:border-tls-blue-700 hover:bg-paper-100/50"
    >
      <div className="flex items-start justify-between">
        <div className="rounded-md bg-tls-blue-50 p-2.5 text-tls-blue-700">
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <ArrowRight
          size={18}
          className="text-ink-400 transition-all group-hover:translate-x-0.5 group-hover:text-tls-blue-700"
        />
      </div>
      <h3 className="text-[17px] font-semibold text-ink-900">{name}</h3>
      <p className="font-mono text-[11px] leading-relaxed text-ink-500">
        {subcategories.slice(0, 5).join(" · ")}
      </p>
      <div className="mt-auto pt-2 font-mono text-[11px] uppercase tracking-wider text-ink-400">
        {count}
      </div>
    </a>
  );
}
