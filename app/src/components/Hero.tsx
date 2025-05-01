import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/profileData";
import profileImage from "@/assets/images/profile.jpg";

const Hero = () => {
  
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{profileData.name}</h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6">{profileData.title}</h2>
            <div className="text-lg sm:text-xl mb-8 text-blue-100 space-y-1">
              {profileData.summary.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                <a href="#contact">
                  <Mail className="h-5 w-5 mr-2" />
                  연락하기
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-white p-2 shadow-lg">
              <img 
                src={profileImage} 
                alt="이성택 프로필 사진" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
