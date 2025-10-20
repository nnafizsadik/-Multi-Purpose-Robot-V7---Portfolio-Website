import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@absolutezero.dev",
      href: "mailto:contact@absolutezero.dev"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/absolute-zero",
      href: "https://github.com/nnafizsadik"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Team Absolute Zero",
      href: "https://linkedin.com/company/absolute-zero"
    },
    {
      icon: Phone,
      label: "Contact",
      value: "+8801880876434",
      href: "tel:+8801880876434"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Connect with <span className="hero-title">Team Absolute Zero</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to collaborate, invest, or learn more about our robotics innovations? 
              We'd love to hear from you.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="achievement-card p-6 rounded-xl flex items-center gap-4 group hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <link.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{link.label}</div>
                  <div className="text-muted-foreground">{link.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center">
            <div className="achievement-card p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4">Let's Build the Future Together</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're an investor, potential partner, or fellow innovator, 
                we're always open to discussing how our technology can make a difference.
              </p>
              <Button 
                size="lg"
                className="cyber-button text-lg px-8 py-6"
              >
                Start a Conversation
              </Button>
            </div>
          </div>

          {/* Institution info */}
          <div className="text-center space-y-2 text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Daffodil Polytechnic Institute</span>
            </div>
            <div className="text-sm">
              Advancing robotics research and development since 2020
            </div>
          </div>
        </div>
      </div>

     {/* Footer */}
<footer className="mt-16 pt-8 border-t border-border">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-center md:text-left">
        <div className="text-lg font-bold hero-title">Team Absolute Zero</div>
        <div className="text-muted-foreground">Multi Purpose Robot v7 • 2025</div>
      </div>
      <div className="text-muted-foreground text-sm text-center md:text-right">
        <div>© 2025 Team Absolute Zero. All rights reserved.</div>
        <div>
          Developed by{" "}
          <a
            href="https://nafizsadik.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            Nafiz Sadik
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
</section>
);
};

export default ContactSection;
