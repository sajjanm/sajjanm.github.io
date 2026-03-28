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
  company: string;
  overview: string;
  skills: string[];
  achievements: string[];
  tech: string[]; // Keep for quick tags on cards
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
    github: 'https://github.com/sajjanm',
    stackoverflow: 'https://stackoverflow.com/users/7882200/sajjan-mishra',
    summary: 'Full-stack & Cloud engineer with 7+ years of experience building event-driven, cloud-native platforms across logistics, insurance, government, and finance domains. Passionate about designing resilient microservices and data-driven automation solutions on AWS. Active contributor to the developer community with 850+ reputation on Stack Overflow.'
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
      tech: ['Angular 20', 'NgRx', 'RxJs', 'Python', 'FastAPI', 'AWS Lambda', 'Postgres', 'Pulumi', 'AWS ECS', 'Fargate']
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
      tech: ['React.js', 'Python', 'Java', 'AWS Lambda', 'Azure DevOps', 'Docker', 'Kubernetes', 'AWS ECS']
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
      tech: ['Python', 'Angular 12', 'AWS OpenSearch', 'Terraform', 'Java', 'Spring Boot', 'Jenkins', 'Docker']
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
    cloud: ['AWS (Lambda, S3, SQS, EC2, ECS, Fargate)', 'OpenSearch', 'CloudWatch', 'Cloud Architecture'],
    databases: ['Postgres', 'MongoDB', 'DynamoDB', 'PostGIS'],
    devops: ['Pulumi', 'Terraform', 'SAM', 'Docker', 'Kubernetes', 'Azure DevOps', 'Jenkins', 'CI/CD']
  };

  projects: Project[] = [
    {
      title: 'Dual-Tank Fuel Ingestion Pipeline',
      company: 'Sky Ledge',
      overview: 'Engineered a Python-hosted Lambda microservice to ingest real-time dual-tank fuel levels and TPMS data for connected vehicle fleets.',
      skills: ['Python', 'AWS Lambda', 'SQS', 'Postgres', 'Pulumi', 'Pydantic'],
      achievements: [
        'Successfully automated border control alerts for fuel theft prevention.',
        'Integrated multi-provider fuel station data with high reliability.',
        'Reduced data processing delay by 40% via optimized SQS consumers.'
      ],
      tech: ['Python', 'AWS Lambda', 'SQS', 'Postgres']
    },
    {
      title: 'Global Fuel Station Integration',
      company: 'Sky Ledge',
      overview: 'Built a high-scale integration framework to process pricing and availability data from global fuel providers.',
      skills: ['FastAPI', 'Postgres', 'PostGIS', 'AWS Lambda', 'Pulumi', 'MJML'],
      achievements: [
        'Migrated legacy spatial data to PostGIS for 50% faster location-based queries.',
        'Implemented a robust MJML-based email digest system for fleet performance insights.',
        'Handles 1M+ pricing updates daily across multiple fuel station networks.'
      ],
      tech: ['FastAPI', 'Postgres', 'AWS Lambda', 'Pulumi']
    },
    {
      title: 'Real-time Telemetry Dashboard',
      company: 'Sky Ledge',
      overview: 'Modernized the core tracking platform with a high-performance frontend architecture supporting real-time IoT feeds.',
      skills: ['Angular 20', 'NgRx', 'RxJs', 'WebSockets', 'AWS AppSync'],
      achievements: [
        'Eliminated UI state inconsistencies by implementing NgRx store.',
        'Achieved sub-second latency for live fleet movement visualization.',
        'Simplified complex state management for dual-tank fuel monitoring.'
      ],
      tech: ['Angular', 'NgRx', 'RxJs', 'SQS', 'Lambda']
    },
    {
      title: 'Redbook Valuation Engine Integration',
      company: 'CompareTheMarket',
      overview: 'Seamlessly integrated Redbook vehicle valuation logic into the insurance quote and buy flow using serverless event-driven architecture.',
      skills: ['AWS Lambda', 'S3', 'DynamoDB', 'Python', 'Azure DevOps'],
      achievements: [
        'Implemented versioning logic for real-time data ingestion using S3 triggers.',
        'Optimized customer journeys leading to a smoother vehicle validation process.',
        'Delivered 99.9% uptime for the valuation API through serverless scaling.'
      ],
      tech: ['AWS Lambda', 'S3', 'DynamoDB', 'Python']
    },
    {
      title: 'Quote Performance Optimizer',
      company: 'CompareTheMarket',
      overview: 'Enhanced car insurance quote conversion rates by optimizing end-to-end API performance and infrastructure.',
      skills: ['React.js', 'Node.js', 'AWS ECS', 'Fargate', 'Docker', 'Kubernetes'],
      achievements: [
        'Reduced p99 API latency by 45% through infrastructure optimization.',
        'Led to a measurable 15% increase in car insurance quote sales.',
        'Successfully migrated microservices to AWS Fargate for better cost management.'
      ],
      tech: ['React', 'Node.js', 'Java', 'Redis']
    },
    {
      title: 'Email Journal Store (EJS) Modernization',
      company: 'Arq Group',
      overview: 'Spearheaded the rebuilding of the EJS for the Victorian Govt Dept. of Education, migrating from legacy infrastructure to cloud-native serverless.',
      skills: ['Python', 'Angular 12', 'AWS Lambda', 'OpenSearch', 'Terraform', 'SNS'],
      achievements: [
        'Reduced annual hosting and maintenance costs by 37%.',
        'Improved search performance by 80% using AWS OpenSearch migration.',
        'Implemented complete infrastructure as code using Terraform.'
      ],
      tech: ['Python', 'Angular 12', 'AWS OpenSearch', 'S3']
    },
    {
      title: 'Sales Reporting & Slack Bot',
      company: 'Arq Group',
      overview: 'Developed an automated pipeline to provide real-time sales visibility to executives at Minor DKL (The Coffee Club).',
      skills: ['Python', 'AWS SNS', 'Lambda', 'Slack API', 'CloudWatch', 'Java'],
      achievements: [
        'Integrated real-time sales alerts across 100+ stores into a unified Slack workplace.',
        'Automated the daily sales digest generation, saving 5+ manual hours weekly.',
        'Engineered a resilient retry mechanism for failed sales events.'
      ],
      tech: ['Python', 'AWS SNS', 'Lambda', 'Slack API']
    },
    {
      title: 'Automated UI Regression Suite',
      company: 'Arq Group',
      overview: 'Designed and implemented a scalable end-to-end automated testing strategy for core government digital services.',
      skills: ['Playwright', 'TypeScript', 'Jenkins', 'Docker', 'Kubernetes', 'Kibana'],
      achievements: [
        'Reduced production bug count by 25% through automated regression.',
        'Established automated UI testing as mandatory gated check in CI/CD pipeline.',
        'Built real-time test reporting dashboard using Kibana.'
      ],
      tech: ['Playwright', 'TypeScript', 'Jenkins', 'Docker']
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
