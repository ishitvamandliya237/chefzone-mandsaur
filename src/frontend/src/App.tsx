import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import MenuSection from "./components/MenuSection";
import Navbar from "./components/Navbar";
import ParticleCanvas from "./components/ParticleCanvas";
import ReviewsSection from "./components/ReviewsSection";
import SocialMediaSection from "./components/SocialMediaSection";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div
      className="relative min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, #f5f0ff 0%, #e0f7fa 50%, #fff8e1 100%)",
      }}
    >
      <ParticleCanvas />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <MenuSection />
        <FeaturesSection />
        <AboutSection />
        <JourneySection />
        <ReviewsSection />
        <GallerySection />
        <SocialMediaSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
