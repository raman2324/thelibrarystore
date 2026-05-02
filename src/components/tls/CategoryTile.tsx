import { ArrowRight, type LucideIcon } from "lucide-react";

interface CategoryTileProps {
  icon: LucideIcon;
  name: string;
  subcategories: string[];
  count: string;
  productImage: string;
}

export function CategoryTile({
  icon: Icon,
  name,
  subcategories,
  count,
  productImage,
}: CategoryTileProps) {
  return (
    <a
      href="#"
      className="group flex flex-col gap-3 rounded-md border border-line-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[1.5px] hover:border-tls-blue-100 hover:bg-paper-100/40 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="rounded-md bg-tls-blue-50 p-2 text-tls-blue-700">
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-sm bg-bone-50 ring-1 ring-line-200 md:h-24 md:w-24">
          <img
            src={productImage}
            alt=""
            loading="lazy"
            className="h-full w-full object-contain p-1"
          />
        </div>
      </div>
      <h3 className="text-[17px] font-semibold text-ink-900">{name}</h3>
      <p className="font-mono text-[11px] leading-relaxed text-ink-500">
        {subcategories.slice(0, 5).join(" · ")}
      </p>
      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="font-mono text-[11px] uppercase tracking-wider text-ink-400">{count}</span>
        <ArrowRight
          size={16}
          className="text-ink-400 transition-all group-hover:translate-x-0.5 group-hover:text-tls-blue-700"
        />
      </div>
    </a>
  );
}
