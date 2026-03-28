"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Plane } from "lucide-react";
import { personalInfo, socialLinks } from "../data/portfolio";

// SVG Icons for GitHub and LinkedIn (not available in lucide-react)
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

const LinkedinIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-green-50 to-red-50">
      {/* Background decorative elements - map/grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Animated floating elements - representing the journey */}
      <motion.div
        className="absolute top-20 left-10 text-green-500/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Plane size={48} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-red-500/20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Plane size={40} />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location badge with plane icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg"
          >
            <Plane size={16} className="animate-pulse" />
            <span className="font-medium text-sm">{personalInfo.currentLocation}</span>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 200,
              delay: 0.2
            }}
            className="relative mx-auto mb-8 w-40 h-40 md:w-48 md:h-48"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-green-500 to-red-500 rounded-full animate-spin-slow blur-sm opacity-70" />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-green-400 via-yellow-400 to-red-400 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <span className="text-6xl md:text-7xl">🌍</span>
              </div>
            </div>
          </motion.div>

          {/* Name - sliding up animation */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-green-600 via-yellow-500 to-red-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.5
            }}
            className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium mb-6"
          >
            {personalInfo.role}
          </motion.p>

          {/* Bio - fade in animation */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.7
            }}
            className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Journey indicator - Brazil -> Spain -> Italy */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
              duration: 1,
              delay: 0.9,
              ease: "easeOut"
            }}
            className="flex items-center justify-center gap-4 mb-10 text-sm md:text-base"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇧🇷</span>
              <span className="text-gray-500">Brasil</span>
            </div>
            <motion.div
              animate={{
                scaleX: [0, 1],
              }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: "easeOut"
              }}
              className="w-12 md:w-20 h-0.5 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 origin-left"
            />
            <div className="flex items-center gap-2">
              <span className="text-2xl">✈️</span>
              <span className="text-gray-500">Espanha</span>
            </div>
            <motion.div
              animate={{
                scaleX: [0, 1],
              }}
              transition={{
                duration: 0.8,
                delay: 1.5,
                ease: "easeOut"
              }}
              className="w-12 md:w-20 h-0.5 bg-gradient-to-r from-red-500 to-green-600 origin-left"
            />
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇮🇹</span>
              <span className="text-gray-500">Itália</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 1.2
            }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {/* GitHub Button */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <GithubIcon size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>GitHub</span>
            </a>

            {/* LinkedIn Button */}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <LinkedinIcon size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>LinkedIn</span>
            </a>

            {/* Email Button */}
            <a
              href={socialLinks.email}
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-medium hover:from-green-400 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Email</span>
            </a>
          </motion.div>

          {/* Decorative map pin at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.5
            }}
            className="mt-12 flex items-center justify-center gap-2 text-gray-400"
          >
            <MapPin size={18} className="text-red-500" />
            <span className="text-sm">Conectando Brasil e Europa através do código</span>
          </motion.div>
        </div>
      </div>

      {/* Gradient orbs for visual interest */}
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </section>
  );
}
