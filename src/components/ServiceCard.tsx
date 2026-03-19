import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  index?: number;
}

const ServiceCard = ({ icon: Icon, title, description, link, index = 0 }: ServiceCardProps) => {
  // Alternate: left, bottom, right, scale
  const directions = [
    { x: -30, y: 0 },
    { x: 0, y: 30 },
    { x: 30, y: 0 },
    { x: 0, y: 0, scale: 0.9 },
  ];
  const dir = directions[index % 4];

  return (
    <motion.div
      initial={{ opacity: 0, ...dir }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={link} className="block group">
        <div className="p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 card-hover glow-border">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-display font-semibold text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
            Learn more <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
