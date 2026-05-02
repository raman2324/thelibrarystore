import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  size?: "default" | "lg";
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  size = "default",
  placeholder = "Search 30,000+ products, SKUs, or catalog codes — try '60 inch oak bookcase'",
  className,
}: SearchBarProps) {
  const isLg = size === "lg";
  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className={cn(
        "flex w-full items-stretch overflow-hidden rounded-md border border-line-200 bg-white shadow-sm focus-within:ring-2 focus-within:ring-tls-teal-700 focus-within:border-tls-teal-700",
        isLg ? "h-14" : "h-11",
        className,
      )}
    >
      <div className={cn("flex items-center pl-4 text-ink-400", isLg ? "pl-5" : "")}>
        <Search size={isLg ? 22 : 18} aria-hidden />
      </div>
      <input
        type="search"
        aria-label="Search products"
        placeholder={placeholder}
        className={cn(
          "flex-1 bg-transparent px-3 text-ink-900 placeholder:text-ink-400 focus:outline-none",
          isLg ? "text-base" : "text-sm",
        )}
      />
      <button
        type="submit"
        className={cn(
          "flex items-center gap-2 bg-tls-teal-700 px-5 font-medium text-white transition-colors hover:bg-tls-teal-700/90",
          isLg ? "text-base" : "text-sm",
        )}
      >
        {isLg ? "Find products" : "Search"}
      </button>
    </form>
  );
}
