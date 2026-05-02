import { Facebook, Twitter } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      "Library Furniture",
      "Classroom Furniture",
      "Soft Seating & Lounge",
      "Library Supplies",
      "Library Security",
      "STEM & Makerspace",
      "Signage & Displays",
      "Outdoor Furniture",
    ],
  },
  {
    title: "Shop by Zone",
    links: [
      "Elementary Library",
      "Middle School Library",
      "High School Library",
      "Public Library",
      "Academic Library",
      "Maker Space",
      "Computer Lab",
      "Outdoor Reading",
    ],
  },
  {
    title: "For Institutions",
    links: [
      "Bid & Quote",
      "Sole Source Letter",
      "W-9 Form",
      "NET-30 Terms",
      "Tax Exemption",
      "GSA / Sourcewell",
      "PO Upload",
      "Custom Order Forms",
    ],
  },
  {
    title: "Customer Care",
    links: [
      "Contact",
      "Track Order",
      "Returns",
      "Shipping",
      "Express Order",
      "Catalog Code",
      "Request Catalog",
      "FAQ",
    ],
  },
  {
    title: "My Account",
    links: [
      "Sign In",
      "Projects",
      "Reorder",
      "Saved Searches",
      "MyRewards",
      "New Account",
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-tls-blue-900 text-bone-50">
      <div className="container-tls grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-6">
        {/* Brand block */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-bone-50 text-tls-blue-900">
              <span className="font-mono text-sm font-bold">TLS</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-[0.18em] text-bone-50/60">The</span>
              <span className="text-sm font-semibold uppercase tracking-[0.08em]">Library Store</span>
            </div>
          </div>
          <address className="mt-5 not-italic text-sm text-bone-50/80">
            P.O. Box 0964<br />
            Tremont, IL 61568-0964
          </address>
          <a href="tel:8005487204" className="mt-3 block font-mono text-sm text-bone-50 hover:text-tls-teal-600">
            800.548.7204
          </a>
          <a
            href="mailto:customercare@thelibrarystore.com"
            className="mt-1 block break-words text-sm text-bone-50/80 hover:text-tls-teal-600"
          >
            customercare@thelibrarystore.com
          </a>
          <div className="mt-3 font-mono text-[11px] uppercase tracking-wider text-bone-50/60">
            Mon–Fri 7:30–5:00 CT
          </div>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-sm border border-bone-50/20 p-2 hover:border-bone-50">
              <Facebook size={14} />
            </a>
            <a href="#" aria-label="Twitter" className="rounded-sm border border-bone-50/20 p-2 hover:border-bone-50">
              <Twitter size={14} />
            </a>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-tls-amber-500">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-bone-50/80 hover:text-bone-50">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-bone-50/10">
        <div className="container-tls flex flex-col items-start justify-between gap-4 py-5 text-xs text-bone-50/60 md:flex-row md:items-center">
          <div className="font-mono">
            © {year} The Library Store, Inc. · TLS™ registered trademark · Made in Tremont, IL
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-wider">Visa · MC · Amex · Disc · PO · ACH</span>
            <span className="rounded-sm border border-bone-50/20 px-2 py-1 font-mono text-[10px] uppercase tracking-wider">
              SSL Secured
            </span>
            <a href="#" className="hover:text-bone-50">Privacy</a>
            <a href="#" className="hover:text-bone-50">Terms</a>
            <a href="#" className="hover:text-bone-50">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
