'use client';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Cpu } from 'lucide-react';

export default function ProjectCard({ title, desc, tech, metrics }: any)  {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-blue-500 transition-colors"
    >
      <div className="flex items-center gap-2 mb-4 text-blue-400">
        <Cpu size={20} />
        <span className="text-xs font-mono uppercase tracking-widest">AI/ML Project</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{desc}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t: string) => (
          <span key={t} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full">{t}</span>
        ))}
      </div>
      <div className="flex justify-between items-center text-zinc-500 text-xs font-bold uppercase">
        <span>{metrics}</span>
        <div className="flex gap-3">
          <Github size={18} className="hover:text-white cursor-pointer" />
          <ExternalLink size={18} className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </motion.div>
  );
}