'use client';

import { motion } from 'framer-motion';

interface SkillChipProps {
  skill: string;
}

export function SkillChip({ skill }: SkillChipProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 bg-[#0A100D] hover:bg-[#0D1511] border border-[rgba(57,255,20,0.18)] hover:border-primary/60 hover:shadow-[0_0_15px_rgba(57,255,20,0.15)] rounded-lg text-sm font-medium text-white/90 transition-all cursor-default select-none"
    >
      {skill}
    </motion.div>
  );
}
