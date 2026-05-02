import { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Cpu,
  FileText,
  FolderOpen,
  Library,
  MapPin,
  Package,
  Phone,
  PhoneCall,
  School,
  Search,
  Shield,
  ShieldCheck,
  Sofa,
  Sparkles,
  Trash2,
  Truck,
  Upload,
} from "lucide-react";

import { SiteHeader } from "@/components/tls/SiteHeader";
import { SiteFooter } from "@/components/tls/SiteFooter";
import { ZoneTile } from "@/components/tls/ZoneTile";
import { CategoryTile } from "@/components/tls/CategoryTile";
import { ProductCard, type Product } from "@/components/tls/ProductCard";
import { TestimonialCard } from "@/components/tls/TestimonialCard";

import heroLibrary from "@/assets/hero-library.jpg";
import institutionsOfficer from "@/assets/institutions-officer.jpg";
import tlsBrandFactory from "@/assets/tls-brand-factory.jpg";
import zoneElementary from "@/assets/zone-elementary.jpg";
import zoneMiddle from "@/assets/zone-middle.jpg";
import zoneHighschool from "@/assets/zone-highschool.jpg";
import zonePublic from "@/assets/zone-public.jpg";
import zoneAcademic from "@/assets/zone-academic.jpg";
import zoneMaker from "@/assets/zone-maker.jpg";
import zoneComputer from "@/assets/zone-computer.jpg";
import zoneOutdoor from "@/assets/zone-outdoor.jpg";
import productBookcase from "@/assets/product-bookcase.jpg";
import productJackets from "@/assets/product-jackets.jpg";
import productLounge from "@/assets/product-lounge.jpg";
import productMakertable from "@/assets/product-makertable.jpg";
import productShelving from "@/assets/product-shelving.jpg";
import productClassroom from "@/assets/product-classroom.jpg";
import productSecurity from "@/assets/product-security.jpg";
import productSignage from "@/assets/product-signage.jpg";
import productOutdoor from "@/assets/product-outdoor.jpg";

const ZONES = [
  { number: "ZONE 01", name: "Elementary Library", subhead: "Low shelving · child tables · reading nook", image: zoneElementary },
  { number: "ZONE 02", name: "Middle School Library", subhead: "Study tables · stack chairs · service desk", image: zoneMiddle },
  { number: "ZONE 03", name: "High School Library", subhead: "Steel shelving · study carrels · task chairs", image: zoneHighschool },
  { number: "ZONE 04", name: "Public Library", subhead: "Modular lounge · service counter · signage", image: zonePublic },
  { number: "ZONE 05", name: "Academic Library", subhead: "Compact storage · scholarly carrels · reference desks", image: zoneAcademic },
  { number: "ZONE 06", name: "Maker Space", subhead: "Maker tables · pegboard storage · 3D printer carts", image: zoneMaker },
  { number: "ZONE 07", name: "Computer Lab", subhead: "Tech tables · task chairs · charging carts", image: zoneComputer },
  { number: "ZONE 08", name: "Outdoor Reading", subhead: "Modular outdoor seating · shade · picnic tables", image: zoneOutdoor },
];

