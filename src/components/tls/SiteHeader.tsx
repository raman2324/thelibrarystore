import { useEffect, useRef, useState } from "react";
import {
  Award,
  ChevronDown,
  FileText,
  FolderOpen,
  Hash,
  Phone,
  ShoppingCart,
  Upload,
  User,
  Wrench,
} from "lucide-react";
import { SearchBar } from "./SearchBar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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

type ToolDialog = null | "express" | "catalog" | "po";

export function SiteHeader() {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [dialog, setDialog] = useState<ToolDialog>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!toolsRef.current?.contains(e.target as Node)) setToolsOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const openTool = (t: ToolDialog) => {
    setToolsOpen(false);
    setDialog(t);
  };

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
            <a
              href="#"
              className="inline-flex items-center gap-1.5 font-semibold text-tls-amber-500 no-underline hover:text-tls-amber-100 hover:underline"
            >
              <Award size={14} className="text-tls-amber-500" /> MyRewards
            </a>
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
          {/* Tools dropdown */}
          <div className="relative hidden md:block" ref={toolsRef}>
            <button
              type="button"
              onClick={() => setToolsOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={toolsOpen}
              className="inline-flex items-center gap-1.5 rounded-md border border-line-200 px-3 py-2 text-xs font-medium text-tls-blue-700 hover:border-tls-blue-700"
            >
              <Wrench size={14} /> Tools <ChevronDown size={12} />
            </button>
            {toolsOpen && (
              <div
                role="menu"
                className="absolute right-0 z-50 mt-1 w-72 overflow-hidden rounded-md border border-line-200 bg-white shadow-lg"
              >
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => openTool("express")}
                  className="flex w-full items-start gap-3 px-4 py-3 text-left hover:bg-paper-100"
                >
                  <FileText size={16} className="mt-0.5 text-tls-blue-700" />
                  <div>
                    <div className="text-sm font-semibold text-ink-900">Express Order</div>
                    <div className="text-[12px] text-ink-500">Item-# bulk entry</div>
                  </div>
                </button>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => openTool("catalog")}
                  className="flex w-full items-start gap-3 border-t border-line-200 px-4 py-3 text-left hover:bg-paper-100"
                >
                  <Hash size={16} className="mt-0.5 text-tls-blue-700" />
                  <div>
                    <div className="text-sm font-semibold text-ink-900">Catalog Code</div>
                    <div className="text-[12px] text-ink-500">From a printed TLS catalog</div>
                  </div>
                </button>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => openTool("po")}
                  className="flex w-full items-start gap-3 border-t border-line-200 px-4 py-3 text-left hover:bg-paper-100"
                >
                  <Upload size={16} className="mt-0.5 text-tls-blue-700" />
                  <div>
                    <div className="text-sm font-semibold text-ink-900">Order from a previous PO</div>
                    <div className="text-[12px] text-ink-500">Upload a PO PDF or CSV</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          <button className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium text-ink-700 hover:bg-paper-100 md:inline-flex">
            <FolderOpen size={14} /> Project
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-tls-blue-900 px-3 py-2 text-xs font-medium text-bone-50 hover:bg-tls-blue-700">
            <ShoppingCart size={14} />
            <span className="font-mono">0 · $0.00</span>
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

      {/* Tool dialogs */}
      <Dialog open={dialog === "express"} onOpenChange={(o) => !o && setDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Express Order</DialogTitle>
            <DialogDescription>
              Type item numbers, paste from a spreadsheet, then add the whole sheet to cart.
            </DialogDescription>
          </DialogHeader>
          <textarea
            placeholder={"EST-90234-OAK, 6\nTLS-BP-1000, 200\nOFM-ML4-TEAL, 4"}
            className="h-40 w-full rounded-md border border-line-200 bg-bone-50 p-3 font-mono text-sm focus:border-tls-teal-700 focus:outline-none focus:ring-1 focus:ring-tls-teal-700"
          />
          <button className="rounded-md bg-tls-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-tls-teal-700/90">
            Add to cart
          </button>
        </DialogContent>
      </Dialog>

      <Dialog open={dialog === "catalog"} onOpenChange={(o) => !o && setDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Catalog Code</DialogTitle>
            <DialogDescription>
              Have a printed catalog open? Enter the catalog code from any item.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-stretch overflow-hidden rounded-md border border-line-200">
            <input
              type="text"
              placeholder="Catalog code"
              className="flex-1 bg-white px-3 py-2.5 font-mono text-sm focus:outline-none"
            />
            <button className="bg-tls-blue-700 px-4 text-sm font-medium text-white hover:bg-tls-blue-900">
              Look up →
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={dialog === "po"} onOpenChange={(o) => !o && setDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Order from a previous PO</DialogTitle>
            <DialogDescription>
              Upload a PO PDF or CSV — we'll match line items to current SKUs and confirm pricing.
            </DialogDescription>
          </DialogHeader>
          <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-line-200 bg-paper-100 p-8 text-sm text-ink-500 hover:border-tls-blue-700">
            <Upload size={20} className="text-tls-blue-700" />
            Drag a PO file here, or click to browse
            <input type="file" className="hidden" accept=".pdf,.csv,.xlsx" />
          </label>
        </DialogContent>
      </Dialog>
    </header>
  );
}
