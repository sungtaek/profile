import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type TimelineItemProps = {
  company: string;
  period: string;
  position: string;
  description: string;
  technologies: string[];
  delay?: number;
};

const TimelineItem = ({ 
  company, 
  period, 
  position, 
  description, 
  technologies,
  delay = 0
}: TimelineItemProps) => {
  return (
    <div className="timeline-item relative mb-12">
      <div className="timeline-connector"></div>
      <div className="timeline-year">
        {period.split(' ~ ')[0].split('.')[0]}
        <br />
        <span className="text-gray-400 font-normal">- </span>
        {period.split(' ~ ')[1]?.split('.')[0] || '현재'}
      </div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
      >
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row justify-between mb-2">
              <h3 className="text-xl font-bold text-primary">{company}</h3>
              <span className="text-sm text-gray-500">{period}</span>
            </div>
            <p className="text-gray-600 mb-2">{position}</p>
            <p className="mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="bg-primary-50 text-primary border-primary-100">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default TimelineItem;
