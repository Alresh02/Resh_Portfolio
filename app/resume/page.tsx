'use client';

import Image from 'next/image';
import Link from 'next/link';
import { profile } from '@/data/profile';
import { experiences } from '@/data/experience';
import { skillGroups } from '@/data/skills';
import { projects } from '@/data/projects';
import { workshops } from '@/data/workshops';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
import { GradientText } from '@/components/ui/gradient-text';
import {
  MapPin,
  Mail,
  Briefcase,
  GraduationCap,
  Code2,
  Layers,
  ExternalLink,
  Download,
  Mic,
  Award,
} from 'lucide-react';

export default function ResumePage() {
  return (
    <section className="min-h-screen py-16 md:py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* ──────────── Header / Profile ──────────── */}
        <ScrollReveal direction="up" delay={0.1}>
          <GlassPanel className="p-8 md:p-12 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Image */}
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-2xl opacity-50" />
                <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full border border-white/10 bg-[#0a0a1a]/50 p-1.5 backdrop-blur-sm">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
                    <Image
                      src={profile.profileImage}
                      alt={profile.name}
                      fill
                      className="object-cover"
                      sizes="180px"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center md:text-left flex-1">
                <GradientText as="h1" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {profile.name}
                </GradientText>
                <p className="text-xl md:text-2xl text-primary font-semibold mt-2">
                  {profile.title}
                </p>
                <p className="text-muted-foreground text-lg mt-1">
                  {profile.company}
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 mt-5 text-sm text-white/70">
                  <span className="flex items-center gap-2">
                    <MapPin size={15} className="text-primary" />
                    {profile.location}
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Mail size={15} className="text-primary" />
                    {profile.email}
                  </a>
                </div>

                <p className="text-white/80 mt-5 leading-relaxed max-w-2xl">
                  {profile.heroTagline}
                </p>
              </div>
            </div>
          </GlassPanel>
        </ScrollReveal>

        {/* ──────────── Experience ──────────── */}
        <ScrollReveal direction="up" delay={0.2}>
          <GlassPanel className="p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                <Briefcase size={20} className="text-primary" />
              </div>
              <GradientText as="h2" className="text-2xl font-bold tracking-tight">
                Experience
              </GradientText>
            </div>

            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-6 border-l-2 border-primary/20">
                  <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/40" />
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {exp.startDate} — {exp.endDate}
                    </p>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                        <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {hl}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GlassPanel>
        </ScrollReveal>

        {/* ──────────── Skills ──────────── */}
        <ScrollReveal direction="up" delay={0.25}>
          <GlassPanel className="p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                <Code2 size={20} className="text-primary" />
              </div>
              <GradientText as="h2" className="text-2xl font-bold tracking-tight">
                Technical Skills
              </GradientText>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <h3 className="text-sm font-semibold text-white/90 mb-3 uppercase tracking-wider">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1.5 bg-white/[0.05] border border-white/[0.08] rounded-lg text-white/80 hover:bg-white/[0.1] hover:border-primary/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </ScrollReveal>

        {/* ──────────── Projects ──────────── */}
        <ScrollReveal direction="up" delay={0.3}>
          <GlassPanel className="p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                <Layers size={20} className="text-primary" />
              </div>
              <GradientText as="h2" className="text-2xl font-bold tracking-tight">
                Projects
              </GradientText>
            </div>

            <div className="space-y-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
                >
                  <div className="min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {project.name}
                        </h3>
                        <p className="text-primary text-sm font-medium">
                          {project.tagline}
                        </p>
                      </div>
                      <Badge>{project.role}</Badge>
                    </div>

                    <p className="text-white/70 text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 bg-white/[0.05] border border-white/[0.05] rounded-md text-white/70"
                        >
                          {tech}
                        </span>
                      ))}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto flex items-center gap-1.5 text-xs font-medium text-primary hover:text-white transition-colors"
                        >
                          <ExternalLink size={13} />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </ScrollReveal>

        {/* ──────────── Honors & Recognition ──────────── */}
        {workshops.length > 0 && (
          <ScrollReveal direction="up" delay={0.35}>
            <GlassPanel className="p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                  <Award size={20} className="text-primary" />
                </div>
                <GradientText as="h2" className="text-2xl font-bold tracking-tight">
                  Honors & Recognition
                </GradientText>
              </div>

              <div className="space-y-6">
                {workshops.map((ws) => (
                  <div key={ws.id}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-white">{ws.title}</h3>
                      <Badge>{ws.event}</Badge>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed mb-3">
                      {ws.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {ws.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-xs px-2.5 py-1 bg-white/[0.05] border border-white/[0.05] rounded-md text-white/70"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </ScrollReveal>
        )}

        {/* ──────────── Education ──────────── */}
        <ScrollReveal direction="up" delay={0.4}>
          <GlassPanel className="p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <GradientText as="h2" className="text-2xl font-bold tracking-tight">
                Education
              </GradientText>
            </div>

            <div className="relative pl-6 border-l-2 border-primary/20">
              <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/40" />

              <h3 className="text-xl font-bold text-white">
                Bachelor of Engineering (B.E.) – Computer Science
              </h3>

              <p className="text-primary font-medium">
                Rover Engineering College, Perambalur
              </p>

              <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
                <span>
                  <span className="font-medium text-white">Duration:</span> June 2017 – September 2021
                </span>
              </div>
            </div>
          </GlassPanel>
        </ScrollReveal>

        {/* ──────────── Download CTA ──────────── */}
        <ScrollReveal direction="up" delay={0.45}>
          <div className="flex flex-col items-center gap-4 text-center">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-xl font-semibold text-sm px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              <Download size={18} />
              Print / Save as PDF
            </button>
            <Link
              href="/templates"
              className="text-sm font-medium text-white/50 hover:text-primary transition-colors underline underline-offset-4"
            >
              View Premium Dashboard Templates
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
