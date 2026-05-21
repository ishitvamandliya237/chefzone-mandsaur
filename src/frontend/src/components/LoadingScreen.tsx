import { useEffect, useRef, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [dotCount, setDotCount] = useState(1);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dotIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Progress bar — fills from 0 → 100 over ~2s
    const start = Date.now();
    const duration = 2000;
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct >= 100 && intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }, 30);

    // Animated dots cycling
    dotIntervalRef.current = setInterval(() => {
      setDotCount((c) => (c >= 3 ? 1 : c + 1));
    }, 400);

    // Fade out and unmount at 2.5s
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 400); // allow fade transition
    }, 2500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (dotIntervalRef.current) clearInterval(dotIntervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [onComplete]);

  return (
    <div
      data-ocid="loading.screen"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: "#ffffff",
        transition: "opacity 0.4s ease",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "all" : "none",
      }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,245,255,0.25), transparent)",
        }}
      />

      {/* Logo */}
      <div
        className="relative mb-8"
        style={{
          animation: "logoPulse 1.5s ease-in-out infinite",
        }}
      >
        <style>{`
          @keyframes logoPulse {
            0%, 100% { transform: scale(1); filter: drop-shadow(0 0 12px rgba(0,245,255,0.5)); }
            50% { transform: scale(1.08); filter: drop-shadow(0 0 28px rgba(0,245,255,0.8)); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
        <div
          className="w-24 h-24 rounded-full overflow-hidden"
          style={{
            border: "3px solid rgba(0,245,255,0.6)",
          }}
        >
          <img
            src="/assets/images/chefzone-logo.png"
            alt="ChefZone logo"
            className="w-full h-full object-cover"
            onError={(e) => {
              const el = e.currentTarget.parentElement;
              if (el) {
                el.innerHTML =
                  '<div class="w-full h-full flex items-center justify-center font-bold text-3xl" style="background:linear-gradient(135deg,#D4AF37,#00F5FF);color:#fff;font-family:var(--font-display)">CZ</div>';
              }
            }}
          />
        </div>
      </div>

      {/* Name */}
      <h1
        className="font-display text-3xl font-bold text-foreground mb-2"
        style={{
          animation: "fadeInUp 0.6s ease both",
          animationDelay: "0.2s",
          textShadow: "0 0 20px rgba(0,245,255,0.4)",
        }}
      >
        ChefZone Mandsaur
      </h1>

      {/* Tagline */}
      <p
        className="text-sm text-muted-foreground mb-12"
        style={{
          animation: "fadeInUp 0.6s ease both",
          animationDelay: "0.4s",
        }}
      >
        Mandsaur&apos;s First Cloud Kitchen
      </p>

      {/* Loading dots */}
      <p className="text-base font-display mb-4" style={{ color: "#00F5FF" }}>
        Loading{".".repeat(dotCount)}
      </p>

      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 w-full h-1"
        style={{ background: "rgba(0,0,0,0.08)" }}
      >
        <div
          className="h-full"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #D4AF37, #00F5FF)",
            boxShadow: "0 0 12px rgba(0,245,255,0.6)",
            transition: "width 0.05s linear",
          }}
        />
      </div>
    </div>
  );
}
