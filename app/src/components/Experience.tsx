import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";
import { profileData } from "@/data/profileData";

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          경력 사항
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          {/* Timeline Container */}
          <div className="relative pl-0 sm:pl-6 md:pl-8 border-l-2 border-primary ml-8 sm:ml-16 md:ml-20">
            {profileData.experience.map((exp, index) => (
              <TimelineItem 
                key={exp.company}
                company={exp.company}
                period={exp.period}
                position={exp.position}
                description={exp.description}
                technologies={exp.technologies}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
