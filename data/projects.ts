import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'cicd-pipeline',
    name: 'End-to-End CI/CD Pipeline',
    tagline: 'Jenkins Automation',
    description:
      'Built and maintained end-to-end CI/CD pipelines in Jenkins, integrating Git/GitHub to automate the build, test, and deployment process for application releases.',
    liveUrl: '',
    techStack: ['Jenkins', 'Git', 'GitHub', 'Docker', 'AWS'],
    role: 'DevOps Engineer',
    features: [
      'Automated Build & Test',
      'Continuous Deployment',
      'Git Integration',
      'Pipeline as Code',
    ],
    image: '',
    category: 'Live Projects',
  },
  {
    id: 'aws-infra',
    name: 'AWS Cloud Infrastructure',
    tagline: 'Terraform IaC',
    description:
      'Provisioned and managed AWS cloud infrastructure using Terraform, covering EC2, VPC, IAM, S3, Load Balancer, Auto Scaling, Route 53, and CloudWatch.',
    liveUrl: '',
    techStack: ['AWS', 'Terraform', 'EC2', 'VPC', 'IAM', 'S3', 'Route 53', 'CloudWatch'],
    role: 'DevOps Engineer',
    features: [
      'Infrastructure as Code',
      'Auto Scaling',
      'Load Balancing',
      'DNS Management',
    ],
    image: '',
    category: 'Live Projects',
  },
  {
    id: 'k8s-deployment',
    name: 'Kubernetes Container Orchestration',
    tagline: 'Docker & Kubernetes',
    description:
      'Containerized applications with Docker and deployed them on Kubernetes, managing Pods, Deployments, Services, and Scaling configurations for scalable and reliable delivery.',
    liveUrl: '',
    techStack: ['Docker', 'Kubernetes', 'AWS ECS', 'AWS ECR'],
    role: 'DevOps Engineer',
    features: [
      'Container Orchestration',
      'Pod Management',
      'Service Scaling',
      'Rolling Updates',
    ],
    image: '',
    category: 'Live Projects',
  },
  {
    id: 'monitoring-stack',
    name: 'Infrastructure Monitoring & Alerting',
    tagline: 'Prometheus & Grafana',
    description:
      'Set up Prometheus and Grafana for infrastructure monitoring and alerting, configured CloudWatch for AWS resource tracking, improving visibility into system performance and reliability.',
    liveUrl: '',
    techStack: ['Prometheus', 'Grafana', 'CloudWatch', 'Linux'],
    role: 'DevOps Engineer',
    features: [
      'Real-time Monitoring',
      'Custom Dashboards',
      'Alerting Rules',
      'Log Analysis',
    ],
    image: '',
    category: 'Live Projects',
  },
  {
    id: 'ansible-automation',
    name: 'Server Configuration Automation',
    tagline: 'Ansible Playbooks',
    description:
      'Wrote reusable Ansible playbooks to automate server configuration, package installation, and application deployment across multiple environments.',
    liveUrl: '',
    techStack: ['Ansible', 'Linux', 'Bash', 'Python'],
    role: 'DevOps Engineer',
    features: [
      'Configuration Management',
      'Automated Provisioning',
      'Multi-environment Support',
      'Idempotent Deployments',
    ],
    image: '',
    category: 'Live Projects',
  },
];
