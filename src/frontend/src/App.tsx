import { useState } from "react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import LoadingScreen from "./components/LoadingScreen";
import MenuSection from "./components/MenuSection";
import Navbar from "./components/Navbar";
import ParticleCanvas from "./components/ParticleCanvas";
import ReviewsSection from "./components/ReviewsSection";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className="relative min-h-screen" style={{ background: "#050510" }}>
        <ParticleCanvas />
        <Navbar />
        <main className="relative z-10">
          <HeroSection />
          <FeaturesSection />
          <AboutSection />
          <JourneySection />
          <MenuSection />
          <ReviewsSection />
          <GallerySection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
}
