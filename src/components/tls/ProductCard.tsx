import { Award, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { StockChip } from "./StockChip";
import { cn } from "@/lib/utils";

export interface Product {
  id: string;
  name: string;
  brand: string;
  itemNumber: string;
  price: number;
  bulkFrom?: { qty: number; price: number };
  image: string;
  status: "in-stock" | "backorder" | "quote" | "discontinued";
  isTLSBrand?: boolean;
  isMadeInUSA?: boolean;
  isGREENGUARD?: boolean;
}

export function ProductCard({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-line-200 bg-white transition-shadow hover:shadow-md">
      <div className="aspect-square overflow-hidden bg-paper-100">
        <img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-wider text-ink-400">
            {product.brand}
          </span>
          {product.isTLSBrand && (
            <span className="rounded-sm bg-tls-amber-100 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-tls-amber-600">
              TLS Brand
            </span>
          )}
        </div>
        <h3 className="line-clamp-2 text-[15px] font-semibold leading-snug text-ink-900">
          {product.name}
        </h3>
        <div className="font-mono text-[11px] text-ink-500">Item # {product.itemNumber}</div>

        <div className="flex items-baseline gap-2">
          <span className="font-mono text-lg font-semibold text-ink-900">
            ${product.price.toFixed(2)}
          </span>
          {product.bulkFrom && (
            <span className="font-mono text-[11px] text-ink-500">
              {product.bulkFrom.qty}+ from ${product.bulkFrom.price.toFixed(2)}
            </span>
          )}
        </div>

        <StockChip status={product.status} />

        <div className="flex items-center gap-2 pt-1">
          {product.isMadeInUSA && (
            <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-ink-500">
              <Award size={11} /> USA
            </span>
          )}
          {product.isGREENGUARD && (
            <span className="font-mono text-[10px] uppercase tracking-wider text-in-stock-700">
              GREENGUARD
            </span>
          )}
        </div>

        <div className="mt-auto pt-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-md border border-line-200">
              <button
                type="button"
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-2 py-2 text-ink-500 hover:text-ink-900"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
                className="w-10 bg-transparent text-center font-mono text-sm focus:outline-none"
                aria-label="Quantity"
              />
              <button
                type="button"
                onClick={() => setQty(qty + 1)}
                className="px-2 py-2 text-ink-500 hover:text-ink-900"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
            <button
              type="button"
              className={cn(
                "flex-1 rounded-md bg-tls-teal-700 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-tls-teal-700/90",
                product.status === "discontinued" && "pointer-events-none opacity-50",
              )}
            >
              Add to cart
            </button>
          </div>
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-tls-blue-700 px-3 py-1.5 text-xs font-medium text-tls-blue-700 transition-colors hover:bg-tls-blue-50"
          >
            Save to project
          </button>
        </div>
      </div>
    </article>
  );
}
