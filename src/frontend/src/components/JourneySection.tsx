import { motion } from "motion/react";

const VALUES = [
  { icon: "✨", text: "Traditional taste with a modern touch" },
  { icon: "🍲", text: "Freshly prepared homemade-style meals" },
  { icon: "❤️", text: "Quality and trust in every order" },
  { icon: "🌙", text: "Late-night food availability for Mandsaur" },
  { icon: "🤝", text: "Serving customers with care and consistency" },
];

export default function JourneySection() {
  return (
    <section
      id="journey"
      data-ocid="journey.section"
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #050510 0%, #050510 50%, #050510 100%)",
      }}
    >
      {/* Ambient purple glow blobs */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-1/4 w-[500px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,245,255,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
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
            className="inline-block text-xs font-semibold tracking-[0.3em] uppercase mb-3 px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(212,175,55,0.3)",
              border: "1px solid rgba(0,245,255,0.3)",
              color: "#00F5FF",
            }}
          >
            Our Story
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold mt-3"
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #00F5FF 50%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
            }}
          >
            My Journey
          </h2>
          <div
            className="mx-auto mt-4 h-0.5 w-28 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #D4AF37, #00F5FF, transparent)",
            }}
          />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div
              className="rounded-2xl p-7 flex flex-col gap-5"
              style={{
                background: "rgba(212,175,55,0.12)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(0,245,255,0.15)",
              }}
            >
              <p
                className="font-body text-base leading-relaxed"
                style={{ color: "#B0E0E6" }}
              >
                ChefZone ek passion-driven cloud kitchen hai, jo ghar ke swaad
                aur quality ko har customer tak pahunchane ke vision ke saath
                shuru hua. Is journey ki shuruaat{" "}
                <span className="font-semibold" style={{ color: "#00F5FF" }}>
                  Jasbeer Kaur aur Dilip Singh Narang (Lucky)
                </span>{" "}
                ne milkar ki, jahan traditional cooking experience aur modern
                culinary ideas ka perfect blend dekhne ko milta hai.
              </p>
              <p
                className="font-body text-base leading-relaxed"
                style={{ color: "#B0E0E6" }}
              >
                Food ke prati gehre lagav aur hospitality industry ke experience
                ne is sapne ko janam diya.{" "}
                <span className="font-semibold" style={{ color: "#00F5FF" }}>
                  Udaipur mein hotel management ki padhai
                </span>{" "}
                aur Radisson jaisi five-star property mein kaam karne ke baad,
                Mandsaur ke logon ke liye kuch alag aur unique shuru karne ka
                vision bana.
              </p>
              <p
                className="font-body text-base leading-relaxed"
                style={{ color: "#B0E0E6" }}
              >
                <span className="font-semibold" style={{ color: "#00F5FF" }}>
                  10 February 2025
                </span>{" "}
                ko ChefZone ki shuruaat hui, aur bina kisi promotion ke pehle hi
                din pehla order milna is journey ka yaadgaar pal bana. Tab se
                lekar aaj tak, ChefZone har customer tak fresh, hygienic aur
                delicious food pyaar ke saath pahunchata aa raha hai. Naye
                kitchen expansion aur thali system ke saath, yeh safar ab aur
                bhi aage badh raha hai.
              </p>
            </div>

            {/* Values list */}
            <div className="flex flex-col gap-3">
              {VALUES.map((val, i) => (
                <motion.div
                  key={val.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    background: "rgba(212,175,55,0.15)",
                    border: "1px solid rgba(212,175,55,0.3)",
                  }}
                >
                  <span className="text-xl flex-shrink-0">{val.icon}</span>
                  <span
                    className="font-body text-sm font-medium"
                    style={{ color: "#B0E0E6" }}
                  >
                    {val.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center"
            data-ocid="journey.founders_photo"
          >
            <div
              className="relative w-full max-w-md"
              style={{
                filter: "drop-shadow(0 0 40px rgba(212,175,55,0.6))",
              }}
            >
              {/* Decorative glow ring */}
              <div
                className="absolute -inset-3 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212,175,55,0.5), rgba(0,245,255,0.3))",
                  filter: "blur(12px)",
                  zIndex: 0,
                }}
              />
              <img
                src="/assets/journey-photo.png"
                alt="Founders of ChefZone — Jasbeer Kaur and Dilip Singh Narang (Lucky)"
                className="relative w-full rounded-2xl object-cover"
                style={{
                  border: "2px solid rgba(0,245,255,0.4)",
                  boxShadow:
                    "0 0 40px rgba(212,175,55,0.4), 0 20px 60px rgba(0,0,0,0.5)",
                  zIndex: 1,
                }}
              />
              {/* Caption badge */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-sm font-semibold font-display whitespace-nowrap"
                style={{
                  background:
                    "linear-gradient(135deg, #D4AF37, rgba(0,245,255,0.9))",
                  color: "#fff",
                  boxShadow: "0 4px 20px rgba(212,175,55,0.5)",
                  zIndex: 2,
                }}
              >
                Jasbeer Kaur &amp; Lucky — Founders
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
