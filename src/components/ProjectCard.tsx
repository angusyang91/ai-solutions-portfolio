import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative glass-card rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:border-primary/30"
      style={{
        boxShadow: "var(--shadow-card)",
      }}
      whileHover={{
        y: -4,
        boxShadow: "var(--shadow-card-hover)",
      }}
    >
      {/* Project number */}
      <div className="absolute top-8 right-8 text-6xl font-bold text-muted/30 select-none">
        {project.number}
      </div>

      <div className="relative z-10">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {project.tagline}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Case Study
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.article>
  );
};

export default ProjectCard;
