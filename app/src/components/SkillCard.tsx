import { motion } from "framer-motion";
import { Layers, Code, GitBranch, Network, Database, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skill } from "@/data/profileData";

type SkillCardProps = {
  title: string;
  icon: string;
  skills: Skill[];
  color: string;
  delay: number;
};

const SkillCard = ({ title, icon, skills, color, delay }: SkillCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "code":
        return <Code className="text-primary text-2xl mr-2" />;
      case "layers":
        return <Layers className="text-indigo-500 text-2xl mr-2" />;
      case "git-branch":
        return <GitBranch className="text-blue-500 text-2xl mr-2" />;
      case "network":
        return <Network className="text-emerald-500 text-2xl mr-2" />;
      case "database":
        return <Database className="text-amber-500 text-2xl mr-2" />;
      case "cloud":
        return <Cloud className="text-indigo-500 text-2xl mr-2" />;
      default:
        return <Code className="text-primary text-2xl mr-2" />;
    }
  };
  
  const getProgressColor = () => {
    switch (color) {
      case "primary": return "bg-primary";
      case "indigo": return "bg-indigo-500";
      case "blue": return "bg-blue-500";
      case "emerald": return "bg-emerald-500";
      case "amber": return "bg-amber-500";
      default: return "bg-primary";
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            {getIcon()}
            {title}
          </h3>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item relative">
                <div className="mb-1">
                  <span className="font-medium">{skill.name}</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${getProgressColor()} rounded-full`} 
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
                {skill.description && (
                  <div className="skill-tooltip mt-1 text-sm text-gray-600">
                    {skill.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillCard;
