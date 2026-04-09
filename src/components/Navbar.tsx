import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const SiteNavbar = () => {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Services", link: "#services" },
    { name: "About", link: "#about" },
    { name: "Why Us", link: "#why-us" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-3">
          <NavbarButton variant="primary" href="#contact">
            Get a Quote
          </NavbarButton>
        </div>
      </NavBody>

      <div
        data-visible="true"
        className="group relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col gap-3 rounded-2xl bg-white/85 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur lg:hidden"
      >
        <div className="flex items-center justify-between">
          <NavbarLogo />
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-md border border-zinc-200 bg-white/90 p-2 text-zinc-900 shadow-sm transition hover:bg-white"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="flex flex-col gap-3 rounded-xl border border-white/60 bg-white/95 px-4 py-4 text-sm text-zinc-800 shadow-[0_12px_24px_rgba(0,0,0,0.12)]">
            <div className="flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-md px-3 py-2 font-medium text-zinc-800 transition hover:bg-zinc-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex w-full flex-col gap-2">
              <a
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full rounded-md border border-zinc-200 bg-white px-4 py-2 text-center text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-100"
              >
                Services
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full rounded-md bg-zinc-900 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </Navbar>
  );
};

export default SiteNavbar;
