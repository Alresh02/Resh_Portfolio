'use client';

import { SectionHeading } from '@/components/shared/SectionHeading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { OrbitNode } from '@/components/shared/OrbitNode';
import type { OrbitTech } from '@/types';
import { profile } from '@/data/profile';

const orbitTechs: OrbitTech[] = [
  { name: 'AWS', icon: '/icons/aws.svg', color: '#FF9900', radius: 120, duration: 15 },
  { name: 'Jenkins', icon: '/icons/jenkins.svg', color: '#D24939', radius: 120, duration: 15 },
  { name: 'Docker', icon: '/icons/docker.svg', color: '#2496ED', radius: 180, duration: 25 },
  { name: 'Kubernetes', icon: '/icons/kubernetes.svg', color: '#326CE5', radius: 120, duration: 20 },
  { name: 'Terraform', icon: '/icons/terraform.svg', color: '#844FBA', radius: 240, duration: 30 },
  { name: 'Ansible', icon: '/icons/ansible.svg', color: '#EE0000', radius: 180, duration: 22 },
  { name: 'Prometheus', icon: '/icons/prometheus.svg', color: '#E6522C', radius: 240, duration: 35 },
  { name: 'Grafana', icon: '/icons/grafana.svg', color: '#F46800', radius: 150, duration: 18 },
  { name: 'Git', icon: '/icons/git.svg', color: '#F05032', radius: 210, duration: 28 },
  { name: 'Linux', icon: '/icons/linux.svg', color: '#FCC624', radius: 150, duration: 10 }
];

export function TechStackUniverse() {
  return (
    <section className="py-8 relative overflow-hidden bg-black/60">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionHeading title="Tech Stack Universe" subtitle="The tools orbiting my DevOps workflow." />
        </ScrollReveal>

        <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center mt-12 md:mt-24">
          
          {/* Central Node */}
          <ScrollReveal delay={0.2} className="relative z-20">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 shadow-[0_0_50px_rgba(124,58,237,0.4)] backdrop-blur-md">
              <span className="font-bold text-xl text-white tracking-wider">{profile.name.split(' ')[0]}</span>
            </div>
          </ScrollReveal>

          {/* Orbit Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[240px] md:h-[240px] rounded-full border border-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] md:w-[360px] md:h-[360px] rounded-full border border-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[480px] md:h-[480px] rounded-full border border-white/5 hidden md:block" />

          {/* Orbiting Tech Nodes */}
          {orbitTechs.map((tech, i) => (
            <OrbitNode 
              key={tech.name} 
              tech={tech} 
              angle={(360 / orbitTechs.length) * i} 
            />
          ))}

        </div>
      </div>
    </section>
  );
}
