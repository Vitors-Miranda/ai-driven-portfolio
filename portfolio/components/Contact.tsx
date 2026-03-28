"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Heart } from "lucide-react";
import { socialLinks, personalInfo } from "../data/portfolio";

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

// LinkedIn Icon (not available in lucide-react)
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

export default function Contact() {
  return (
    <footer className="relative py-20 px-6 bg-gradient-to-b from-red-50 via-amber-50 to-green-100 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(239, 68, 68, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 bg-clip-text text-transparent">
              Vamos Conectar?
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Sempre aberto a oportunidades internacionais, colaborações em projetos
            inovadores e conversas sobre tecnologia. Do Brasil para o mundo!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {/* Email */}
          <a
            href={socialLinks.email}
            className="group flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-green-400"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300">
              <Mail size={24} />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-gray-500 font-medium">Email</p>
              <p className="text-gray-800 font-semibold">Enviar mensagem</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-400"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300">
              <LinkedinIcon size={24} />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-gray-500 font-medium">LinkedIn</p>
              <p className="text-gray-800 font-semibold">Conectar</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-gray-700"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300">
              <GithubIcon size={24} />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-gray-500 font-medium">GitHub</p>
              <p className="text-gray-800 font-semibold">Ver código</p>
            </div>
          </a>
        </motion.div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 via-yellow-400 to-red-500 rounded-full text-white shadow-lg">
            <MapPin size={20} className="animate-bounce" />
            <span className="font-medium">{personalInfo.currentLocation}</span>
            <Send size={16} className="rotate-45" />
          </div>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-400" />
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
          <div className="h-px w-16 bg-gradient-to-r from-red-400 to-transparent" />
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-gray-500 text-sm"
        >
          <p className="flex items-center justify-center gap-2">
            Feito com
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            entre o Brasil 🇧🇷 e a Europa 🇪🇺
          </p>
          <p className="mt-2 text-xs">
            © {new Date().getFullYear()} {personalInfo.name}. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
