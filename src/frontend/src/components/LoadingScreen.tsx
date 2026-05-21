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
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center min-h-screen w-full"
      style={{
        background:
          "linear-gradient(135deg, #f0e6ff 0%, #e0f7fa 50%, #fff8e1 100%)",
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
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(196,181,253,0.25), transparent)",
        }}
      />

      {/* Logo */}
      <div
        className="relative mx-auto"
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
          className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-[#22D3EE]"
          style={{
            border: "3px solid rgba(34,211,238,0.6)",
            boxShadow:
              "0 0 40px rgba(34,211,238,0.4), 0 0 80px rgba(34,211,238,0.2)",
            background: "transparent",
          }}
        >
          <img
            src="/assets/images/chefzone-logo.png"
            alt="ChefZone logo"
            className="w-full h-full object-contain"
            style={{
              background: "transparent",
              display: "block",
              width: "100%",
              height: "100%",
            }}
            onError={(e) => {
              const el = e.currentTarget.parentElement;
              if (el) {
                el.innerHTML =
                  '<div class="w-full h-full flex items-center justify-center font-bold text-3xl" style="background:linear-gradient(135deg,#D4AF37,#22D3EE);color:#fff;font-family:var(--font-display)">CZ</div>';
              }
            }}
          />
        </div>
      </div>

      {/* Name */}
      <h1
        className="font-display text-3xl font-bold text-center mb-2 mt-6"
        style={{
          animation: "fadeInUp 0.6s ease both",
          animationDelay: "0.2s",
          color: "#1e1b4b",
          textShadow: "0 0 20px rgba(124,58,237,0.2)",
        }}
      >
        ChefZone Mandsaur
      </h1>

      {/* Tagline */}
      <p
        className="text-sm text-center mb-12 mt-2"
        style={{
          animation: "fadeInUp 0.6s ease both",
          animationDelay: "0.4s",
          color: "#7C3AED",
        }}
      >
        Mandsaur&apos;s First Cloud Kitchen
      </p>

      {/* Loading dots */}
      <p
        className="text-base font-display mb-4 text-center"
        style={{ color: "#1e1b4b" }}
      >
        Loading{".".repeat(dotCount)}
      </p>

      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 w-full h-1"
        style={{ background: "rgba(124,58,237,0.12)" }}
      >
        <div
          className="h-full"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #D4AF37, #22D3EE, #C4B5FD)",
            boxShadow: "0 0 12px rgba(0,245,255,0.6)",
            transition: "width 0.05s linear",
          }}
        />
      </div>
    </div>
  );
}
