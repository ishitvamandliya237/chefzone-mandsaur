import { motion } from "motion/react";

const FEATURES = [
  {
    emoji: "🧼",
    title: "Hygienic Kitchen",
    desc: "Prepared in a fully sanitized high-tech cloud kitchen with strict quality controls.",
  },
  {
    emoji: "🥦",
    title: "Fresh Ingredients",
    desc: "Farm-fresh vegetables and quality ingredients sourced and delivered daily.",
  },
  {
    emoji: "🚀",
    title: "Fast Delivery",
    desc: "Hot food delivered to your doorstep within 30–45 minutes, every time.",
  },
  {
    emoji: "💰",
    title: "Affordable Pricing",
    desc: "Restaurant-quality food at everyday prices — no compromise on taste.",
  },
  {
    emoji: "⭐",
    title: "Premium Taste",
    desc: "Chef-crafted recipes with authentic flavors that keep you coming back.",
  },
  {
    emoji: "🌙",
    title: "Late Night Orders",
    desc: "Open from 7 AM to 3 AM — satisfy those midnight cravings any time!",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      data-ocid="features.section"
      className="py-24 relative overflow-hidden"
      style={{ background: "#141428" }}
    >
      {/* Subtle warm line accent top */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="gradient-warm-text">ChefZone?</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            We're not just a kitchen — we're an experience crafted for your
            satisfaction.
          </p>
          <div className="mx-auto w-24 h-1 rounded-full gradient-warm mt-4" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              data-ocid={`features.card.${i + 1}`}
              className="group rounded-2xl p-6 flex flex-col gap-4 transition-smooth hover:scale-[1.03] hover:border-glow cursor-default"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(0,245,255,0.25)",
              }}
            >
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl gradient-warm opacity-90 group-hover:scale-110 transition-smooth">
                {feature.emoji}
              </div>

              <h3 className="font-display text-lg font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {feature.desc}
              </p>

              {/* Bottom accent line */}
              <div className="mt-auto h-px w-0 group-hover:w-full gradient-warm rounded-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle warm line accent bottom */}
      <div
        className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,245,255,0.3), transparent)",
        }}
      />
    </section>
  );
}
