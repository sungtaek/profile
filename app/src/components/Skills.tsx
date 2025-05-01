import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { profileData } from "@/data/profileData";

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          기술 스택
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <SkillCard 
            title="프로그래밍 언어"
            icon="code"
            skills={profileData.skills.languages}
            color="primary"
            delay={0}
          />
          
          <SkillCard 
            title="프레임워크"
            icon="layers"
            skills={profileData.skills.frameworks}
            color="indigo"
            delay={0.1}
          />
          
          <SkillCard 
            title="네트워크"
            icon="network"
            skills={profileData.skills.network}
            color="emerald"
            delay={0.2}
          />
          
          <SkillCard 
            title="데이터베이스/캐시"
            icon="database"
            skills={profileData.skills.database}
            color="amber"
            delay={0.3}
          />
          
          <SkillCard 
            title="CI/CD"
            icon="git-branch"
            skills={profileData.skills.cicd}
            color="blue"
            delay={0.4}
          />
          
          <SkillCard 
            title="클라우드/인프라"
            icon="cloud"
            skills={profileData.skills.cloud}
            color="indigo"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