const CATEGORIES = [
  { icon: Library, name: "Library Furniture", subcategories: ["Bookcases", "Shelving", "Carrels", "Service Desks", "Library Tables"], count: "6,200 products", productImage: productShelving },
  { icon: FileText, name: "Library Supplies", subcategories: ["Book Pockets", "Jacket Covers", "Labels", "Mending", "Date-Due Cards"], count: "8,400 products", productImage: productJackets },
  { icon: School, name: "Classroom Furniture", subcategories: ["Tables", "Chairs", "Stack Chairs", "Teacher Desks", "Storage"], count: "5,800 products", productImage: productClassroom },
  { icon: Sofa, name: "Soft Seating & Lounge", subcategories: ["Soft Seating", "Modular Lounge", "Outdoor Lounge", "Reading Nooks"], count: "1,900 products", productImage: productLounge },
  { icon: Shield, name: "Library Security", subcategories: ["3M RFID", "EM Security Strips", "Detection Systems", "Self-Check"], count: "640 products", productImage: productSecurity },
  { icon: Cpu, name: "STEM & Makerspace", subcategories: ["Maker Tables", "3D Printers", "STEM Kits", "Robotics", "Tool Storage"], count: "2,100 products", productImage: productMakertable },
  { icon: BadgeCheck, name: "Signage & Displays", subcategories: ["Wayfinding", "Acrylic Signs", "Bulletin Boards", "Display Cases"], count: "1,400 products", productImage: productSignage },
  { icon: Sparkles, name: "Outdoor Furniture", subcategories: ["Picnic Tables", "Benches", "Shade Structures", "Trash Receptacles"], count: "980 products", productImage: productOutdoor },
];

const PRODUCTS: Product[] = [
  { id: "1", name: "Estey Steel Single-Faced Bookcase, 5-Shelf 60\" Oak Finish", brand: "Estey", itemNumber: "EST-90234-OAK", price: 489.0, bulkFrom: { qty: 10, price: 449.0 }, image: productBookcase, status: "in-stock", isMadeInUSA: true },
  { id: "2", name: "TLS Clear Mylar Book Jacket Covers (Roll of 100)", brand: "TLS", itemNumber: "TLS-BP-1000", price: 64.5, bulkFrom: { qty: 25, price: 58.95 }, image: productJackets, status: "in-stock", isTLSBrand: true, isMadeInUSA: true },
  { id: "3", name: "OFM Modular Lounge Chair, Teal Upholstery, GREENGUARD Gold", brand: "OFM", itemNumber: "OFM-ML4-TEAL", price: 1249.0, bulkFrom: { qty: 4, price: 1149.0 }, image: productLounge, status: "backorder", isGREENGUARD: true },
  { id: "4", name: "Maker Pro Mobile Workbench with Pegboard", brand: "TLS", itemNumber: "TLS-MK-WB48", price: 879.0, bulkFrom: { qty: 5, price: 799.0 }, image: productMakertable, status: "in-stock", isTLSBrand: true, isMadeInUSA: true },
  { id: "5", name: "tenjam Outdoor Sectional, Modular", brand: "tenjam", itemNumber: "TJM-OL-MOD", price: 2489.0, image: productOutdoor, status: "quote" },
  { id: "6", name: "3M RFID Library Security Detection System", brand: "3M", itemNumber: "3M-RFID-DS01", price: 14500.0, image: productSecurity, status: "quote" },
  { id: "7", name: "Smith System Cascade Mega-Tower Storage", brand: "Smith System", itemNumber: "SMS-CSC-MTWR", price: 1099.0, bulkFrom: { qty: 4, price: 999.0 }, image: productClassroom, status: "in-stock", isMadeInUSA: true },
  { id: "8", name: "TLS Pre-Cut Book Pockets, 3 5/8\" × 5 5/16\" (Box of 1,000)", brand: "TLS", itemNumber: "TLS-CP-1000", price: 89.0, bulkFrom: { qty: 10, price: 79.5 }, image: productJackets, status: "in-stock", isTLSBrand: true, isMadeInUSA: true },
];

const TRUST_ITEMS = [
  { icon: Package, label: "30,000+ Products" },
  { icon: Award, label: "40+ Brands" },
  { icon: MapPin, label: "Made in USA · TLS Line" },
  { icon: ShieldCheck, label: "Satisfaction Guarantee" },
  { icon: Truck, label: "Free Shipping over $1,500" },
  { icon: PhoneCall, label: "800.548.7204 · Live Customer Care" },
];

const PRODUCT_TABS = ["All", "New", "Best Sellers", "TLS Brand", "On Sale", "Quick-Ship", "Made in USA"];

