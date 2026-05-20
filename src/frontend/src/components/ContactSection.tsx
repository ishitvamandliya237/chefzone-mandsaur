import { motion } from "motion/react";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/chefzone_mandsaur",
    color: "#E1306C",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <title>Instagram</title>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/ChefZone-Mandsaur/61572917747575/",
    color: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <title>Facebook</title>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Zomato",
    href: "https://zomato.onelink.me/xqzv/vyynojzt",
    color: "#E23744",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <title>Zomato</title>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-5.55 7.498h5.55v1.748H6.44l5.549-7.497H6.44V8.248h11.122z" />
      </svg>
    ),
  },
  {
    name: "Swiggy",
    href: "https://www.swiggy.com/menu/1040380",
    color: "#FC8019",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <title>Swiggy</title>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.5 5c2.76 0 5 2.24 5 5 0 3.5-5 9-5 9S7.5 13.5 7.5 10c0-2.76 2.24-5 5-5zm0 2.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="relative py-24 px-4"
      style={{ background: "oklch(0.08 0.01 50)" }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 100%, oklch(0.68 0.22 30 / 0.4), transparent)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "oklch(0.68 0.22 30)" }}
          >
            Reach Us
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-foreground"
            style={{
              textShadow: "0 0 30px oklch(0.68 0.22 30 / 0.4)",
            }}
          >
            Find Us &amp;{" "}
            <span className="gradient-warm-text">Get In Touch</span>
          </h2>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: Contact details glassmorphism card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-2xl p-8 flex flex-col gap-7"
            data-ocid="contact.card"
          >
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.68 0.22 30 / 0.25), oklch(0.62 0.26 25 / 0.15))",
                  border: "1px solid oklch(0.68 0.22 30 / 0.3)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-5 h-5"
                  style={{ color: "oklch(0.68 0.22 30)" }}
                >
                  <title>Phone</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Phone / WhatsApp
                </p>
                <a
                  href="tel:+918889431668"
                  data-ocid="contact.phone_link"
                  className="text-xl font-semibold font-display text-foreground transition-smooth hover:text-shadow-glow"
                  style={{ color: "oklch(0.68 0.22 30)" }}
                >
                  8889431668
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.68 0.22 30 / 0.25), oklch(0.62 0.26 25 / 0.15))",
                  border: "1px solid oklch(0.68 0.22 30 / 0.3)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-5 h-5"
                  style={{ color: "oklch(0.68 0.22 30)" }}
                >
                  <title>Clock</title>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Opening Hours
                </p>
                <p className="text-lg font-semibold font-display text-foreground">
                  Mon–Sun: 7:00 AM – 3:00 AM
                </p>
              </div>
            </div>

            {/* Divider */}
            <div
              className="h-px w-full"
              style={{
                background:
                  "linear-gradient(to right, transparent, oklch(0.68 0.22 30 / 0.3), transparent)",
              }}
            />

            {/* Social media row */}
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                Find Us On
              </p>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`contact.social_${s.name.toLowerCase()}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-smooth"
                    style={{
                      background: `${s.color}18`,
                      border: `1px solid ${s.color}40`,
                      color: s.color,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                        `0 0 16px ${s.color}60`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                        "none";
                    }}
                  >
                    {s.icon}
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918889431668"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.whatsapp_button"
              className="mt-2 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-bold text-lg font-display transition-smooth glow-orange"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.68 0.22 30), oklch(0.62 0.26 25))",
                color: "#fff",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "scale(1)";
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.528 5.844L.057 23.888l6.21-1.63A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-4.999-1.365l-.358-.213-3.688.968.985-3.595-.234-.371A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
              </svg>
              Order on WhatsApp
            </a>
          </motion.div>

          {/* RIGHT: Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-2xl overflow-hidden"
            style={{
              border: "1px solid oklch(0.68 0.22 30 / 0.25)",
              boxShadow: "0 0 30px oklch(0.68 0.22 30 / 0.15)",
              minHeight: "420px",
            }}
            data-ocid="contact.map"
          >
            <iframe
              title="ChefZone Mandsaur Location"
              src="https://maps.google.com/maps?q=33H9+2JQ,+Saket+Nagar,+Nai+Abaadi,+Mandsaur,+Madhya+Pradesh+458001&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
