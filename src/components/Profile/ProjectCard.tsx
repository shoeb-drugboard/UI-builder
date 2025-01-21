import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

type ProjectCardProps = {
    title: string;
    description: string;
    technology: string;
    image?: string;
    github?: string;
    demo?: string;
};

const ProjectCard = ({ title, description, technology, github = "#", demo = "#" }: ProjectCardProps) => {
    return (
        <motion.div
            className="bg-slate-800 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
        >
            <div className="relative h-48">
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-orange-500 rounded-full text-white hover:bg-orange-600"
                        whileHover={{ scale: 1.1 }}
                    >
                        <Github size={20} />
                    </motion.a>
                    <motion.a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-orange-500 rounded-full text-white hover:bg-orange-600"
                        whileHover={{ scale: 1.1 }}
                    >
                        <ExternalLink size={20} />
                    </motion.a>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {technology.split(',').map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-orange-500/20 text-orange-500 text-sm rounded-full"
                        >
                            {tech.trim()}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