const TESTIMONIALS = [
  {
    quote:
      "We refurnished four elementary library spaces over the summer using the project workspace. Sole-source letter came back same-day. Estey shelving shipped on schedule. Couldn't have asked for more.",
    name: "Marisol R.",
    institution: "Plainview ISD",
    location: "Plainview, TX",
    project: "4-Elementary Refresh — Estey shelving, OFM seating, $87K project",
  },
  {
    quote:
      "TLS book pockets and jacket covers are the only ones I order. We've processed every book in our 22-school district with them since 1998. Quality is exactly the same as it was 25 years ago.",
    name: "Jenna K.",
    institution: "Aurora Public Schools",
    location: "Aurora, CO",
    project: "Annual processing supplies — TLS BP-1000, TLS CP-1000",
  },
  {
    quote:
      "Maker space build-out for two middle schools. NET-30 terms, PO upload at checkout, freight quoted up front. Project workspace let our principal review every line item before approval.",
    name: "David T.",
    institution: "Wake County Schools",
    location: "Raleigh, NC",
    project: "2-Maker Space Build — TLS workbenches, STEM kits, $34K project",
  },
];

const BRANDS = ["Estey", "3M", "OFM", "tenjam", "TLS", "Smith System", "Brodart", "Demco"];

const ARTICLES = [
  { title: "Planning a maker-space refresh: a librarian's checklist", meta: "8 MIN READ · APR 2026" },
  { title: "GREENGUARD-certified seating: what to look for", meta: "6 MIN READ · APR 2026" },
  { title: "Outdoor reading zones: 6 layouts that work", meta: "10 MIN READ · MAR 2026" },
  { title: "Inside the TLS factory: how a book pocket is made", meta: "VIDEO · 5:42" },
];

const ANNOUNCEMENTS = [
  {
    text: "Spring Catalog · Issue 41 — Free for institutions",
    cta: "Request a copy →",
    accent: true,
  },
  {
    text: "Free standard shipping on orders over $1,500 in the contiguous US.",
    cta: "Shipping details →",
    accent: false,
  },
  {
    text: "Need a sole-source letter or W-9?",
    cta: "Visit Institutions →",
    accent: false,
  },
];


