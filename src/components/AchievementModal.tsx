import { X } from "lucide-react";
import { useEffect } from "react";

interface Achievement {
  title: string;
  award: string;
  date: string;
  level: string;
  image: string;
  description?: string;
}

interface AchievementModalProps {
  achievement: Achievement | null;
  isOpen: boolean;
  onClose: () => void;
}

const AchievementModal = ({ achievement, isOpen, onClose }: AchievementModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !achievement) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={handleOverlayClick}
    >
      <div className="relative max-w-2xl w-full bg-card/95 backdrop-blur-md rounded-2xl border border-primary/20 shadow-2xl animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-background/80 hover:bg-background transition-colors hover:scale-110"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        {/* Modal content */}
        <div className="p-6">
          {/* Achievement image */}
          <div className="relative h-64 mb-6 rounded-xl overflow-hidden bg-muted/20">
            <img 
              src={achievement.image} 
              alt={`${achievement.title} team photo`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg';
                e.currentTarget.alt = 'Achievement photo coming soon';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
          </div>

          {/* Achievement details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${
                achievement.level === "International" ? "bg-cyber-green/10 border-cyber-green/30 text-cyber-green" :
                achievement.level === "National" ? "bg-primary/10 border-primary/30 text-primary" :
                achievement.level === "University" ? "bg-accent/10 border-accent/30 text-accent" :
                "bg-muted/10 border-muted/30 text-muted-foreground"
              }`}>
                {achievement.level}
              </span>
              <span className="text-muted-foreground font-mono">{achievement.date}</span>
            </div>

            <h2 className="text-2xl font-bold text-foreground leading-tight">
              {achievement.title}
            </h2>
            
            <div className="text-lg text-primary font-semibold">
              🏆 {achievement.award}
            </div>

            {achievement.description && (
              <p className="text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementModal;