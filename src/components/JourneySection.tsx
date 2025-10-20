import { ChevronRight, Cpu, Battery, Shield, Zap, Brain, Rocket, Star } from "lucide-react";

const versions = [
  {
    version: "v1",
    year: "2020",
    title: "Foundation",
    description: "Basic mobility and remote control capabilities",
    icon: Cpu,
    achievements: ["First prototype", "Basic movement", "Remote operation"]
  },
  {
    version: "v2",
    year: "2021",
    title: "Enhanced Mobility",
    description: "Improved chassis design and obstacle navigation",
    icon: ChevronRight,
    achievements: ["Better stability", "Obstacle detection", "Improved sensors"]
  },
  {
    version: "v3",
    year: "2022",
    title: "Power Systems",
    description: "Advanced battery management and power efficiency",
    icon: Battery,
    achievements: ["Longer runtime", "Power optimization", "Battery monitoring"]
  },
  {
    version: "v4",
    year: "2023",
    title: "Defense Integration",
    description: "Bomb detection and disposal mechanism implementation",
    icon: Shield,
    achievements: ["Bomb detection", "Safety protocols", "Remote disposal"]
  },
  {
    version: "v5",
    year: "2024",
    title: "Fire Suppression",
    description: "Firefighting capabilities and heat resistance",
    icon: Zap,
    achievements: ["Heat resistance", "Fire suppression", "Emergency response"]
  },
  {
    version: "v6",
    year: "Early 2024",
    title: "AI Integration",
    description: "Machine learning and autonomous decision making",
    icon: Brain,
    achievements: ["AI pathfinding", "Autonomous mode", "Smart sensors"]
  },
  {
    version: "v7",
    year: "2025",
    title: "Self-Charging Revolution",
    description: "Breakthrough heat-to-energy conversion technology",
    icon: Star,
    achievements: ["Self-charging", "Heat conversion", "Complete autonomy"],
    highlight: true
  }
];

const JourneySection = () => {
  return (
    <section id="journey" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="hero-title">Innovation Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a simple prototype to a revolutionary rescue robot—witness our 
            5-year evolution of breakthrough innovations and technological advances.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 timeline-connector hidden lg:block"></div>

          <div className="space-y-12">
            {versions.map((version, index) => (
              <div 
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
                  <div className={`w-16 h-16 rounded-full border-4 border-background flex items-center justify-center ${
                    version.highlight ? 'bg-primary glow-blue' : 'bg-card'
                  }`}>
                    <version.icon className={`h-8 w-8 ${
                      version.highlight ? 'text-primary-foreground' : 'text-primary'
                    }`} />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                  <div className={`achievement-card p-8 rounded-xl space-y-4 ${
                    version.highlight ? 'glow-purple border-accent' : ''
                  }`}>
                    <div className="flex items-center gap-3 justify-center lg:justify-start">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center lg:hidden ${
                        version.highlight ? 'bg-primary glow-blue' : 'bg-primary/20'
                      }`}>
                        <version.icon className={`h-6 w-6 ${
                          version.highlight ? 'text-primary-foreground' : 'text-primary'
                        }`} />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">{version.version}</div>
                        <div className="text-sm text-muted-foreground font-mono">{version.year}</div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold">{version.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {version.description}
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      {version.achievements.map((achievement, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Placeholder for balance (on larger screens) */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">7</div>
            <div className="text-muted-foreground">Versions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">4+</div>
            <div className="text-muted-foreground">Years</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyber-green mb-2">25+</div>
            <div className="text-muted-foreground">Innovations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">∞</div>
            <div className="text-muted-foreground">Impact</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;