function AnnouncementBar() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % ANNOUNCEMENTS.length), 6000);
    return () => clearInterval(id);
  }, []);
  const a = ANNOUNCEMENTS[i];
  return (
    <div
      className={`border-b border-line-200 ${a.accent ? "bg-tls-amber-100" : "bg-paper-100"}`}
    >
      <div className="container-tls flex h-9 items-center justify-center text-center text-[12px] text-ink-700">
        <span>
          {a.accent && (
            <span className="mr-2 inline-flex items-center rounded-md bg-tls-amber-600 px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-white">
              New
            </span>
          )}
          {a.text} ·{" "}
          <a
            href="#"
            className={`font-medium hover:underline ${a.accent ? "text-tls-amber-600" : "text-tls-blue-700"}`}
          >
            {a.cta}
          </a>
        </span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-bone-50">
      {/* Background photo — 60vh, visible on right where institutions card overlays */}
      <div className="absolute inset-0">
        <img
          src={heroLibrary}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Left-only gradient: bone-50 (left) → transparent (right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-bone-50 via-bone-50/85 to-transparent" />
      </div>

      <div className="container-tls relative grid min-h-[60vh] grid-cols-1 gap-10 py-14 lg:grid-cols-5 lg:gap-12 lg:py-20">
        {/* Left zone */}
        <div className="lg:col-span-3">
          <div className="eyebrow">30,000+ PRODUCTS · 40+ BRANDS · SINCE THE 1980s</div>
          <h1 className="mt-5 max-w-[18ch] text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 md:text-5xl lg:text-[56px]">
            Everything you need for today's library, classroom, and maker space.
          </h1>
          <p className="mt-5 max-w-prose-tls text-[18px] leading-relaxed text-ink-500">
            Furniture, supplies, security, signage, and STEM — sourced for schools, public libraries,
            and academic institutions. Quote-ready, procurement-friendly, made for institutions that
            buy in bulk.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-tls-teal-700 px-5 py-3 text-[15px] font-medium text-white hover:bg-tls-teal-700/90"
            >
              <Search size={16} /> Browse the catalog
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Shop by Zone",
              "Shop by Brand",
              "Request a free catalog",
            ].map((t) => (
              <a
                key={t}
                href="#"
                className="inline-flex items-center gap-1 rounded-md border border-tls-blue-700 bg-white/80 px-3 py-1.5 font-mono text-[13px] font-medium uppercase tracking-wider text-tls-blue-700 backdrop-blur transition-colors hover:bg-tls-blue-50"
              >
                {t} <ArrowRight size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* Right zone — institutions card */}
        <aside className="lg:col-span-2">
          <div className="rounded-md border border-line-200 bg-paper-100 p-6">
            <div className="eyebrow-blue">FOR INSTITUTIONS</div>
            <h2 className="mt-2 text-[24px] font-semibold leading-tight text-ink-900">
              Procurement made simple.
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
              Same-day quotes. Sole-source letters in under 24 hours. Net-30 for verified
              institutions. PO upload at checkout.
            </p>

            <ul className="mt-5 divide-y divide-line-200 border-y border-line-200">
              {[
                { icon: FileText, label: "Request a quote" },
                { icon: BadgeCheck, label: "Sole source letter" },
                { icon: Building2, label: "Download W-9" },
                { icon: CheckCircle2, label: "NET-30 application" },
              ].map(({ icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href="#"
                    className="flex h-11 items-center gap-3 text-[14px] text-ink-900 hover:text-tls-blue-700"
                  >
                    <Icon size={16} className="text-tls-blue-700" />
                    <span className="flex-1">{label}</span>
                    <ArrowRight size={14} className="text-ink-400" />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-5 inline-flex w-full items-center justify-center gap-1 rounded-md border border-tls-blue-700 px-3 py-2 text-sm font-medium text-tls-blue-700 hover:bg-tls-blue-50"
            >
              For Institutions hub <ArrowRight size={14} />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="border-y border-line-200 bg-paper-100" aria-label="Why TLS">
      <div className="container-tls grid h-auto grid-cols-2 items-stretch gap-y-2 py-3 sm:grid-cols-3 lg:flex lg:h-16 lg:gap-y-0 lg:py-0">
        {TRUST_ITEMS.map(({ icon: Icon, label }, idx) => (
          <div
            key={label}
            className={`flex flex-1 items-center justify-center gap-2 px-4 ${
              idx > 0 ? "lg:border-l lg:border-line-200" : ""
            }`}
          >
            <Icon size={16} className="shrink-0 text-tls-teal-700" aria-hidden />
            <span className="font-mono text-[10px] uppercase tracking-[0.05em] text-ink-700 lg:text-[12px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}


function ShopByZone() {
  return (
    <section className="bg-bone-50 py-20">
      <div className="container-tls">
        <div className="mb-10 max-w-2xl">
          <div className="eyebrow">SHOP BY ZONE</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-ink-900">
            Plan the space, then shop the space.
          </h2>
          <p className="mt-3 text-ink-500">Curated assortments for the rooms you furnish most often.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {ZONES.map((z) => (
            <ZoneTile key={z.name} {...z} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ShopByCategory() {
  return (
    <section className="border-t border-line-200 bg-bone-50 py-20">
      <div className="container-tls">
        <div className="mb-10 max-w-2xl">
          <div className="eyebrow">SHOP BY CATEGORY</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-ink-900">
            Eight categories. Thirty thousand SKUs.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <CategoryTile key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const [active, setActive] = useState("All");
  return (
    <section className="border-t border-line-200 bg-bone-50 py-20">
      <div className="container-tls">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="eyebrow">POPULAR THIS SEASON</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-ink-900">
              Featured products.
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-tls-blue-700 hover:underline">
            View all products <ArrowRight size={14} />
          </a>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {PRODUCT_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
                active === tab
                  ? "border-tls-blue-700 bg-tls-blue-700 text-white"
                  : "border-line-200 bg-white text-ink-700 hover:border-tls-blue-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InstitutionsBand() {
  const chips = [
    "Request a quote",
    "Sole-source letter",
    "Download W-9",
    "NET-30 application",
    "Tax exemption",
    "Upload a PO",
  ];
  return (
    <section className="bg-tls-blue-900 text-bone-50">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="aspect-[4/3] overflow-hidden lg:aspect-auto">
          <img
            src={institutionsOfficer}
            alt="District procurement officer reviewing a TLS catalog and planning sheet"
            loading="lazy"
            className="h-full w-full object-cover"
            width={1024}
            height={1024}
          />
        </div>
        <div className="flex flex-col justify-center p-10 lg:p-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-tls-amber-500">
            FOR INSTITUTIONS
          </div>
          <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-bone-50 md:text-5xl">
            Built for the way schools and libraries actually buy.
          </h2>
          <div className="mt-6 max-w-prose-tls space-y-4 text-bone-50/80">
            <p>
              Quotes the same day. Sole-source letters in under 24 hours. W-9 ready to download. NET-30
              terms for verified institutions. PO upload at checkout. Tax exemption applied account-wide.
            </p>
            <p>
              We ship to school districts, public libraries, academic institutions, and cooperative
              purchasing programs across all 50 states.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {chips.map((c) => (
              <a
                key={c}
                href="#"
                className="rounded-md bg-paper-100/10 px-3 py-1.5 text-xs font-medium text-bone-50 ring-1 ring-bone-50/20 hover:bg-paper-100/20"
              >
                {c}
              </a>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-bone-50/15 pt-6 font-mono text-[11px] uppercase tracking-wider text-bone-50/70 sm:grid-cols-4">
            <div>Avg quote turnaround<br /><span className="text-bone-50">&lt;24 hrs</span></div>
            <div>NET-30<br /><span className="text-bone-50">Eligible</span></div>
            <div>GSA-friendly<br /><span className="text-bone-50">Yes</span></div>
            <div>PO upload<br /><span className="text-bone-50">At checkout</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectWorkspace() {
  return (
    <section className="border-t border-line-200 bg-bone-50 py-20">
      <div className="container-tls grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div className="rounded-md border border-line-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-line-200 pb-3">
            <div className="flex items-center gap-2">
              <FolderOpen size={16} className="text-tls-blue-700" />
              <span className="font-semibold text-ink-900">Elementary Library Refresh</span>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-400">
              14 items · 3 collaborators
            </span>
          </div>
          <ul className="mt-4 divide-y divide-line-200">
            {[
              { item: "EST-90234-OAK", name: "Estey Single-Faced Bookcase 60\" Oak", qty: 6, price: "$2,934.00" },
              { item: "TLS-BP-1000", name: "TLS Mylar Jacket Covers 10×18", qty: 25, price: "$1,612.50" },
              { item: "OFM-ML4-TEAL", name: "OFM Modular Lounge Chair, Teal", qty: 4, price: "$4,996.00" },
            ].map((row) => (
              <li key={row.item} className="flex items-center justify-between gap-3 py-3 text-sm">
                <div>
                  <div className="font-mono text-[11px] text-ink-500">{row.item}</div>
                  <div className="text-ink-900">{row.name}</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[11px] text-ink-500">Qty {row.qty}</div>
                  <div className="font-mono font-semibold text-ink-900">{row.price}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between border-t border-line-200 pt-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-500">Subtotal</span>
            <span className="font-mono text-lg font-semibold text-ink-900">$9,542.50</span>
          </div>
        </div>

        <div>
          <div className="eyebrow">PROJECT WORKSPACE</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-ink-900">
            Plan once. Share for approval. Convert to a quote.
          </h2>
          <ul className="mt-6 space-y-4 text-ink-700">
            {[
              { icon: FolderOpen, text: "Save items into named projects across sessions." },
              { icon: BadgeCheck, text: "Share a read-only link with your principal or director for approval." },
              { icon: FileText, text: "Convert any project to a printable PDF quote in one click." },
              { icon: Truck, text: "Re-order from any past project for next year's PO." },
              { icon: Award, text: "Lock pricing for 30 days on saved quotes (where applicable)." },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex gap-3">
                <Icon size={18} className="mt-0.5 shrink-0 text-tls-teal-700" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-tls-teal-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-tls-teal-700/90"
          >
            Start a project <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

function TLSBrandBand() {
  return (
    <section className="bg-tls-blue-100">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="aspect-[4/3] overflow-hidden lg:aspect-auto">
          <img
            src={tlsBrandFactory}
            alt="TLS-brand book pockets and jacket covers being manufactured in Tremont, Illinois"
            loading="lazy"
            className="h-full w-full object-cover"
            width={1024}
            height={1024}
          />
        </div>
        <div className="flex flex-col justify-center p-10 lg:p-16">
          <div className="eyebrow inline-flex items-center gap-1.5">
            <MapPin size={11} /> TLS BRAND · MADE IN TREMONT, IL
          </div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-ink-900">
            We make the supplies the world's libraries process books with.
          </h2>
          <p className="mt-5 max-w-prose-tls text-ink-700">
            For 40+ years, TLS has manufactured library book pockets, mylar jacket covers, and card
            pockets at our facility in Tremont, Illinois — reportedly the world's largest production
            of these supplies. Every TLS-brand item ships from the same building it was made in.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-ink-500">
            <span>Made in Illinois</span>
            <span>·</span>
            <span>Processed for libraries</span>
            <span>·</span>
            <span>In production since the 1980s</span>
          </div>
          <a
            href="#"
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-tls-teal-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-tls-teal-700/90"
          >
            Shop the TLS line <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ExpressOrder() {
  const [rows, setRows] = useState([
    { item: "EST-90234-OAK", qty: "6", notes: "" },
    { item: "TLS-BP-1000", qty: "200", notes: "Aurora warehouse" },
    { item: "", qty: "", notes: "" },
  ]);
  return (
    <section className="border-t border-line-200 bg-bone-50 py-20">
      <div className="container-tls grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="eyebrow">EXPRESS ORDER</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-ink-900">
            Have your catalog or order list open? Type and add.
          </h2>
          <p className="mt-4 max-w-prose-tls text-ink-500">
            For repeat catalog buyers. Type item numbers, set quantity, paste from a spreadsheet —
            and add the whole sheet to cart in one step.
          </p>
          <a href="#" className="mt-4 inline-block text-sm font-medium text-tls-blue-700 hover:underline">
            Paste from spreadsheet (CSV) →
          </a>
        </div>

        <div className="rounded-md border border-line-200 bg-white p-5">
          <div className="grid grid-cols-[1fr,80px,1fr,28px] gap-2 border-b border-line-200 pb-2 font-mono text-[11px] uppercase tracking-wider text-ink-500">
            <div>Item #</div>
            <div>Qty</div>
            <div>Notes</div>
            <div></div>
          </div>
          <div className="divide-y divide-line-200">
            {rows.map((row, i) => (
              <div key={i} className="grid grid-cols-[1fr,80px,1fr,28px] gap-2 py-2">
                <input
                  type="text"
                  value={row.item}
                  onChange={(e) => {
                    const next = [...rows];
                    next[i].item = e.target.value;
                    setRows(next);
                  }}
                  placeholder="EST-90234-OAK"
                  className="rounded-sm border border-line-200 bg-bone-50 px-2 py-1.5 font-mono text-xs focus:border-tls-teal-700 focus:outline-none"
                />
                <input
                  type="text"
                  value={row.qty}
                  onChange={(e) => {
                    const next = [...rows];
                    next[i].qty = e.target.value;
                    setRows(next);
                  }}
                  placeholder="1"
                  className="rounded-sm border border-line-200 bg-bone-50 px-2 py-1.5 text-center font-mono text-xs focus:border-tls-teal-700 focus:outline-none"
                />
                <input
                  type="text"
                  value={row.notes}
                  onChange={(e) => {
                    const next = [...rows];
                    next[i].notes = e.target.value;
                    setRows(next);
                  }}
                  placeholder="Optional"
                  className="rounded-sm border border-line-200 bg-bone-50 px-2 py-1.5 text-xs focus:border-tls-teal-700 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setRows(rows.filter((_, idx) => idx !== i))}
                  className="text-ink-400 hover:text-discontinued-600"
                  aria-label="Remove row"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setRows([...rows, { item: "", qty: "", notes: "" }])}
            className="mt-2 text-xs font-medium text-tls-blue-700 hover:underline"
          >
            + Add row
          </button>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <button className="rounded-md bg-tls-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-tls-teal-700/90">
              Add to cart
            </button>
            <button className="rounded-md border border-tls-blue-700 px-4 py-2 text-sm font-medium text-tls-blue-700 hover:bg-tls-blue-50">
              Save as project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShopByBrand() {
  return (
    <section className="border-t border-line-200 bg-bone-50 py-20">
      <div className="container-tls">
        <div className="mb-10 max-w-2xl">
          <div className="eyebrow">SHOP BY BRAND</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-ink-900">
            40+ brands librarians and educators know.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
          {BRANDS.map((brand) => (
            <a
              key={brand}
              href="#"
              className="flex aspect-[3/2] items-center justify-center rounded-md border border-line-200 bg-white text-lg font-semibold tracking-tight text-ink-500 grayscale transition-all hover:border-tls-blue-700 hover:text-ink-900 hover:grayscale-0"
            >
              {brand}
            </a>
          ))}
          <a
            href="#"
            className="flex aspect-[3/2] flex-col items-center justify-center gap-1 rounded-md border border-dashed border-line-200 bg-paper-100 text-tls-blue-700 hover:border-tls-blue-700"
          >
            <span className="font-mono text-xs uppercase tracking-wider">View all 40+</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function IdeasTrends() {
  return (
    <section className="bg-paper-100 py-20">
      <div className="container-tls">
        <div className="mb-10 max-w-2xl">
          <div className="eyebrow">IDEAS & TRENDS</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-ink-900">
            How libraries and classrooms are evolving.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ARTICLES.map((a, i) => (
            <a
              key={a.title}
              href="#"
              className="group flex flex-col overflow-hidden rounded-md border border-line-200 bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden bg-paper-100">
                <img
                  src={[zoneMaker, zonePublic, zoneOutdoor, tlsBrandFactory][i]}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-400">
                  {a.meta}
                </span>
                <h3 className="text-[17px] font-semibold leading-snug text-ink-900">{a.title}</h3>
                <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-tls-blue-700">
                  Read <ArrowRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="border-t border-line-200 bg-bone-50 py-20">
      <div className="container-tls">
        <div className="mb-10 max-w-2xl">
          <div className="eyebrow">FROM LIBRARIES & SCHOOLS WE SERVE</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-ink-900">
            Real projects. Real procurement teams.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CatalogRequest() {
  return (
    <section className="border-t border-line-200 bg-bone-50 py-20">
      <div className="container-tls grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="eyebrow">PRINTED CATALOGS, FREE TO INSTITUTIONS</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-ink-900">
            Request a printed catalog.
          </h2>
          <p className="mt-4 max-w-prose-tls text-ink-500">
            Six catalogs, mailed annually to schools, public libraries, and academic institutions.
            Library Catalog · Classroom Catalog · Maker Space Catalog · Outdoor Catalog · Furniture
            Lookbook · Supplies Reference.
          </p>
          <div className="mt-6 flex gap-2">
            {["LIB", "CLS", "MKR", "OUT", "FUR"].map((c, i) => (
              <div
                key={c}
                className="flex h-32 w-24 flex-col items-center justify-center rounded-sm bg-tls-blue-900 font-mono text-[11px] tracking-wider text-bone-50 shadow-md"
                style={{ transform: `rotate(${(i - 2) * 2}deg)` }}
              >
                <div className="text-tls-amber-500">TLS</div>
                <div className="mt-1">CATALOG</div>
                <div className="mt-1 text-2xl font-bold">{c}</div>
                <div className="mt-1 text-[9px] text-bone-50/60">ISSUE 41</div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-1 gap-3 rounded-md border border-line-200 bg-white p-6 sm:grid-cols-2"
        >
          {[
            { label: "Institution name", placeholder: "Plainview ISD" },
            { label: "Your role", placeholder: "Media Specialist" },
            { label: "Mailing address", placeholder: "123 Main St", full: true },
            { label: "City", placeholder: "Tremont" },
            { label: "State / ZIP", placeholder: "IL 61568" },
            { label: "Email", placeholder: "you@school.edu", full: true },
          ].map((f) => (
            <label key={f.label} className={f.full ? "sm:col-span-2" : ""}>
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink-500">
                {f.label}
              </span>
              <input
                type="text"
                placeholder={f.placeholder}
                className="mt-1 w-full rounded-md border border-line-200 bg-bone-50 px-3 py-2 text-sm focus:border-tls-teal-700 focus:outline-none focus:ring-1 focus:ring-tls-teal-700"
              />
            </label>
          ))}
          <button className="mt-2 rounded-md bg-tls-teal-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-tls-teal-700/90 sm:col-span-2">
            Send my catalogs
          </button>
          <p className="font-mono text-[11px] text-ink-400 sm:col-span-2">
            Or browse the digital catalog →
          </p>
        </form>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="bg-tls-blue-900">
      <div className="container-tls grid grid-cols-1 gap-8 py-16 lg:grid-cols-2 lg:items-center lg:py-20">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-tls-amber-500">
            PROJECT ALERTS
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-bone-50 md:text-4xl">
            New products, design ideas, and quote offers — quarterly, no spam.
          </h2>
          <p className="mt-3 max-w-prose-tls text-bone-50/70">
            Tie alerts to the zones you furnish — Library, Maker Space, or Outdoor — for relevant
            updates only.
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-2 sm:flex-row"
        >
          <input
            type="email"
            placeholder="you@school.edu"
            className="flex-1 rounded-md border border-bone-50/20 bg-tls-blue-900/50 px-4 py-3 text-bone-50 placeholder:text-bone-50/50 focus:border-tls-amber-500 focus:outline-none"
            aria-label="Email address"
          />
          <button className="rounded-md bg-tls-amber-600 px-6 py-3 text-sm font-medium text-white hover:bg-tls-amber-500">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

function StickyMobileCTAs() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 grid grid-cols-4 border-t border-line-200 bg-bone-50 lg:hidden">
      {[
        { icon: Phone, label: "Call", href: "tel:8005487204" },
        { icon: FolderOpen, label: "Project", href: "#" },
        { icon: Upload, label: "PO", href: "#" },
        { icon: Building2, label: "Quote", href: "#" },
      ].map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium text-ink-700"
        >
          <Icon size={18} className="text-tls-blue-700" />
          {label}
        </a>
      ))}
    </div>
  );
}

const Index = () => (
  <div className="min-h-screen bg-bone-50">
    <AnnouncementBar />
    <SiteHeader />
    <main>
      <Hero />
      <TrustStrip />
      <ShopByZone />
      <ShopByCategory />
      <FeaturedProducts />
      <InstitutionsBand />
      <ProjectWorkspace />
      <TLSBrandBand />
      <ExpressOrder />
      <ShopByBrand />
      <IdeasTrends />
      <Testimonials />
      <CatalogRequest />
      <Newsletter />
    </main>
    <SiteFooter />
    <StickyMobileCTAs />
  </div>
);

export default Index;
