"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Wrench, Plane } from "lucide-react";
import { trajectory } from "../data/portfolio";

const iconMap = {
  graduation: GraduationCap,
  engineering: Wrench,
  travel: Plane,
};

export default function Timeline() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-green-50 via-amber-50 to-red-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 via-yellow-500 to-red-500 bg-clip-text text-transparent">
              Minha Trajetória
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Uma jornada de aprendizado através de continentes
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line - desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-yellow-400 to-red-500 rounded-full" />

          {/* Timeline items */}
          {trajectory.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || MapPin;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                className={`relative flex items-center mb-12 md:mb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"} flex justify-center md:justify-end`}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 max-w-sm w-full mx-4 md:mx-0 border-l-4 ${
                      item.id === 1
                        ? "border-green-500"
                        : item.id === 2
                        ? "border-yellow-500"
                        : "border-red-500"
                    }`}
                  >
                    {/* Current badge */}
                    {item.current && (
                      <div className="absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold rounded-full shadow-lg">
                        ATUAL
                      </div>
                    )}

                    {/* Flag and Country */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl">{item.flag}</span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {item.country}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium">
                          {item.title}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Decorative corner */}
                    <div
                      className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full opacity-20 ${
                        item.id === 1
                          ? "bg-green-500"
                          : item.id === 2
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    />
                  </motion.div>
                </div>

                {/* Center Point - Desktop */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border-4 z-10
                  border-gray-100"
                >
                  <IconComponent
                    size={20}
                    className={`${
                      item.id === 1
                        ? "text-green-500"
                        : item.id === 2
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  />
                </div>

                {/* Empty space for opposite side */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            );
          })}
        </div>

        {/* Journey summary at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-full shadow-lg">
            <span className="text-2xl">🇧🇷</span>
            <Plane size={20} className="text-gray-400 animate-pulse" />
            <span className="text-2xl">🇪🇸</span>
            <Plane size={20} className="text-gray-400 animate-pulse" />
            <span className="text-2xl">🇮🇹</span>
          </div>
          <p className="mt-4 text-gray-500 text-sm">
            Conectando culturas através da tecnologia
          </p>
        </motion.div>
      </div>
    </section>
  );
}
