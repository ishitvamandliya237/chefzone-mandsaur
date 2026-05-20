import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "Rahul Sharma",
    rating: 5,
    text: "Best cloud kitchen in Mandsaur! Amazing taste and fast delivery.",
    location: "Mandsaur",
  },
  {
    name: "Priya Patel",
    rating: 5,
    text: "Pizza quality is superb and packaging is premium. Will order again!",
    location: "Mandsaur",
  },
  {
    name: "Amit Verma",
    rating: 4,
    text: "Affordable prices with restaurant-level food. Highly recommend!",
    location: "Mandsaur",
  },
  {
    name: "Sneha Joshi",
    rating: 5,
    text: "Late night delivery saved my hunger! Best decision ever.",
    location: "Mandsaur",
  },
  {
    name: "Vikram Singh",
    rating: 5,
    text: "The paneer tikka pizza is absolutely divine. ChefZone is the best!",
    location: "Mandsaur",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.span
          key={star}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: star * 0.08, type: "spring", stiffness: 300 }}
          className="text-lg"
          style={{
            color: star <= rating ? "#D4AF37" : "oklch(0.35 0.01 50)",
          }}
        >
          ★
        </motion.span>
      ))}
    </div>
  );
}

function Initials({ name }: { name: string }) {
  const parts = name.split(" ");
  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.68 0.22 30), oklch(0.55 0.26 25))",
      }}
    >
      {parts
        .map((p) => p[0])
        .join("")
        .slice(0, 2)}
    </div>
  );
}

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = reviews.length;

  useEffect(() => {
    if (paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, total]);

  const goTo = (idx: number) => {
    setCurrent((idx + total) % total);
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  return (
    <section
      id="reviews"
      data-ocid="reviews.section"
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* bg glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.62 0.26 25) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            ⭐ Reviews
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What Our{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4 }}
                data-ocid={`reviews.card.${current + 1}`}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
                style={{
                  boxShadow:
                    "0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(251,113,20,0.15)",
                }}
              >
                <div className="text-6xl text-orange-400/30 font-display leading-none mb-4 select-none">
                  &ldquo;
                </div>
                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6 font-body italic">
                  {reviews[current].text}
                </p>
                <div className="flex items-center gap-4">
                  <Initials name={reviews[current].name} />
                  <div>
                    <p className="font-semibold text-foreground font-display">
                      {reviews[current].name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {reviews[current].location}
                    </p>
                    <StarRating rating={reviews[current].rating} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={prev}
            data-ocid="reviews.prev_button"
            aria-label="Previous review"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-card border border-white/10 flex items-center justify-center text-foreground hover:border-orange-500 hover:text-orange-400 transition-colors hidden md:flex"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            data-ocid="reviews.next_button"
            aria-label="Next review"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-card border border-white/10 flex items-center justify-center text-foreground hover:border-orange-500 hover:text-orange-400 transition-colors hidden md:flex"
          >
            →
          </button>
        </div>

        {/* Dot indicators */}
        <div
          className="flex justify-center gap-2 mt-6"
          data-ocid="reviews.dots"
        >
          {reviews.map((review, i) => (
            <button
              key={review.name}
              type="button"
              onClick={() => goTo(i)}
              data-ocid={`reviews.dot.${i + 1}`}
              aria-label={`Go to review ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "28px" : "10px",
                height: "10px",
                background:
                  i === current
                    ? "linear-gradient(90deg, #D4AF37, #00F5FF)"
                    : "oklch(0.35 0.01 50)",
              }}
            />
          ))}
        </div>

        {/* Mobile arrows below */}
        <div className="flex justify-center gap-4 mt-4 md:hidden">
          <button
            type="button"
            onClick={prev}
            data-ocid="reviews.prev_button_mobile"
            aria-label="Previous review"
            className="w-10 h-10 rounded-full bg-card border border-white/10 flex items-center justify-center text-foreground hover:border-orange-500 hover:text-orange-400 transition-colors"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            data-ocid="reviews.next_button_mobile"
            aria-label="Next review"
            className="w-10 h-10 rounded-full bg-card border border-white/10 flex items-center justify-center text-foreground hover:border-orange-500 hover:text-orange-400 transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
