import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "motion/react";
import { useRef } from "react";
import type { Mesh } from "three";

const STATS = [
  { number: "18k+", label: "Happy Customers" },
  { number: "100%", label: "Veg" },
  { number: "30 Min", label: "Fast Delivery" },
  { number: "⭐ 4.9", label: "Premium Taste" },
];

function FloatingShape({
  position,
  shape,
  speed,
  color,
}: {
  position: [number, number, number];
  shape: "torus" | "sphere" | "box" | "dodecahedron";
  speed: number;
  color: string;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() * speed;
    meshRef.current.rotation.x = t * 0.5;
    meshRef.current.rotation.y = t * 0.8;
    meshRef.current.position.y = position[1] + Math.sin(t * 0.5) * 0.3;
  });

  const mat = (
    <meshStandardMaterial
      color={color}
      emissive={color}
      emissiveIntensity={0.4}
      roughness={0.2}
      metalness={0.7}
    />
  );

  return (
    <mesh ref={meshRef} position={position}>
      {shape === "torus" && <torusKnotGeometry args={[0.6, 0.2, 64, 16]} />}
      {shape === "sphere" && <sphereGeometry args={[0.7, 32, 32]} />}
      {shape === "box" && <boxGeometry args={[1, 1, 1]} />}
      {shape === "dodecahedron" && <dodecahedronGeometry args={[0.7]} />}
      {mat}
    </mesh>
  );
}

function FoodScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#D4AF37" />
      <pointLight position={[-5, -3, 3]} intensity={1.5} color="#00F5FF" />
      <FloatingShape
        position={[-1.8, 0.5, 0]}
        shape="torus"
        speed={0.4}
        color="#D4AF37"
      />
      <FloatingShape
        position={[1.5, -0.8, -1]}
        shape="sphere"
        speed={0.6}
        color="#00F5FF"
      />
      <FloatingShape
        position={[0, 1.5, -2]}
        shape="dodecahedron"
        speed={0.3}
        color="#D4AF37"
      />
      <FloatingShape
        position={[-0.5, -1.5, 0.5]}
        shape="box"
        speed={0.5}
        color="#00F5FF"
      />
    </>
  );
}

export default function HeroSection() {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-ocid="home.section"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #EDE9FE 0%, #CFFAFE 50%, #FEF9C3 100%)",
      }}
    >
      {/* Warm gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(212,175,55,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase glass-card border-glow"
              style={{ color: "#7C3AED" }}
            >
              🍕 Now Open in Mandsaur
            </span>
          </motion.div>

          {/* Heading */}
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ color: "#1e1b4b" }}
          >
            Mandsaur's First{" "}
            <span className="gradient-warm-text text-shadow-glow">Premium</span>
            <br />
            Cloud Kitchen
          </h1>

          <p
            className="text-base sm:text-lg font-body"
            style={{ color: "#4c1d95" }}
          >
            <span className="font-semibold" style={{ color: "#7C3AED" }}>
              Fresh
            </span>{" "}
            •{" "}
            <span className="font-semibold" style={{ color: "#7C3AED" }}>
              Fast
            </span>{" "}
            •{" "}
            <span className="font-semibold" style={{ color: "#7C3AED" }}>
              Fully Veg
            </span>{" "}
            •{" "}
            <span className="font-semibold" style={{ color: "#7C3AED" }}>
              Delivered with Love
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://wa.me/918889431668"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.whatsapp_button"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white gradient-warm glow-orange transition-smooth hover:scale-105 hover:glow-orange shadow-lg"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L0 24l6.332-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.017-1.376l-.36-.214-3.726.888.921-3.617-.235-.372A9.794 9.794 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
              </svg>
              Order on WhatsApp
            </a>
            <button
              type="button"
              onClick={scrollToMenu}
              data-ocid="hero.explore_menu_button"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold glass-card border-glow transition-smooth hover:scale-105 hover:glow-orange"
              style={{ color: "#1e1b4b" }}
            >
              Explore Menu ↓
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl px-3 py-3 flex flex-col items-center text-center gap-1"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(196,181,253,0.5)",
                }}
              >
                <span
                  className="font-display font-bold text-lg"
                  style={{ color: "#7C3AED" }}
                >
                  {stat.number}
                </span>
                <span className="text-xs" style={{ color: "#4c1d95" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — 3D Canvas (desktop only) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden md:block relative h-[480px] rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 rounded-2xl glass-card" />
          <Canvas
            camera={{ position: [0, 0, 5], fov: 60 }}
            style={{ background: "transparent" }}
            gl={{ alpha: true, antialias: true }}
          >
            <FoodScene />
          </Canvas>
          {/* Decorative label */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full glass-card border-glow text-xs text-primary font-semibold tracking-widest">
            ChefZone Kitchen
          </div>
        </motion.div>
      </div>
    </section>
  );
}
