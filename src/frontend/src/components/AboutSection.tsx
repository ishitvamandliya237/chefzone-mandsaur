import { motion } from "motion/react";

const HIGHLIGHTS = [
  { emoji: "🥦", label: "100% Veg" },
  { emoji: "🧼", label: "Hygienic Kitchen" },
  { emoji: "🚀", label: "Fast Delivery" },
  { emoji: "⭐", label: "Premium Taste" },
];

const FOOD_EMOJIS = [
  { emoji: "🍕", label: "Pizza" },
  { emoji: "🍔", label: "Burger" },
  { emoji: "🍜", label: "Noodles" },
  { emoji: "🍛", label: "Indian" },
  { emoji: "🧆", label: "Snacks" },
  { emoji: "🥤", label: "Drinks" },
  { emoji: "🍰", label: "Desserts" },
  { emoji: "🥪", label: "Sandwiches" },
  { emoji: "🍟", label: "Fries" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="relative py-24 overflow-hidden"
      style={{
        background: "#1a1a2e",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle, oklch(0.68 0.22 30 / 0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none opacity-10"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.26 25 / 0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About <span className="gradient-warm-text">ChefZone</span>
          </h2>
          <div className="mx-auto w-24 h-1 rounded-full gradient-warm" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            <p className="text-base sm:text-lg text-muted-foreground font-body leading-relaxed">
              ChefZone Mandsaur is a modern cloud kitchen built with passion for
              delicious vegetarian food and fast service. Our mission is to
              bring restaurant-quality meals directly to your doorstep with
              hygiene, freshness, and unforgettable taste. From cheesy pizzas to
              flavorful Indian meals, ChefZone combines premium quality with
              affordable pricing. Every order is prepared with care in a
              high-tech kitchen environment designed for speed, consistency, and
              customer satisfaction.
            </p>

            {/* Highlight pills */}
            <div className="flex flex-wrap gap-3">
              {HIGHLIGHTS.map((h, i) => (
                <motion.span
                  key={h.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-glow text-sm font-semibold text-primary"
                >
                  <span className="text-lg">{h.emoji}</span>
                  {h.label}
                </motion.span>
              ))}
            </div>

            <a
              href="https://wa.me/918889431668"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="about.order_button"
              className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-full font-semibold text-white gradient-warm glow-orange transition-smooth hover:scale-105"
            >
              Order Now on WhatsApp →
            </a>
          </motion.div>

          {/* Right — Food emoji visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8 relative overflow-hidden"
          >
            {/* Glow accent */}
            <div
              className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-30 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.68 0.22 30 / 0.6) 0%, transparent 70%)",
              }}
            />

            <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
              Our <span className="gradient-warm-text">Menu Universe</span>
            </h3>

            <div className="grid grid-cols-3 gap-4">
              {FOOD_EMOJIS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-2xl transition-smooth hover:scale-110 cursor-default"
                  style={{ background: "rgba(124,58,237,0.12)" }}
                >
                  <span className="text-3xl">{item.emoji}</span>
                  <span className="text-xs text-muted-foreground text-center">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Food image below grid */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <img
                src="/assets/generated/about-food-grid.dim_600x600.jpg"
                alt="Premium ChefZone vegetarian dishes"
                className="w-full h-40 object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
