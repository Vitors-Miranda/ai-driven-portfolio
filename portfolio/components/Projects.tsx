"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, FolderGit2 } from "lucide-react";
import { projects } from "../data/portfolio";

// GitHub Icon (not available in lucide-react)
const GithubIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const gradientVariants = [
  "from-green-400 via-emerald-500 to-teal-500",
  "from-red-400 via-rose-500 to-pink-500",
  "from-yellow-400 via-orange-500 to-amber-500",
  "from-blue-400 via-cyan-500 to-indigo-500",
];

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-green-50 via-amber-50 to-red-50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 via-red-500 to-blue-500 bg-clip-text text-transparent">
              Projetos em Destaque
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Soluções desenvolvidas com paixão e tecnologia
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => {
            const gradient = gradientVariants[index % gradientVariants.length];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient border effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Image Container with Zoom Effect */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2
                      size={64}
                      className={`text-gray-400 group-hover:scale-110 transition-transform duration-500`}
                    />
                  </div>
                  {/* Image overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="flex gap-4"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                        title="Ver no GitHub"
                      >
                        <GithubIcon size={24} />
                      </a>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${gradient} text-white shadow-md`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${gradient} text-white font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-300`}
                    >
                      <GithubIcon size={18} />
                      <span>Código</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-gray-200 text-gray-700 font-medium text-sm hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-bl-full`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Vitors-Miranda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <FolderGit2 size={20} className="group-hover:rotate-12 transition-transform" />
            <span className="font-medium">Ver mais projetos no GitHub</span>
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
