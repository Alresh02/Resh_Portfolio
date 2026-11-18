import type { SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Cloud (AWS)',
    icon: 'Monitor',
    skills: [
      'EC2',
      'VPC',
      'IAM',
      'S3',
      'ELB',
      'Auto Scaling',
      'Route 53',
      'CloudWatch',
      'SNS',
      'SQS',
      'Lambda',
      'CloudFront',
      'ECS',
      'ECR',
    ],
  },
  {
    category: 'CI/CD & Version Control',
    icon: 'Wrench',
    skills: ['Jenkins', 'GitHub Actions', 'Git', 'GitHub'],
  },
  {
    category: 'Containers & Orchestration',
    icon: 'Database',
    skills: ['Docker', 'Kubernetes', 'Pods', 'Deployments', 'Services', 'Scaling Configuration'],
  },
  {
    category: 'IaC & Automation',
    icon: 'Laptop',
    skills: ['Terraform', 'Ansible'],
  },
  {
    category: 'Monitoring & Scripting',
    icon: 'Lightbulb',
    skills: [
      'Prometheus',
      'Grafana',
      'SonarQube',
      'Bash',
      'Python',
      'Nginx',
      'Linux',
      'Ubuntu',
    ],
  },
];
