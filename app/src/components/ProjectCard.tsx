import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/data/profileData";

// 프로젝트 이미지 import
import bixbySvg from "@/assets/images/projects/bixby.svg";
import samsungDailySvg from "@/assets/images/projects/samsung-daily.svg";
import samsungRoamingSvg from "@/assets/images/projects/samsung-roaming.svg";
import watchonSvg from "@/assets/images/projects/watchon.svg";
import cscfSvg from "@/assets/images/projects/cscf.svg";
import sktPcfSvg from "@/assets/images/projects/skt-pcf.svg";

// 이미지 맵핑 객체
const projectImages: { [key: string]: string } = {
  "bixby.svg": bixbySvg,
  "samsung-daily.svg": samsungDailySvg,
  "samsung-roaming.svg": samsungRoamingSvg,
  "watchon.svg": watchonSvg,
  "cscf.svg": cscfSvg,
  "skt-pcf.svg": sktPcfSvg
};

type ProjectCardProps = {
  project: Project;
  isActive: boolean;
  onToggle: () => void;
  delay: number;
};

const ProjectCard = ({ project, isActive, onToggle, delay }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`project-card bg-white rounded-lg shadow-md overflow-hidden ${isActive ? 'active' : ''}`}
    >
      <Card>
        <CardContent className="p-6">
          {/* 첫째 줄: 제목, 기간 */}
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-primary">{project.title}</h3>
            <span className="text-sm text-gray-500">{project.period}</span>
          </div>
          
          {/* 둘째 줄: 이미지, 설명 */}
          <div className="flex md:flex-row flex-col gap-4 mb-4">
            {project.image && (
              <div className="md:w-1/3 w-full flex-shrink-0">
                <img 
                  src={project.image ? projectImages[project.image] : ''}
                  alt={`${project.title} 프로젝트 이미지`}
                  className="w-full h-auto rounded-md shadow-sm"
                />
              </div>
            )}
            <div className="flex-grow">
              <p className="text-gray-600">{project.summary}</p>
            </div>
          </div>
          
          {/* 셋째 줄: 기술 태그 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="bg-primary-50 text-primary border-primary-100">
                {tech}
              </Badge>
            ))}
          </div>
          
          {/* 넷째 줄: 상세정보 버튼 */}
          <div className="flex justify-end">
            <button 
              onClick={onToggle}
              className="flex items-center text-primary font-medium hover:text-primary-600 transition-colors"
            >
              {isActive ? "접기" : "상세 정보"}
              <ChevronDown className={`ml-1 w-5 h-5 transition-transform expand-icon ${isActive ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </CardContent>
      </Card>
      <div className="project-detail bg-gray-50 border-t border-gray-100">
        <div className="p-6">
          {project.details.map((detail, index) => (
            <div key={index} className={index > 0 ? "mt-6" : ""}>
              {detail.title && <h4 className="font-semibold text-lg mb-2">{detail.title}</h4>}
              <p className="mb-4">{detail.description}</p>
              {detail.achievements && (
                <ul className="list-disc pl-5 space-y-1">
                  {detail.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
