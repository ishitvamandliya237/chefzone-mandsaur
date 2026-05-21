import { motion } from "motion/react";
import { useState } from "react";

export default function GallerySection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="gallery"
      data-ocid="gallery.section"
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: "#0d0b1e" }}
    >
      {/* bg glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, rgba(212,175,55,0.6) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,245,255,0.4) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block text-xs font-semibold tracking-[0.3em] uppercase mb-3 px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(212,175,55,0.3)",
              border: "1px solid rgba(0,245,255,0.3)",
              color: "#00F5FF",
            }}
          >
            📸 Gallery
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold mt-3"
            style={{
              background:
                "linear-gradient(135deg, #f0f0ff 0%, #00F5FF 60%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Gallery
          </h2>
          <p className="mt-3 text-base" style={{ color: "#b0b0d8" }}>
            Explore our delicious food and kitchen moments
          </p>
        </motion.div>

        {/* Single gallery card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div
            data-ocid="gallery.card"
            className="w-full max-w-lg rounded-3xl p-10 flex flex-col items-center gap-7 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(212,175,55,0.12) 100%)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(0,245,255,0.35)",
              boxShadow:
                "0 8px 40px rgba(124,58,237,0.12), inset 0 1px 0 rgba(0,245,255,0.15)",
            }}
          >
            {/* Camera icon */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,175,55,0.4), rgba(0,245,255,0.2))",
                border: "2px solid rgba(0,245,255,0.3)",
                boxShadow: "0 0 30px rgba(212,175,55,0.4)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00F5FF"
                strokeWidth={1.5}
                className="w-9 h-9"
                aria-hidden="true"
              >
                <title>Gallery</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                />
              </svg>
            </div>

            <div>
              <h3
                className="font-display font-bold text-2xl mb-2"
                style={{ color: "#f0f0ff" }}
              >
                ChefZone Gallery
              </h3>
              <p className="font-body text-sm" style={{ color: "#b0b0d8" }}>
                Dive into our collection of food photography, kitchen visuals,
                and delightful moments from ChefZone Mandsaur.
              </p>
            </div>

            <a
              href="https://drive.google.com/file/d/166i0_aC0B5p8_hgeHnv6He9fzdz-wXG9/preview"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="gallery.view_button"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl font-display font-bold text-base transition-smooth"
              style={{
                background: hovered
                  ? "linear-gradient(135deg, #00F5FF, #D4AF37)"
                  : "linear-gradient(135deg, #D4AF37, #7c3aed)",
                color: "#fff",
                boxShadow: hovered
                  ? "0 0 40px rgba(212,175,55,0.8), 0 0 80px rgba(0,245,255,0.3)"
                  : "0 0 24px rgba(212,175,55,0.5)",
                transform: hovered ? "scale(1.04)" : "scale(1)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-5 h-5"
                aria-hidden="true"
              >
                <title>View Gallery</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75h16.5v16.5H3.75V3.75z"
                />
              </svg>
              View Our Gallery
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
