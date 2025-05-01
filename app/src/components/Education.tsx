import { motion } from "framer-motion";
import { Book, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { profileData } from "@/data/profileData";

const Education = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          학력 및 자격
        </motion.h2>
        
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Book className="h-6 w-6 text-primary mr-2" />
                  학력
                </h3>
                <div className="space-y-6">
                  {profileData.education.map((edu) => (
                    <div key={edu.school}>
                      <h4 className="font-semibold mb-1">{edu.school}</h4>
                      <p className="text-gray-500">{edu.period}</p>
                      <p>{edu.major}</p>
                      {edu.gpa && <p className="text-sm">학점: {edu.gpa}</p>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Award className="h-6 w-6 text-primary mr-2" />
                  자격증
                </h3>
                <div className="space-y-6">
                  {profileData.certifications.map((cert) => (
                    <div key={cert.name}>
                      <h4 className="font-semibold mb-1">{cert.name}</h4>
                      <p className="text-gray-500">{cert.date}</p>
                      <p>{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
