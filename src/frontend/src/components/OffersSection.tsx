import { motion } from "motion/react";
import { useState } from "react";

const WA_LINK = "https://wa.me/918889431668";

const offers = [
  {
    badge: "20% OFF",
    title: "First Order Deal",
    desc: "Use code FIRST20 on your first WhatsApp order",
    emoji: "🎉",
    color: "from-orange-500 to-red-600",
  },
  {
    badge: "B1G1",
    title: "Buy 1 Get 1 Free",
    desc: "On selected pizzas and burgers every Tuesday",
    emoji: "🍕",
    color: "from-red-500 to-orange-600",
  },
  {
    badge: "LATE NIGHT",
    title: "Midnight Combo Deals",
    desc: "Special late night combos 11 PM to 3 AM",
    emoji: "🌙",
    color: "from-orange-600 to-yellow-600",
  },
  {
    badge: "FREE",
    title: "Free Delivery Above ₹299",
    desc: "No delivery charges on orders above ₹299",
    emoji: "🚀",
    color: "from-red-600 to-pink-600",
  },
  {
    badge: "15% OFF",
    title: "Student Special",
    desc: "15% OFF with valid student ID every day",
    emoji: "🎓",
    color: "from-orange-500 to-red-500",
  },
];

function OfferCard({
  offer,
  index,
}: { offer: (typeof offers)[number]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-ocid={`offers.card.${index + 1}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? "scale(1.04)" : "scale(1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered
          ? "0 0 32px 4px rgba(251,113,20,0.45), 0 8px 40px rgba(0,0,0,0.5)"
          : "0 4px 24px rgba(0,0,0,0.4)",
      }}
      className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 p-6 flex flex-col gap-4 cursor-pointer"
    >
      {/* gradient border shimmer */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 pointer-events-none bg-gradient-to-br ${offer.color}`}
        style={{
          opacity: hovered ? 0.12 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
      {/* Shimmer sweep */}
      {hovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.2s infinite",
          }}
        />
      )}

      <div className="flex items-start justify-between gap-3">
        <span className="text-4xl">{offer.emoji}</span>
        <span
          className={`bg-gradient-to-r ${offer.color} text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase shadow-lg`}
        >
          {offer.badge}
        </span>
      </div>

      <div>
        <h3 className="font-display text-lg font-bold text-foreground mb-1">
          {offer.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {offer.desc}
        </p>
      </div>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid={`offers.grab_button.${index + 1}`}
        className={`mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r ${offer.color} hover:opacity-90 transition-opacity shadow-md`}
      >
        <span>💬</span> Grab Offer
      </a>
    </motion.div>
  );
}

export default function OffersSection() {
  return (
    <section
      id="offers"
      data-ocid="offers.section"
      className="py-20 px-4 relative"
    >
      {/* Section bg glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.68 0.22 30) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 shadow-lg">
            🔥 Hot Deals
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Hot Deals &amp;{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Offers
            </span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Exclusive deals crafted for our valued customers. Don&apos;t miss
            out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <OfferCard key={offer.title} offer={offer} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
}
