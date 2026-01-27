import { useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#experience", label: t("nav.experience") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: t("nav.contact") },
    { href: "#about", label: "About" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 py-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 flex-nowrap min-w-0">
          <span className="font-bold truncate min-w-0">{t("hero.name")}</span>

          <div className="flex items-center gap-3 shrink-0">
            <nav className="hidden sm:flex space-x-4 text-sm text-white/70">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>

            <LanguageSwitcher compact />

            <button
              type="button"
              className="sm:hidden inline-flex items-center justify-center rounded border border-white/20 p-2 text-white/70 hover:text-white"
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <nav className="sm:hidden mt-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-3 text-sm text-white/70">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-white"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        ) : null}
      </header>

      <main className="flex-1 px-6 py-12">
        <div className="max-w-5xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
