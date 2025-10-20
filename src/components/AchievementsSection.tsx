import { Trophy, Calendar, Award } from "lucide-react";
import { useState } from "react";
import AchievementModal from "./AchievementModal";

const achievements = [
  {
    title: "5th International Robo Tech Olympiad",
    award: "Champion in Project Showcasing",
    date: "21-06-2025",
    level: "International",
    image: "/5th.jpg",
    description: "Showcased our Multi Purpose Robot v7 at the international level, demonstrating its capabilities in rescue operations and firefighting scenarios."
  },
  {
    title: "Dhaka University 1st S.N. Bose National Science Festival",
    award: "Champion in Project Showcasing",
    date: "25-05-2025",
    level: "National",
    image: "/sn.jpg",
    description: "Our robot impressed judges with its innovative approach to bomb disposal and earthquake rescue operations."
  },
  {
    title: "University of Asia Pacific Techtron 2025",
    award: "Champion in Project Showcasing",
    date: "25-04-2025",
    level: "University",
    image: "/uap.jpeg",
    description: "Demonstrated the robot's self-charging capabilities and advanced AI navigation system."
  },
  {
    title: "Ahsanullah University Research Odyssey",
    award: "Champion in Hardware Exhibition",
    date: "09-03-2025",
    level: "University",
    image: "/aust.jpg",
    description: "Hardware innovation recognized for robust design and versatile operational capabilities."
  },
  {
    title: "Brac University Traction 2025",
    award: "1st Runners Up in Innovators Exhibit",
    date: "28-02-2025",
    level: "University",
    image: "/brac.jpg",
    description: "Showcased innovative features including heat-based self-charging and multi-terrain navigation."
  },
  {
    title: "ASSET Skill Competition 2025",
    award: "Institute Champion",
    date: "27-02-2025",
    level: "Institute",
    image: "/asset.jpg",
    description: "Demonstrated technical excellence and innovative problem-solving in robotics."
  },
  {
    title: "Barishal University & National Science Museum",
    award: "Champion in Project Showcasing",
    date: "20-02-2025",
    level: "National",
    image: "/bri.jpg",
    description: "National recognition for our comprehensive approach to emergency response robotics."
  },
  {
    title: "Chittagong University Science Carnival 4.0",
    award: "1st Runners Up in Project Showcasing",
    date: "13-02-2025",
    level: "University",
    image: "/cst.jpg",
    description: "Strong performance showcasing the robot's firefighting and rescue capabilities."
  },
  {
    title: "Rajshahi University National Science Fiesta",
    award: "Champion in Project Showcasing",
    date: "02-02-2025",
    level: "National",
    image: "/ruet.JPG",
    description: "National championship win highlighting our robot's advanced technology and practical applications."
  },
  {
    title: "KUET Technomize 1.0",
    award: "Champion in Project Showcasing",
    date: "02-11-2024",
    level: "University",
    image: "/kuet.JPG",
    description: "First major victory showcasing the early version of our multi-purpose robot technology."
  },
  {
    title: "Daffodil Polytechnic Institute",
    award: "Students Appreciation Award 2024",
    date: "25-09-2024",
    level: "Institute",
    image: "/dpi.jpg",
    description: "Recognition for outstanding student innovation and dedication to robotics research."
  },
  {
    title: "RUET Robotics Contest 2024",
    award: "Champion",
    date: "21-09-2024",
    level: "University",
    image: "/placeholder.svg",
    description: "Victory in competitive robotics showcasing our team's technical prowess and innovation."
  },
  {
    title: "Bangladesh Science and Innovation Society",
    award: "National Science Carnival Champion",
    date: "08-06-2024",
    level: "National",
    image: "/placeholder.svg",
    description: "National recognition for scientific innovation and contribution to robotics advancement."
  },
  {
    title: "Daffodil Polytechnic Institute",
    award: "Recognition Award 2024",
    date: "13-05-2024",
    level: "Institute",
    image: "/placeholder.svg",
    description: "Institutional recognition for excellence in robotics research and development."
  },
  {
    title: "Independent University Notre Dame College",
    award: "Ind INIT 4.0 Champion",
    date: "04-05-2024",
    level: "University",
    image: "/ndc.jpg",
    description: "Championship win demonstrating our robot's versatility and advanced capabilities."
  },
  {
    title: "Daffodil Polytechnic Institute Project Feast",
    award: "1st Runners Up",
    date: "03-05-2024",
    level: "Institute",
    image: "/dpi.jpg",
    description: "Strong showing in project competition highlighting our innovative approach to robotics."
  },
  {
    title: "AIUB CSE Feast 2024",
    award: "Special Deserve Award",
    date: "01-05-2024",
    level: "University",
    image: "/aiub.jpg",
    description: "Special recognition for unique approach to multi-purpose robotics and emergency response."
  }
];

const AchievementsSection = () => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "International": return "text-cyber-green";
      case "National": return "text-primary";
      case "University": return "text-accent";
      default: return "text-muted-foreground";
    }
  };

  const getLevelBg = (level: string) => {
    switch (level) {
      case "International": return "bg-cyber-green/10 border-cyber-green/30";
      case "National": return "bg-primary/10 border-primary/30";
      case "University": return "bg-accent/10 border-accent/30";
      default: return "bg-muted/10 border-muted/30";
    }
  };

  const [selectedAchievement, setSelectedAchievement] = useState<typeof achievements[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAchievementClick = (achievement: typeof achievements[0]) => {
    setSelectedAchievement(achievement);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedAchievement(null), 300);
  };

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="hero-title">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A testament to our dedication and innovation in robotics. Each achievement 
            marks a milestone in our journey to create life-saving technology.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 timeline-connector hidden md:block"></div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="relative achievement-card p-6 rounded-xl ml-0 md:ml-20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-12 top-8 w-8 h-8 bg-primary rounded-full border-4 border-background hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 bg-background rounded-full"></div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Achievement icon and level */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelBg(achievement.level)} ${getLevelColor(achievement.level)}`}>
                      {achievement.level}
                    </span>
                  </div>

                  {/* Achievement details */}
                  <div className="flex-1 space-y-2">
                    <h3 
                      className="text-xl font-semibold text-foreground cursor-pointer transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_hsl(var(--primary))] achievement-title"
                      onClick={() => handleAchievementClick(achievement)}
                    >
                      {achievement.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary">
                      <Award className="h-4 w-4" />
                      <span className="font-medium">{achievement.award}</span>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="font-mono">{achievement.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">17</div>
            <div className="text-muted-foreground">Total Awards</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyber-green mb-2">1</div>
            <div className="text-muted-foreground">International</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4</div>
            <div className="text-muted-foreground">National</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">12</div>
            <div className="text-muted-foreground">University</div>
          </div>
        </div>

        <AchievementModal 
          achievement={selectedAchievement}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

export default AchievementsSection;