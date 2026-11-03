import {
  Cloud,
  Code2,
  BrainCircuit,
  ShieldCheck,
  Smartphone,
  Database,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: Cloud,
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description:
      "Build secure, scalable, and cost-efficient cloud infrastructure that grows with your startup.",
    features: [
      "AWS & Azure Cloud Setup",
      "Cloud Migration and Optimization",
      "DevOps & CI/CD Automation",
    ],
  },

  {
    id: 2,
    icon: Code2,
    title: "Custom Software Development",
    slug: "custom-software",
    description:
      "Develop fast, scalable, and maintainable web applications using modern technologies.",
    features: [
      "React.js Frontend",
      "Django / Node.js Backend",
      "REST API Development",
    ],
  },

  {
    id: 3,
    icon: BrainCircuit,
    title: "AI & Automation",
    slug: "ai-automation",
    description:
      "Integrate AI-powered solutions to automate workflows and improve business productivity.",
    features: [
      "Generative AI",
      "AI Chatbots",
      "Workflow Automation",
    ],
  },

  {
    id: 4,
    icon: ShieldCheck,
    title: "Cyber Security",
    slug: "cyber-security",
    description:
      "Protect your digital assets with enterprise-grade security solutions and monitoring.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance Support",
    ],
  },

  {
    id: 5,
    icon: Smartphone,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description:
      "Build beautiful and high-performance mobile applications for Android and iOS platforms.",
    features: [
      "Cross Platform Apps",
      "UI/UX Design",
      "App Maintenance",
    ],
  },

  {
    id: 6,
    icon: Database,
    title: "Data Engineering",
    slug: "data-engineering",
    description:
      "Transform raw business data into meaningful insights with scalable data architecture.",
    features: [
      "Database Design",
      "Analytics",
      "Data Warehousing",
    ],
  },
];

