import type { ExperienceEntry } from '@/types';

export const experiences: ExperienceEntry[] = [
  {
    id: 'freelance-devops',
    company: 'Freelance DevOps Projects',
    position: 'Freelance DevOps Engineer',
    startDate: 'January 2025',
    endDate: 'Present',
    highlights: [
      'Built and maintained end-to-end CI/CD pipelines in Jenkins, integrating Git/GitHub to automate build, test, and deployment processes',
      'Containerized applications with Docker and deployed them on Kubernetes, enabling scalable and reliably orchestrated application delivery',
      'Provisioned and managed AWS cloud infrastructure using Terraform, covering EC2, VPC, IAM, S3, Load Balancer, Auto Scaling, Route 53, and CloudWatch',
      'Wrote reusable Ansible playbooks to automate server configuration, package installation, and application deployment across multiple environments',
      'Set up Prometheus and Grafana for infrastructure monitoring and alerting, improving visibility into system performance',
      'Handled Linux system administration, production support, incident management, and root cause analysis (RCA)',
    ],
  },
  {
    id: 'capgemini',
    company: 'Capgemini Information Technology & Services',
    position: 'DevOps Analyst',
    startDate: 'April 2022',
    endDate: 'December 2024',
    highlights: [
      'Built and maintained Jenkins CI/CD pipelines integrated with Git/GitHub, Docker, and AWS to automate ticket-driven build and deployment workflows',
      'Administered AWS cloud infrastructure, including EC2, VPC, IAM, S3, Route 53, Auto Scaling, and ELB',
      'Containerized applications using Docker and deployed workloads on Kubernetes, managing Pods, Deployments, Services, and Scaling configurations',
      'Configured CloudWatch, Prometheus, and Grafana for infrastructure and application monitoring, alerting, log analysis, and performance troubleshooting',
      'Led incident management, troubleshooting, and root cause analysis (RCA) for production issues, partnering with development, QA, and cloud teams to resolve issues within SLA',
      'Collaborated across development and operations teams, documenting infrastructure configurations, deployment procedures, and troubleshooting steps',
    ],
  },
];
