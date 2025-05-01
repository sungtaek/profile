import { motion } from "framer-motion";
import { profileData } from "@/data/profileData";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">소개</h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {profileData.about.map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700">
                {paragraph.replace(/\n/g, '<br>')}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
