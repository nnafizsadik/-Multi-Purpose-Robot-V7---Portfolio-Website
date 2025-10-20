import { Shield, Flame, Zap } from "lucide-react";
const teamPhoto = "/images/group.jpg";

const BiographySection = () => {
  const features = [
    {
      icon: Shield,
      title: "Bomb Disposal",
      description: "Advanced detection and safe disposal capabilities"
    },
    {
      icon: Flame,
      title: "Firefighting",
      description: "Heat-resistant design with fire suppression systems"
    },
    {
      icon: Zap,
      title: "Self-Charging",
      description: "Innovative heat-to-energy conversion technology"
    }
  ];

  return (
    <section id="biography" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="hero-title">Team Absolute Zero</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are a passionate team of engineers and innovators dedicated to creating 
            life-saving robotics technology. Our Multi Purpose Robot v7 represents years 
            of research, development, and breakthrough innovations in rescue operations, 
            defense systems, and emergency response.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Team photo */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden glow-purple">
              <img 
                src={teamPhoto} 
                alt="Team Absolute Zero"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
          </div>

          {/* Team info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              <p className="text-lg text-muted-foreground">
                To develop cutting-edge robotics solutions that save lives in the most 
                dangerous situations. From earthquake rescue operations to bomb disposal 
                and firefighting, our robot is designed to go where humans cannot.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">Innovation Focus</h3>
              <p className="text-lg text-muted-foreground">
                Our breakthrough self-charging technology allows the robot to convert 
                heat from fire environments into electrical energy, making it truly 
                autonomous in emergency situations.
              </p>
            </div>
          </div>
        </div>

        {/* Robot capabilities */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="achievement-card p-8 rounded-xl text-center space-y-4"
            >
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BiographySection;