"use client";

import { motion } from "framer-motion";
import { Code2, Zap, Layers, Globe } from "lucide-react";
import { skills } from "../data/portfolio";

const skillIcons = [
  <Code2 key="code" size={20} />,
  <Zap key="zap" size={20} />,
  <Layers key="layers" size={20} />,
  <Globe key="globe" size={20} />,
];

const gradientVariants = [
  "from-green-400 to-emerald-500",
  "from-yellow-400 to-orange-500",
  "from-red-400 to-rose-500",
  "from-blue-400 to-cyan-500",
  "from-purple-400 to-pink-500",
  "from-indigo-400 to-blue-500",
];

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-red-50 via-amber-50 to-green-50">
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
            <span className="bg-gradient-to-r from-red-600 via-yellow-500 to-green-500 bg-clip-text text-transparent">
              Habilidades & Tecnologias
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Ferramentas que transformam ideias em realidade
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => {
            const gradient = gradientVariants[index % gradientVariants.length];
            const icon = skillIcons[index % skillIcons.length];

            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 150,
                }}
                whileHover={{
                  scale: 1.1,
                  y: -8,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
                className="group relative"
              >
                {/* Gradient background that shows on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300`}
                />

                {/* Card */}
                <div className="relative bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-100">
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-3 mx-auto group-hover:rotate-12 transition-transform duration-300`}
                  >
                    {icon}
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-sm md:text-base font-bold text-gray-800 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300">
                    {skill}
                  </h3>

                  {/* Decorative dots */}
                  <div className="flex justify-center gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex items-center justify-center gap-2"
        >
          <div className="h-1 w-16 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full" />
          <div className="h-1 w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full" />
          <div className="h-1 w-16 bg-gradient-to-r from-transparent via-red-400 to-transparent rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-gray-500 text-sm mt-4"
        >
          Sempre aprendendo, sempre evoluindo 🚀
        </motion.p>
      </div>
    </section>
  );
}
