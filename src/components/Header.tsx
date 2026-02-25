import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-surface/80 border-b border-border/50">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/icon.png" alt="Eczemate" className="w-9 h-9 rounded-xl shadow-sm" />
          <span className="font-display font-bold text-2xl tracking-tight text-sage-500">
            eczemate
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/#features"
            className="text-sage-700 hover:text-sage-950 transition-colors text-sm font-medium link-underline"
          >
            Features
          </a>
          <Link
            href="/privacy"
            className="text-sage-700 hover:text-sage-950 transition-colors text-sm font-medium link-underline"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sage-700 hover:text-sage-950 transition-colors text-sm font-medium link-underline"
          >
            Terms
          </Link>
          <a
            href="/#download"
            className="inline-flex items-center gap-2 bg-sage-950 text-white text-sm font-medium px-5 py-2.5 rounded-[var(--radius-button)] hover:bg-sage-800 transition-colors shadow-sm"
          >
            Download
          </a>
        </nav>

        {/* Mobile Menu (client component) */}
        <MobileMenu />
      </div>
    </header>
  );
}
