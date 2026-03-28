import { Injectable } from '@angular/core';

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  personalInfo = {
    name: 'Sajjan Mishra',
    title: 'Full-stack & Cloud Engineer',
    location: 'Melbourne, Australia',
    email: 'sajjanm01@gmail.com',
    linkedin: 'https://linkedin.com/in/sajjanmishra',
    summary: 'Full-stack & Cloud engineer with 7+ years of experience building event-driven, cloud-native platforms across logistics, insurance, government, and finance domains. Passionate about designing resilient microservices and data-driven automation solutions on AWS.'
  };

  experience: Experience[] = [
    {
      company: 'Sky Ledge',
      role: 'Software Engineer',
      location: 'Melbourne, VIC',
      period: 'Jun 2023 – Present',
      description: [
        'Built AWS Lambda microservices for a global fuel station integration service using FastAPI and Postgres.',
        'Engineered fleet tracking features including dual-tank fuel systems, TPMS ingestions, and border control alerts.',
        'Modernized frontend architecture with Angular 20, NgRx, and RxJs.',
        'Developed an event-driven Email Digest system using SQS and Lambda for fleet performance insights.',
        'Architected a domain-driven framework for tracking operational tasks.'
      ],
      tech: ['Angular 20', 'NgRx', 'RxJs', 'Python', 'FastAPI', 'AWS Lambda', 'Postgres', 'Pulumi']
    },
    {
      company: 'CompareTheMarket',
      role: 'Software Engineer',
      location: 'Brisbane, QLD',
      period: 'Sep 2022 – Jun 2023',
      description: [
        'Integrated Redbook vehicle data versioning logic using AWS S3 triggers, Lambda, and DynamoDB.',
        'Migrated CI/CD pipelines from Bamboo to Azure DevOps, reducing deployment time by 30%.',
        'Optimized customer journey flows and API performance for higher quote conversion rates.'
      ],
      tech: ['React.js', 'Python', 'Java', 'AWS Lambda', 'Azure DevOps', 'Docker', 'Kubernetes']
    },
    {
      company: 'Arq Group (NCS Australia)',
      role: 'Full Stack Developer',
      location: 'Brisbane, QLD',
      period: 'Jan 2020 – Sep 2022',
      description: [
        'Rebuilt the Email Journal Store (EJS) for the Victorian Govt Dept. of Education using Python and Angular 12.',
        'Migrated infrastructure to AWS Lambda and OpenSearch, reducing hosting costs by ~37%.',
        'Delivered a serverless sales reporting pipeline for Minor DKL with Slack integration.',
        'Implemented automated UI regression testing with Playwright.'
      ],
      tech: ['Python', 'Angular 12', 'AWS OpenSearch', 'Terraform', 'Java', 'Spring Boot']
    },
    {
      company: 'F1Soft International',
      role: 'Junior Software Engineer',
      location: 'Kathmandu, Nepal',
      period: 'May 2016 – May 2017',
      description: [
        'Contributed to frontend and backend development for fintech products and digital banking solutions.',
        'Worked with Enterprise Java Beans (EJB) and AngularJS.'
      ],
      tech: ['EJB', 'AngularJS', 'Java']
    }
  ];

  skills = {
    frontend: ['Modern Angular (v20)', 'NgRx', 'RxJs', 'React.js', 'Typecript'],
    backend: ['Python (FastAPI, Chalice)', 'Java (Spring Boot, EJB)', 'Node.js'],
    cloud: ['AWS (Lambda, S3, SQS, EC2, ECS, Fargate)', 'OpenSearch', 'CloudWatch'],
    databases: ['Postgres', 'MongoDB', 'DynamoDB', 'PostGIS'],
    devops: ['Pulumi', 'Terraform', 'SAM', 'Docker', 'Kubernetes', 'Azure DevOps', 'Jenkins']
  };

  projects: Project[] = [
    {
      title: 'Fleet Telemetry & IoT Platform',
      description: 'Real-time tracking and anomaly detection platform for automotive fleets.',
      tech: ['Angular', 'NgRx', 'AWS IoT', 'Lambda']
    },
    {
      title: 'Email Journal Store (EJS)',
      description: 'Modernization of a legacy government document storage and retrieval system.',
      tech: ['Python', 'Angular', 'OpenSearch', 'S3']
    },
    {
      title: 'Global Fuel Integration',
      description: 'High-scale integration service for real-time fuel station pricing and availability.',
      tech: ['FastAPI', 'Postgres', 'AWS Lambda', 'Pulumi']
    }
  ];

  education: Education[] = [
    {
      degree: 'Master of Technology (Software Engineering)',
      institution: 'Federation University Australia',
      period: '2017 – 2019'
    },
    {
      degree: 'Bachelor of Engineering (Computer Engineering)',
      institution: 'Kantipur Engineering College',
      period: '2011 – 2015'
    }
  ];

  constructor() {}
}
