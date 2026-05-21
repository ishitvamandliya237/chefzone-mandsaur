import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "My Journey", href: "#journey" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Social", href: "#social" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP_URL = "https://wa.me/918889431668";
const INSTAGRAM_URL = "https://www.instagram.com/chefzone_mandsaur";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav
        data-ocid="navbar"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled
            ? "rgba(10,10,26,0.95)"
            : "rgba(10,10,26,0.75)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0,245,255,0.25)",
          boxShadow: isScrolled ? "0 4px 30px rgba(0,245,255,0.12)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              data-ocid="navbar.logo_link"
              className="flex items-center gap-3 flex-shrink-0"
            >
              {logoError ? (
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base"
                  style={{
                    background: "linear-gradient(135deg, #D4AF37, #00F5FF)",
                    boxShadow: "0 0 16px rgba(212,175,55,0.6)",
                  }}
                >
                  CZ
                </div>
              ) : (
                <img
                  src="/assets/images/chefzone-logo.png"
                  alt="ChefZone"
                  className="w-11 h-11 rounded-full object-cover"
                  style={{ boxShadow: "0 0 16px rgba(212,175,55,0.6)" }}
                  onError={() => setLogoError(true)}
                />
              )}
              <span
                className="font-bold text-lg hidden sm:block"
                style={{ color: "#00F5FF" }}
              >
                ChefZone
              </span>
            </a>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid={`navbar.${link.label.toLowerCase().replace(/ /g, "_")}_link`}
                    className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{ color: "#c8c8f0" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#00F5FF";
                      (e.currentTarget as HTMLAnchorElement).style.textShadow =
                        "0 0 12px rgba(0,245,255,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#c8c8f0";
                      (e.currentTarget as HTMLAnchorElement).style.textShadow =
                        "none";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Buttons + Hamburger */}
            <div className="flex items-center gap-2">
              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="navbar.order_now_button"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                  boxShadow: "0 0 16px rgba(37,211,102,0.4)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 28px rgba(37,211,102,0.7)";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 16px rgba(37,211,102,0.4)";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "scale(1)";
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Order Now
              </a>

              {/* Instagram CTA */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="navbar.instagram_button"
                className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
                aria-label="Follow us on Instagram"
                title="Follow us on Instagram"
                style={{
                  background:
                    "linear-gradient(135deg, #E1306C, #C13584, #833AB4)",
                  boxShadow: "0 0 14px rgba(225,48,108,0.5)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 24px rgba(225,48,108,0.8)";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 14px rgba(225,48,108,0.5)";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "scale(1)";
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <title>Instagram</title>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>

              {/* Hamburger */}
              <button
                type="button"
                data-ocid="navbar.hamburger_button"
                className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-all duration-200"
                style={{ color: "#7C3AED" }}
                aria-label="Toggle mobile menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((v) => !v)}
              >
                <span
                  className="block w-6 h-0.5 bg-current transition-all duration-300 origin-center"
                  style={{
                    transform: isMenuOpen
                      ? "rotate(45deg) translateY(8px)"
                      : "none",
                  }}
                />
                <span
                  className="block w-6 h-0.5 bg-current transition-all duration-300"
                  style={{ opacity: isMenuOpen ? 0 : 1 }}
                />
                <span
                  className="block w-6 h-0.5 bg-current transition-all duration-300 origin-center"
                  style={{
                    transform: isMenuOpen
                      ? "rotate(-45deg) translateY(-8px)"
                      : "none",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Drawer */}
      <div
        data-ocid="navbar.mobile_menu"
        className="fixed inset-0 z-40 flex flex-col md:hidden transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.98)",
          backdropFilter: "blur(24px)",
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={`navbar.mobile_${link.label.toLowerCase().replace(/ /g, "_")}_link`}
              className="text-2xl font-bold transition-all duration-200"
              style={{ color: "#1a1040" }}
              onClick={closeMenu}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#00B8CC";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#1a1040";
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 mt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="navbar.mobile_order_button"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                boxShadow: "0 0 20px rgba(37,211,102,0.5)",
              }}
              onClick={closeMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Order on WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="navbar.mobile_instagram_button"
              className="flex items-center justify-center w-12 h-12 rounded-full"
              aria-label="Follow us on Instagram"
              title="Follow us on Instagram"
              style={{
                background:
                  "linear-gradient(135deg, #E1306C, #C13584, #833AB4)",
                boxShadow: "0 0 20px rgba(225,48,108,0.5)",
              }}
              onClick={closeMenu}
            >
              <svg
                viewBox="0 0 24 24"
                fill="white"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <title>Instagram</title>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
