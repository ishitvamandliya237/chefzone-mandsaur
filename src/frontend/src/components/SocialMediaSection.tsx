import { motion } from "motion/react";

const SOCIAL_CARDS = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    cta: "Chat on WhatsApp",
    href: "https://wa.me/918889431668",
    brandColor: "#25D366",
    glowColor: "rgba(37,211,102,0.5)",
    glowHover: "rgba(37,211,102,0.8)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12"
        aria-hidden="true"
      >
        <title>WhatsApp</title>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    name: "Instagram",
    cta: "Follow Us",
    href: "https://www.instagram.com/chefzone_mandsaur",
    brandColor: "#E1306C",
    glowColor: "rgba(225,48,108,0.5)",
    glowHover: "rgba(225,48,108,0.8)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12"
        aria-hidden="true"
      >
        <title>Instagram</title>
        <defs>
          <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFDC80" />
            <stop offset="25%" stopColor="#FCAF45" />
            <stop offset="50%" stopColor="#F77737" />
            <stop offset="75%" stopColor="#C13584" />
            <stop offset="100%" stopColor="#833AB4" />
          </linearGradient>
        </defs>
        <path
          fill="url(#ig-grad)"
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
        />
      </svg>
    ),
  },
  {
    id: "facebook",
    name: "Facebook",
    cta: "Follow Us",
    href: "https://www.facebook.com/people/ChefZone-Mandsaur/61572917747575/",
    brandColor: "#1877F2",
    glowColor: "rgba(24,119,242,0.5)",
    glowHover: "rgba(24,119,242,0.8)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="#1877F2"
        className="w-12 h-12"
        aria-hidden="true"
      >
        <title>Facebook</title>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    id: "youtube",
    name: "YouTube",
    cta: "Subscribe",
    href: "https://youtube.com/@chefzonemandsaur?si=-rCoBrG9CFGxLK7U",
    brandColor: "#FF0000",
    glowColor: "rgba(255,0,0,0.5)",
    glowHover: "rgba(255,0,0,0.8)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="#FF0000"
        className="w-12 h-12"
        aria-hidden="true"
      >
        <title>YouTube</title>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function SocialMediaSection() {
  return (
    <section
      id="social"
      data-ocid="social.section"
      className="relative py-20 px-4 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #CFFAFE, #EDE9FE)" }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(196,181,253,0.25) 0%, rgba(207,250,254,0.2) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-xs font-semibold tracking-[0.3em] uppercase mb-3 px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(196,181,253,0.4)",
              border: "1px solid rgba(196,181,253,0.6)",
              color: "#1e1b4b",
            }}
          >
            Connect With Us
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3"
            style={{
              background:
                "linear-gradient(135deg, #1e1b4b 0%, #7C3AED 50%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Find Us On Social Media
          </h2>
          <div
            className="mx-auto mt-4 h-0.5 w-28 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #00F5FF, #D4AF37, transparent)",
            }}
          />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {SOCIAL_CARDS.map((card, index) => (
            <motion.a
              key={card.id}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid={`social.${card.id}_card`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-5 p-7 rounded-2xl transition-all duration-300 group"
              style={{
                background: "rgba(255,255,255,0.7)",
                border: `1px solid ${card.brandColor}55`,
                backdropFilter: "blur(16px)",
                boxShadow: `0 4px 20px ${card.glowColor.replace("0.5", "0.15")}, 0 0 0 0.5px rgba(0,245,255,0.15)`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.boxShadow = `0 0 40px ${card.glowColor}, 0 0 80px ${card.glowColor.replace("0.5", "0.1")}`;
                el.style.border = `1px solid ${card.brandColor}88`;
                el.style.transform = "translateY(-6px) scale(1.03)";
                el.style.background = "rgba(255,255,255,0.9)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.boxShadow = `0 4px 20px ${card.glowColor.replace("0.5", "0.15")}, 0 0 0 0.5px rgba(0,245,255,0.15)`;
                el.style.border = `1px solid ${card.brandColor}55`;
                el.style.transform = "translateY(0) scale(1)";
                el.style.background = "rgba(255,255,255,0.7)";
              }}
            >
              {/* Icon */}
              <div
                className="rounded-2xl p-3"
                style={{
                  background: `${card.brandColor}15`,
                  boxShadow: `0 0 20px ${card.glowColor.replace("0.5", "0.3")}`,
                }}
              >
                {card.icon}
              </div>

              {/* Platform name */}
              <span
                className="font-bold text-lg"
                style={{ color: card.brandColor }}
              >
                {card.name}
              </span>

              {/* CTA Button */}
              <button
                type="button"
                data-ocid={`social.${card.id}_button`}
                className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                style={{
                  background: `linear-gradient(135deg, ${card.brandColor}CC, ${card.brandColor}99)`,
                  boxShadow: `0 0 12px ${card.glowColor}`,
                }}
              >
                {card.cta}
              </button>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
