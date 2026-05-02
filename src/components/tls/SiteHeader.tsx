import { ChevronDown, FolderOpen, Phone, ShoppingCart, User } from "lucide-react";
import { SearchBar } from "./SearchBar";

const NAV_ITEMS = [
  "Library Furniture",
  "Classroom Furniture",
  "Soft Seating & Lounge",
  "Library Supplies",
  "Library Security",
  "STEM & Makerspace",
  "Signage & Displays",
  "Shop By Zone",
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line-200 bg-bone-50">
      {/* Utility row */}
      <div className="bg-tls-blue-900 text-bone-50">
        <div className="container-tls flex h-9 items-center justify-between text-[12px]">
          <a href="tel:8005487204" className="inline-flex items-center gap-2 hover:text-tls-teal-600">
            <Phone size={13} aria-hidden />
            <span className="font-mono">800.548.7204 · Mon–Fri 7:30–5:00 CT</span>
          </a>
          <nav className="hidden items-center gap-5 md:flex">
            <a href="#" className="inline-flex items-center gap-1 hover:text-tls-teal-600">
              For Institutions <ChevronDown size={12} />
            </a>
            <a href="#" className="hover:text-tls-teal-600">Track Order</a>
            <a href="#" className="inline-flex items-center gap-1 hover:text-tls-teal-600">
              <User size={12} /> Sign In
            </a>
            <a href="#" className="font-medium text-tls-amber-500 hover:text-tls-amber-100">MyRewards</a>
          </nav>
        </div>
      </div>

      {/* Main row */}
      <div className="container-tls flex h-[76px] items-center gap-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5" aria-label="The Library Store home">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-tls-blue-900 text-bone-50">
            <span className="font-mono text-sm font-bold tracking-tight">TLS</span>
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-[10px] uppercase tracking-[0.18em] text-ink-500">The</span>
            <span className="text-sm font-semibold uppercase tracking-[0.08em] text-tls-blue-900">
              Library Store
            </span>
          </div>
        </a>

        {/* Search */}
        <div className="hidden flex-1 lg:block">
          <SearchBar />
        </div>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-2">
          <button className="hidden rounded-md border border-line-200 px-3 py-2 text-xs font-medium text-tls-blue-700 hover:border-tls-blue-700 md:inline-flex">
            Express Order
          </button>
          <div className="hidden items-center rounded-md border border-line-200 bg-white pl-2 lg:flex">
            <span className="font-mono text-[10px] uppercase tracking-wider text-ink-400">Cat code</span>
            <input
              type="text"
              placeholder="C41-204"
              className="w-20 bg-transparent px-2 py-2 font-mono text-xs focus:outline-none"
              aria-label="Catalog code"
            />
            <button className="rounded-r-md bg-tls-blue-700 px-2 py-2 text-white" aria-label="Go to catalog code">
              →
            </button>
          </div>
          <button className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium text-ink-700 hover:bg-paper-100 md:inline-flex">
            <FolderOpen size={14} /> Project
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-md bg-tls-blue-900 px-3 py-2 text-xs font-medium text-bone-50 hover:bg-tls-blue-700">
            <ShoppingCart size={14} />
            <span className="font-mono">$0.00</span>
          </button>
        </div>
      </div>

      {/* Mobile search */}
      <div className="container-tls pb-3 lg:hidden">
        <SearchBar />
      </div>

      {/* Megamenu nav */}
      <nav className="hidden border-t border-line-200 lg:block" aria-label="Primary">
        <div className="container-tls flex items-center gap-1 overflow-x-auto">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              className="inline-flex items-center gap-1 whitespace-nowrap px-3 py-3 text-[13px] font-medium text-tls-blue-900 hover:text-tls-teal-700"
            >
              {item} <ChevronDown size={12} className="text-ink-400" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
