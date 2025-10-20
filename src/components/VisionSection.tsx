import { Target, Globe, Lightbulb, Rocket } from "lucide-react";

const VisionSection = () => {
  const visionPoints = [
    {
      icon: Target,
      title: "Precision Rescue Operations",
      description: "Deploy in earthquake zones to locate and extract survivors with millimeter precision"
    },
    {
      icon: Globe,
      title: "Global Disaster Response",
      description: "Scale to international disaster management with autonomous fleet coordination"
    },
    {
      icon: Lightbulb,
      title: "AI-Powered Decision Making",
      description: "Advanced machine learning for real-time threat assessment and response"
    },
    {
      icon: Rocket,
      title: "Next-Gen Defense Systems",
      description: "Integration with military operations for bomb disposal and reconnaissance"
    }
  ];

  return (
    <section id="vision" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vision <span className="hero-title">Beyond 2025</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our Multi Purpose Robot v7 is not just a prototype—it's the foundation for 
            a new era of autonomous rescue and defense systems that will save countless 
            lives across the globe.
          </p>
        </div>

        {/* Main vision statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="achievement-card p-8 rounded-2xl text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
              <Rocket className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Transforming Emergency Response</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By 2030, we envision a world where our robots are the first responders 
              in every major disaster, equipped with advanced AI, self-sustaining power 
              systems, and the ability to operate in environments too dangerous for humans.
            </p>
          </div>
        </div>

        {/* Vision grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visionPoints.map((point, index) => (
            <div 
              key={index}
              className="achievement-card p-6 rounded-xl text-center space-y-4 h-full"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4">
                <point.icon className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold">{point.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Future timeline */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Development Roadmap</h3>
          <div className="space-y-6">
            {[
              { year: "2025", goal: "Complete v7 testing and competition circuit" },
              { year: "2026", goal: "Begin real-world pilot programs with emergency services" },
              { year: "2027", goal: "Launch commercial production for rescue organizations" },
              { year: "2028+", goal: "Global deployment and AI enhancement integration" }
            ].map((milestone, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
                  {milestone.year.slice(-2)}
                </div>
                <div className="flex-1 achievement-card p-4 rounded-lg">
                  <div className="font-semibold text-primary">{milestone.year}</div>
                  <div className="text-muted-foreground">{milestone.goal}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;