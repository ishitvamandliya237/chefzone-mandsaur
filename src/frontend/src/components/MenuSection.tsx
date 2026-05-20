import { motion } from "motion/react";

const menuPhotos = [
  { src: "/assets/images/menu-photo-2.png", alt: "Menu" },
  { src: "/assets/images/menu-photo-1.png", alt: "Menu" },
  { src: "/assets/images/menu-photo-3.png", alt: "Menu" },
  { src: "/assets/images/menu-photo-4.png", alt: "Menu" },
  { src: "/assets/images/menu-photo-5.png", alt: "Menu" },
];

const WHATSAPP_URL = "https://wa.me/918889431668";

export default function MenuSection() {
  return (
    <section
      id="menu"
      data-ocid="menu.section"
      className="relative py-20 px-4 overflow-hidden"
      style={{ background: "#050510" }}
    >
      {/* Background glow blobs */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/4 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,245,255,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
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
              background: "rgba(212,175,55,0.3)",
              border: "1px solid rgba(0,245,255,0.3)",
              color: "#00F5FF",
            }}
          >
            Full Menu
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3"
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #00F5FF 50%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Menu
          </h2>
          <p
            className="mt-2 text-sm uppercase tracking-widest"
            style={{ color: "#B0E0E6" }}
          >
            Explore our premium vegetarian menu
          </p>
          <div
            className="mx-auto mt-4 h-0.5 w-28 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #D4AF37, #00F5FF, transparent)",
            }}
          />
        </motion.div>

        {/* Menu Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuPhotos.map((photo, index) => (
            <motion.div
              key={photo.src}
              data-ocid={`menu.item.${index + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl group"
              style={{
                border: "1px solid rgba(0,245,255,0.4)",
                boxShadow:
                  "0 0 20px rgba(0,245,255,0.25), 0 0 40px rgba(212,175,55,0.15)",
                backdropFilter: "blur(12px)",
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto object-cover transform transition-all duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay glow */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: "inset 0 0 40px rgba(0,245,255,0.3)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="mt-12 rounded-2xl p-8 flex flex-col items-center justify-center gap-5 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            background: "rgba(212,175,55,0.15)",
            border: "1px solid rgba(212,175,55,0.4)",
            backdropFilter: "blur(12px)",
          }}
        >
          <p className="text-lg font-bold" style={{ color: "#ffffff" }}>
            Hungry? Place Your Order Now!
          </p>
          <p className="text-sm" style={{ color: "#B0E0E6" }}>
            Fresh &bull; Hygienic &bull; Delivered with Love
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="menu.cta_order_button"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #D4AF37, #00F5FF)",
              boxShadow:
                "0 0 24px rgba(212,175,55,0.5), 0 0 12px rgba(0,245,255,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 36px rgba(212,175,55,0.8), 0 0 18px rgba(0,245,255,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 24px rgba(212,175,55,0.5), 0 0 12px rgba(0,245,255,0.4)";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <title>WhatsApp</title>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Order on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
