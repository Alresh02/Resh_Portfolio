'use client';

import { SectionHeading } from '@/components/shared/SectionHeading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { GlassPanel } from '@/components/ui/glass-panel';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  '3+ years of experience in DevOps, CI/CD automation, and cloud infrastructure',
  'Expertise in AWS, Jenkins, Docker, Kubernetes, Terraform, and Ansible',
  'Hands-on with Prometheus & Grafana for infrastructure monitoring and alerting',
  'Received client recognition at Capgemini for fast incident response and maintaining high CSAT',
];

export function AboutMe() {
  return (
    <section id="about" className="py-8 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionHeading title="Who Am I?" subtitle="A brief look into my journey and specialization." />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <ScrollReveal direction="left" delay={0.2}>
            <GlassPanel className="p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
              <div className="relative z-10 space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  I am a <strong className="text-white font-semibold">DevOps Engineer</strong> with 3+ years of experience building and maintaining CI/CD pipelines, managing cloud infrastructure on AWS, and orchestrating containerized applications with Docker and Kubernetes.
                </p>
                <p>
                  At <strong className="text-white font-semibold">Capgemini</strong>, I automated ticket-driven build and deployment workflows using Jenkins, administered AWS infrastructure, and led incident management and root cause analysis for production issues.
                </p>
                <p>
                  I specialize in <strong className="text-white font-semibold">Infrastructure as Code</strong> with Terraform and Ansible, and leverage <strong className="text-white font-semibold">Prometheus & Grafana</strong> for monitoring and observability to keep systems reliable and deployments efficient.
                </p>
              </div>
            </GlassPanel>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Core Focus Areas</h3>
              <ul className="space-y-4">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg text-white/90">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
