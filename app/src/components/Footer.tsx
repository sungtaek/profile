import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="flex items-center justify-center">
          © {currentYear} 이성택. All rights reserved.
          <Heart className="h-4 w-4 mx-2 text-red-500" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
