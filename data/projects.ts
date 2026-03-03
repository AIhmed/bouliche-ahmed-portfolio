export interface Project {
    title: string;
    description: string;
    architecture: string;
    techStack: string[];
    challenges: string[];
    decisions: string[];
}

export const projects: Project[] = [
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
];
