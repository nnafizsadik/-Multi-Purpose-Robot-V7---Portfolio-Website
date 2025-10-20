import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BiographySection from "@/components/BiographySection";
import AchievementsSection from "@/components/AchievementsSection";
import VisionSection from "@/components/VisionSection";
import JourneySection from "@/components/JourneySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        <BiographySection />
        <AchievementsSection />
        <VisionSection />
        <JourneySection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
