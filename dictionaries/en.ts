export const en = {
  nav: {
    home: "home",
    experience: "experience",
    projects: "projects",
    contact: "contact",
  },
  home: {
    role: "Backend & Cloud Infrastructure Engineer",
    description: "Backend & Cloud Infrastructure Engineer with a proven track record delivering production-grade systems on AWS. Specialized in designing scalable, cost-optimized architectures using Terraform, Docker, ECS/EC2, and GitLab CI/CD. Strong foundation in Laravel and Python FastAPI with hands-on AI integration experience.",
    welcomePath: "~/portfolio/ahmed",
    whoami: "./whoami.sh",
    nameLabel: "Name:",
    roleLabel: "Role:",
    experienceLink: "> ./experience",
    projectsLink: "ls -la projects/",
  },
  experience: {
    title: "cat experience.log",
    subtitle: "A track record of building scalable infrastructure, leading engineering teams, and delivering high-performance fullstack applications.",
    referenceLabel: "Reference",
    items: [
      {
        company: "CareerBooster",
        role: "Backend & Infrastructure Engineer",
        period: "September 2025 — Present",
        description: [
          "Architected AWS infrastructure from scratch using Terraform (IaC), provisioning EC2, VPC, ECR, ECS, ALB, RDS, S3, Lambda.",
          "Migrated workloads from ECS to EC2 after cost analysis, achieving an estimated 30% reduction in monthly compute spend with zero downtime.",
          "Implemented Blue-Green deployment strategy via ALB, eliminating deployment downtime and enabling safe rollbacks on every release.",
          "Containerized multi-service backend with Docker + ECR, standardizing build and release cycles across environments.",
          "Integrated OpenAI API and AWS OpenSearch to power AI-assisted search features.",
          "Automated full CI/CD pipelines via GitLab CI, cutting manual release steps and enabling developer self-service deployments."
        ],
        skills: ["AWS (EC2, ECS, ALB, VPC, RDS, S3, Lambda, ECR)", "Terraform", "Docker", "GitLab CI/CD", "OpenSearch", "OpenAI API"],
        referral: {
          name: "Adel Akeb",
          link: "https://www.linkedin.com/in/adel-akeb/"
        }
      },
      {
        company: "Ayrade",
        role: "Backend Software Engineer",
        period: "December 2024 — September 2025",
        description: [
          "Refactored a monolithic Laravel codebase to a service-layer architecture (thin controllers), improving testability and reducing average feature development time.",
          "Led adoption of Laravel + Vue (Inertia.js) over Blade-heavy views, eliminating redundant rendering overhead and improving frontend maintainability.",
          "Defined team-wide backend coding standards (Gitflow, feature branching, service pattern), mentoring 2 junior engineers from zero Git knowledge to autonomous contributors in under 3 months.",
          "Drove component decomposition initiative applying Atomic Design principles to the Vue layer, reducing UI duplication across the codebase."
        ],
        skills: ["Laravel", "PHP", "Vue.js", "Inertia.js", "MySQL", "Git"],
        referral: {
          name: "Saloua Fedoul",
          link: "https://www.linkedin.com/in/saloua-fedoul-01b0b989/"
        }
      },
      {
        company: "M2iServices",
        role: "Backend Engineer",
        period: "December 2023 — October 2024",
        description: [
          "Delivered a full fleet management platform end-to-end (Laravel + Vue.js) from requirements to production, handling all backend, API, and database layers.",
          "Designed and optimized relational schemas across PostgreSQL, MySQL, and Oracle, improving query performance on reporting-heavy workflows.",
          "Built reusable Vue.js component library and implemented Vuex state management, reducing redundant API calls and improving UI responsiveness.",
          "Managed a small engineering team, establishing delivery cadence and ensuring on-time feature releases across multiple sprint cycles."
        ],
        skills: ["Laravel", "PHP", "Vue.js", "Pinia", "PostgreSQL", "MySQL", "Oracle"],
      },
      {
        company: "Infraxcode",
        role: "Infrastructure Automation Engineer (Freelance)",
        period: "January 2023 — December 2023",
        description: [
          "Automated multi-cloud infrastructure provisioning across AWS, GCP, and Azure using Terraform and Ansible, replacing manual runbooks with reproducible IaC pipelines.",
          "Developed Python orchestration scripts for API integration, data validation, and infrastructure lifecycle management, eliminating manual intervention in provisioning workflows.",
          "Deployed and maintained Netbox + PostgreSQL clusters for network inventory automation, providing real-time visibility into infrastructure state."
        ],
        skills: ["Terraform", "Ansible", "Python", "AWS", "GCP", "Azure", "VMWare", "NetBox", "WhatsupGold", "PostgreSQL", "Bash"],
      },
    ]
  },
  projects: {
    title: "ls -la projects/",
    subtitle: "A selection of technical projects focusing on infrastructure automation, cloud-native scalability, and AI integration.",
    architectureSummary: "Architecture Summary",
    challengesSolved: "Challenges Solved",
    keyDecisions: "Key Decisions",
    techStack: "Tech Stack",
    caseStudyPending: "Case Study (Pending)",
    items: [
        {
            title: "Multi-Cloud Infrastructure Automation",
            description: "Designed and implemented Terraform modules for provisioning and managing infrastructure across AWS, GCP, and Azure.",
            architecture: "Reusable Terraform modules for VPCs, subnets, security groups, virtual machines, and load balancers across multiple cloud providers.",
            techStack: ["Terraform", "AWS", "GCP", "Azure", "IaC"],
            challenges: [
                "VPC peering and connectivity between different cloud providers.",
                "Ensuring consistent tagging and security postures across heterogeneous environments.",
            ],
            decisions: [
                "Adopted a modular approach to allow for easy scaling and replication of infrastructure components.",
                "Implemented automated validation for cloud resource compliance before deployment.",
            ],
        },
        {
            title: "Netbox Network Automation",
            description: "Automated network infrastructure management in Netbox using Ansible and Bash.",
            architecture: "Centralized IP Address Management (IPAM) and DCIM platform integrated with network infrastructure via Ansible automation.",
            techStack: ["Ansible", "Bash", "Netbox", "Network Automation"],
            challenges: [
                "Programmatically synchronizing real-time network states with the Netbox database.",
                "Scaling the automation tasks to handle thousands of network objects.",
            ],
            decisions: [
                "Used Ansible roles to modularize network tasks, ensuring idempotency across all prefix and VLAN creations.",
                "Integrated Netbox as the single source of truth for all automated network configuration scripts.",
            ],
        },
        {
            title: "Parc Auto Management System",
            description: "Comprehensive vehicle fleet management system for tracking, maintenance, and reporting.",
            architecture: "Fullstack application with a Laravel backend, Vue.js frontend, and OracleDB, utilizing automated reporting via Bash scripts.",
            techStack: ["Laravel", "Vue.js", "OracleDB", "Bash"],
            challenges: [
                "Integrating complex vehicle maintenance scheduling with real-time fleet usage tracking.",
                "Optimizing complex SQL queries on OracleDB for large volumes of historical fleet data.",
            ],
            decisions: [
                "Implemented a custom event-driven notification system to alert managers about upcoming maintenance.",
                "Used OracleDB materialized views to significantly improve the performance of analytical reports.",
            ],
        },
        {
            title: "Legal Tech: Barreau des Avocats",
            description: "Comprehensive system for lawyer administration including documentation, payments, internships, and agreements.",
            architecture: "Centralized administration portal with robust authentication and document management workflows.",
            techStack: ["Laravel", "JavaScript", "MySQL", "Legal Tech"],
            challenges: [
                "Ensuring high data integrity for sensitive legal documentation and financial records.",
                "Implementing complex internship tracking and regulatory compliance rules.",
            ],
            decisions: [
                "Designed a highly flexible database schema to accommodate evolving legal requirements and agreement types.",
                "Developed a custom payment processing integration with automated audit trails for all membership fees.",
            ],
        },
        {
            title: "Learning Management System (LMS)",
            description: "Teaching platform for students and teachers including class management, exams, and organization features.",
            architecture: "Scalable e-learning platform with a modular frontend and responsive design for diverse user groups.",
            techStack: ["Laravel", "Vue.js", "MySQL", "E-learning"],
            challenges: [
                "Implementing real-time exam monitoring and automated grading systems.",
                "Handling high concurrent traffic during peak exam periods.",
            ],
            decisions: [
                "Utilized Vue.js for a highly interactive and low-latency user experience for students during tests.",
                "Implemented server-side caching and database optimization to maintain performance under heavy load.",
            ],
        },
    ]
  },
  contact: {
    title: "ping contact",
    subtitle: "Currently open to new opportunities, technical discussions, and collaborative projects. Feel free to reach out via any of the channels below.",
    needSeniorPerspective: "Need a senior perspective?",
    discussText: "Let's discuss infrastructure, scaling, or technical architecture.",
    startConversation: "./start_conversation.sh"
  },
  footer: {
    allRightsReserved: "All rights reserved."
  }
};

export type Dictionary = typeof en;
