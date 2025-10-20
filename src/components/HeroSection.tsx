import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import robotV7 from "@/assets/robot-v7.png";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('biography');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center particle-bg relative">
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold hero-title leading-tight">
                Multi Purpose Robot v7
              </h1>
              <div className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                2025
              </div>
              <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl">
                The Next Generation Rescue, Defense & Firefighting Robot by Team Absolute Zero
              </p>
            </div>
            
            <Button 
              onClick={scrollToNext}
              size="lg"
              className="cyber-button text-lg px-8 py-6 rounded-lg font-semibold"
            >
              Explore Our Journey
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>

          {/* Right side - Robot image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden glow-blue">
              <img 
                src={robotV7} 
                alt="Multi Purpose Robot v7 by Team Absolute Zero"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;