export default services;
export const serviceData = {
  "cloud-solutions": {
    title: "Cloud Solutions",
    subtitle:
      "Build secure, scalable, and cost-efficient cloud infrastructure designed to grow with your business.",

    overview:
      "Our cloud solutions help businesses modernize their infrastructure, improve scalability, optimize costs, and build reliable digital systems. We design secure, flexible cloud architectures that adapt to your needs and scale as your business grows.",

    features: [
      {
        title: "AWS & Azure Deployment",
        description:
          "Deploy and manage scalable applications using modern cloud platforms like AWS and Microsoft Azure.",
      },
      {
        title: "Cloud Migration",
        description:
          "Seamlessly migrate your existing applications and infrastructure to the cloud with minimal downtime.",
      },
      {
        title: "DevOps & CI/CD",
        description:
          "Automate development and deployment workflows with modern DevOps and CI/CD practices.",
      },
      {
        title: "Cloud Security",
        description:
          "Protect your applications and infrastructure with secure cloud architecture and best practices.",
      },
      {
        title: "Cloud Scalability",
        description:
          "Build infrastructure that automatically scales according to your business requirements.",
      },
      {
        title: "Cloud Monitoring",
        description:
          "Monitor performance, availability, and resource usage to keep your cloud systems reliable and optimized.",
      },
    ],
  },

  "cyber-security": {
    title: "Cyber Security",
    subtitle:
      "Protect your applications, data, and digital infrastructure with secure and reliable cybersecurity solutions.",

    overview:
      "Our cybersecurity solutions help businesses protect sensitive data, secure digital systems, and reduce security risks. We implement modern security practices to identify vulnerabilities, prevent threats, and build resilient applications and infrastructure.",

    features: [
      {
        title: "Security Assessment",
        description:
          "Analyze applications, systems, and infrastructure to identify potential security vulnerabilities and risks.",
      },
      {
        title: "Vulnerability Testing",
        description:
          "Identify and address security weaknesses through systematic vulnerability assessment and testing.",
      },
      {
        title: "Application Security",
        description:
          "Secure web and mobile applications by implementing modern security practices throughout the development lifecycle.",
      },
      {
        title: "Data Protection",
        description:
          "Protect sensitive business and customer data using encryption, access controls, and secure data management practices.",
      },
      {
        title: "Identity & Access Management",
        description:
          "Control access to applications and systems with secure authentication, authorization, and identity management.",
      },
      {
        title: "Security Monitoring",
        description:
          "Monitor systems and applications for suspicious activities and potential security threats to maintain a secure environment.",
      },
    ],
  },

  "mobile-app-development": {
    title: "Mobile App Development",
    subtitle:
      "Build fast, intuitive, and scalable mobile applications designed to deliver seamless user experiences.",

    overview:
      "Our mobile app development services help businesses transform their ideas into reliable and user-friendly mobile applications. We develop scalable applications with modern technologies, intuitive interfaces, and performance-focused architectures for growing digital needs.",

    features: [
      {
        title: "Android App Development",
        description:
          "Build feature-rich and reliable Android applications tailored to your business requirements and target users.",
      },
      {
        title: "iOS App Development",
        description:
          "Develop high-quality iOS applications with intuitive interfaces and smooth performance across Apple devices.",
      },
      {
        title: "Cross-Platform Development",
        description:
          "Create applications for multiple platforms using modern cross-platform development technologies.",
      },
      {
        title: "UI/UX Design",
        description:
          "Design intuitive and engaging mobile interfaces that provide a smooth and user-friendly experience.",
      },
      {
        title: "API Integration",
        description:
          "Connect mobile applications with secure REST APIs, databases, payment systems, and third-party services.",
      },
      {
        title: "App Maintenance & Support",
        description:
          "Keep applications secure, updated, and reliable with continuous maintenance, performance improvements, and technical support.",
      },
    ],
  },

  "data-engineering": {
    title: "Data Engineering",
    subtitle:
      "Build reliable data pipelines and scalable data infrastructure to turn business data into valuable insights.",

    overview:
      "Our data engineering solutions help businesses collect, process, transform, and manage large volumes of data efficiently. We build reliable data pipelines and scalable architectures that make data accessible, consistent, and ready for analytics and business intelligence.",

    features: [
      {
        title: "Data Pipeline Development",
        description:
          "Build automated and reliable data pipelines to collect, process, and transfer data from multiple sources.",
      },
      {
        title: "ETL & ELT Solutions",
        description:
          "Extract, transform, and load data efficiently to create clean and structured datasets for business analysis.",
      },
      {
        title: "Data Warehousing",
        description:
          "Design scalable data warehouses that organize business data and make it easily accessible for analytics.",
      },
      {
        title: "Big Data Processing",
        description:
          "Process and manage large volumes of structured and unstructured data using scalable data processing technologies.",
      },
      {
        title: "Data Integration",
        description:
          "Integrate data from databases, APIs, cloud platforms, and other sources into unified data systems.",
      },
      {
        title: "Data Quality & Monitoring",
        description:
          "Improve data accuracy and reliability by monitoring pipelines, detecting issues, and maintaining consistent data quality.",
      },
    ],
  },

  "custom-software": {
    title: "Custom Software Development",
    subtitle:
      "Develop fast, scalable, and maintainable web applications using modern technologies.",

    overview:
      "We build custom software solutions designed around your business requirements. From frontend interfaces to backend APIs and database architecture, our development process focuses on performance, scalability, security, and maintainability.",

    features: [
      {
        title: "React.js Frontend",
        description:
          "Create fast, interactive, and responsive user interfaces using modern React.js development.",
      },
      {
        title: "Django / Node.js Backend",
        description:
          "Build powerful and scalable backend systems using Django, Node.js, and modern backend technologies.",
      },
      {
        title: "REST API Development",
        description:
          "Design secure and reliable REST APIs for connecting applications, services, and databases.",
      },
      {
        title: "Database Solutions",
        description:
          "Design efficient database architectures using SQL and NoSQL technologies.",
      },
      {
        title: "Web Application Development",
        description:
          "Build complete business applications tailored specifically to your workflows and requirements.",
      },
      {
        title: "Performance Optimization",
        description:
          "Improve application speed, scalability, and overall performance.",
      },
    ],
  },

  "ai-automation": {
    title: "AI & Automation",
    subtitle:
      "Integrate AI-powered solutions to automate workflows and improve business productivity.",

    overview:
      "We help businesses use artificial intelligence and automation to reduce repetitive work, improve decision-making, and create smarter digital experiences.",

    features: [
      {
        title: "Generative AI",
        description:
          "Integrate modern generative AI capabilities into your business applications and workflows.",
      },
      {
        title: "AI Chatbots",
        description:
          "Build intelligent AI-powered chatbots that can assist customers and employees.",
      },
      {
        title: "Workflow Automation",
        description:
          "Automate repetitive business processes and improve operational efficiency.",
      },
      {
        title: "AI-Powered Applications",
        description:
          "Develop applications that use AI to provide intelligent recommendations and insights.",
      },
      {
        title: "Document Intelligence",
        description:
          "Extract useful information from documents and automate document-based workflows.",
      },
      {
        title: "AI-Driven Business Intelligence",
        description:
          "Use AI-driven insights to support better and faster business decisions.",
      },
    ],
  },
};