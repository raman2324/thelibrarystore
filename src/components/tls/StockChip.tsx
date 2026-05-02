import { cn } from "@/lib/utils";

type Status = "in-stock" | "backorder" | "quote" | "discontinued";

const config: Record<Status, { label: string; dot: string; text: string; bg: string }> = {
  "in-stock": {
    label: "In stock · Ships in 2 business days",
    dot: "bg-in-stock-700",
    text: "text-in-stock-700",
    bg: "bg-in-stock-700/10",
  },
  backorder: {
    label: "Backorder · Lead time 4–6 weeks",
    dot: "bg-backorder-600",
    text: "text-backorder-600",
    bg: "bg-backorder-600/10",
  },
  quote: {
    label: "Quote required · Custom dimensions",
    dot: "bg-quote-700",
    text: "text-quote-700",
    bg: "bg-quote-700/10",
  },
  discontinued: {
    label: "Discontinued — see replacement",
    dot: "bg-discontinued-600",
    text: "text-discontinued-600",
    bg: "bg-discontinued-600/10",
  },
};

interface StockChipProps {
  status: Status;
  label?: string;
  className?: string;
}

export function StockChip({ status, label, className }: StockChipProps) {
  const c = config[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm px-2 py-1 text-[11px] font-mono font-medium",
        c.bg,
        c.text,
        className,
      )}
      aria-label={label ?? c.label}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", c.dot)} aria-hidden />
      {label ?? c.label}
    </span>
  );
}
