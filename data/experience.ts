export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string[];
    skills: string[];
}

export const experiences: Experience[] = [
    {
        company: "CareerBooster",
        role: "FullStack / Devops engineer",
        period: "September 2025 — Present",
        description: [
            "Designed AWS infrastructure using Terraform, initially targeting ECS, then optimizing costs by deploying on EC2.",
            "Built and deployed containerized applications with Docker, ECR, and EC2.",
            "Implemented Application Load Balancer (ALB) with Blue-Green deployments for zero downtime.",
            "Integrated OpenAI API and OpenSearch for application features and search capabilities.",
            "Provisioned and managed RDS, S3, Lambda, and GitLab CI/CD pipelines.",
        ],
        skills: ["AWS", "Terraform", "Docker", "ECR", "EC2", "ALB", "OpenAI", "OpenSearch", "RDS", "S3", "Lambda", "GitLab CI/CD"],
    },
    {
        company: "Ayrade",
        role: "Fullstack Software engineer",
        period: "December 2024 — September 2025",
        description: [
            "Developed backend features using Laravel with Blade templates.",
            "Led and mentored two interns, teaching Git basics, feature branching, and Gitflow.",
            "Defined backend coding rules (thin controllers, business logic in services).",
            "Made technical decisions, including adopting Laravel + Vue (Inertia) over Blade-heavy views.",
            "Encouraged component decomposition and basic Atomic Design principles.",
        ],
        skills: ["Laravel", "Blade", "Vue.js", "Inertia", "Gitflow", "Atomic Design"],
    },
    {
        company: "M2iServices",
        role: "Parc auto, Project management / fullstack software engineer",
        period: "December 2023 — October 2024",
        description: [
            "Designed and delivered end-to-end applications with Laravel, and Vue.js.",
            "Implemented state management and reusable UI components for better performance.",
            "Led database design & optimization with SQL (PostgreSQL, MySQL, Oracle).",
            "Managed a small engineering team ensuring timely delivery of features.",
        ],
        skills: ["Laravel", "Vue.js", "PostgreSQL", "MySQL", "Oracle", "Team Management"],
    },
    {
        company: "Infraxcode",
        role: "Freelance Infrastructure automation engineer",
        period: "January 2023 — December 2023",
        description: [
            "Automated multi-cloud infrastructure (AWS, GCP, Azure) with Terraform & Ansible.",
            "Integrated Python scripts for data validation, API integration, and infrastructure orchestration.",
            "Deployed Netbox & PostgreSQL clusters for network automation and monitoring.",
        ],
        skills: ["AWS", "GCP", "Azure", "Terraform", "Ansible", "Python", "Netbox", "PostgreSQL"],
    },
];
