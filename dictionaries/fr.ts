import type { Dictionary } from './en';

export const fr: Dictionary = {
  nav: {
    home: "accueil",
    experience: "expérience",
    projects: "projets",
    contact: "contact",
  },
  home: {
    role: "Ingénieur Backend & Infrastructure Cloud",
    description: "Ingénieur Backend & Infrastructure Cloud avec une expérience confirmée dans la livraison de systèmes de niveau production sur AWS. Spécialisé dans la conception d'architectures évolutives et optimisées en termes de coûts grâce à Terraform, Docker, ECS/EC2 et GitLab CI/CD. Solide base en Laravel et Python FastAPI avec une expérience pratique de l'intégration de l'IA.",
    welcomePath: "~/portfolio/ahmed",
    whoami: "./qui_suis_je.sh",
    nameLabel: "Nom:",
    roleLabel: "Rôle:",
    experienceLink: "> ./expérience",
    projectsLink: "ls -la projets/",
  },
  experience: {
    title: "cat experience.log",
    subtitle: "Un historique de création d'infrastructures évolutives, de direction d'équipes d'ingénierie et de livraison d'applications fullstack performantes.",
    referenceLabel: "Référence",
    items: [
      {
        company: "CareerBooster",
        role: "Ingénieur Backend & Infrastructure",
        period: "Septembre 2025 — Présent",
        description: [
            "Conception de l'infrastructure AWS à partir de zéro en utilisant Terraform (IaC), approvisionnement d'EC2, VPC, ECR, ECS, ALB, RDS, S3, Lambda.",
            "Migration des charges de travail d'ECS vers EC2 après analyse des coûts, obtenant une réduction estimée à 30 % des dépenses de calcul mensuelles sans temps d'arrêt.",
            "Mise en œuvre d'une stratégie de déploiement Blue-Green via ALB, éliminant les temps d'arrêt de déploiement et permettant des retours en arrière en toute sécurité à chaque version.",
            "Conteneurisation du backend multi-services avec Docker + ECR, normalisant les cycles de construction et de publication.",
            "Intégration de l'API OpenAI et d'AWS OpenSearch pour optimiser les fonctionnalités de recherche assistées par l'IA.",
            "Automatisation complète des pipelines CI/CD via GitLab CI, réduisant les étapes de publication manuelles."
        ],
        skills: ["AWS (EC2, ECS, ALB, VPC, RDS, S3, Lambda, ECR)", "Terraform", "Docker", "GitLab CI/CD", "OpenSearch", "OpenAI API"],
        referral: {
          name: "Adel Akeb",
          link: "https://www.linkedin.com/in/adel-akeb/"
        }
      },
      {
        company: "Ayrade",
        role: "Ingénieur Logiciel Backend",
        period: "Décembre 2024 — Septembre 2025",
        description: [
            "Refactorisation d'une base de code Laravel monolithique vers une architecture de couche de service (thin controllers), améliorant la testabilité.",
            "Adoption de Laravel + Vue (Inertia.js) au lieu de vues axées sur Blade, éliminant la surcharge de rendu redondante et améliorant la maintenabilité frontend.",
            "Définition des normes de codage backend à l'échelle de l'équipe (Gitflow, patterns de service), encadrement de 2 ingénieurs juniors.",
            "Mise en œuvre de la décomposition des composants en appliquant les principes d'Atomic Design à la couche Vue."
        ],
        skills: ["Laravel", "PHP", "Vue.js", "Inertia.js", "MySQL", "Git"],
        referral: {
          name: "Saloua Fedoul",
          link: "https://www.linkedin.com/in/saloua-fedoul-01b0b989/"
        }
      },
      {
        company: "M2iServices",
        role: "Ingénieur Backend",
        period: "Décembre 2023 — Octobre 2024",
        description: [
            "Livraison d'une plateforme complète de gestion de flotte de bout en bout (Laravel + Vue.js) des exigences à la production.",
            "Conception et optimisation de schémas relationnels sur PostgreSQL, MySQL et Oracle, améliorant les performances des requêtes.",
            "Création d'une bibliothèque de composants Vue.js réutilisable et implémentation de la gestion d'état Vuex.",
            "Gestion d'une petite équipe d'ingénierie, établissant la cadence de livraison et assurant la publication des fonctionnalités à temps."
        ],
        skills: ["Laravel", "PHP", "Vue.js", "Pinia", "PostgreSQL", "MySQL", "Oracle"],
      },
      {
        company: "Infraxcode",
        role: "Ingénieur Automatisation Infrastructure (Indépendant)",
        period: "Janvier 2023 — Décembre 2023",
        description: [
            "Automatisation du provisionnement d'infrastructure multi-cloud sur AWS, GCP et Azure à l'aide de Terraform et Ansible.",
            "Développement de scripts d'orchestration Python pour l'intégration d'API, la validation de données et la gestion du cycle de vie de l'infrastructure.",
            "Déploiement et maintenance de clusters Netbox + PostgreSQL pour l'automatisation de l'inventaire réseau."
        ],
        skills: ["Terraform", "Ansible", "Python", "AWS", "GCP", "Azure", "VMWare", "NetBox", "WhatsupGold", "PostgreSQL", "Bash"],
      },
    ]
  },
  projects: {
    title: "ls -la projets/",
    subtitle: "Une sélection de projets techniques axés sur l'automatisation de l'infrastructure, l'évolutivité cloud-native et l'intégration de l'IA.",
    architectureSummary: "Résumé de l'Architecture",
    challengesSolved: "Défis Relevés",
    keyDecisions: "Décisions Clés",
    techStack: "Stack Technique",
    caseStudyPending: "Étude de cas (en attente)",
    items: [
        {
            title: "Automatisation de l'Infrastructure Multi-Cloud",
            description: "Conception et implémentation de modules Terraform pour le provisionnement et la gestion de l'infrastructure sur AWS, GCP et Azure.",
            architecture: "Modules Terraform réutilisables pour les VPC, sous-réseaux, groupes de sécurité, machines virtuelles et équilibreurs de charge sur plusieurs fournisseurs cloud.",
            techStack: ["Terraform", "AWS", "GCP", "Azure", "IaC"],
            challenges: [
                "Peering de VPC et connectivité entre différents fournisseurs cloud.",
                "Assurer un marquage cohérent et des postures de sécurité dans des environnements hétérogènes.",
            ],
            decisions: [
                "Adoption d'une approche modulaire pour permettre une mise à l'échelle et une réplication faciles des composants.",
                "Mise en œuvre d'une validation automatisée de la conformité des ressources cloud avant le déploiement.",
            ],
        },
        {
            title: "Automatisation Réseau Netbox",
            description: "Automatisation de la gestion de l'infrastructure réseau dans Netbox à l'aide d'Ansible et de Bash.",
            architecture: "Plateforme centralisée de gestion des adresses IP (IPAM) et DCIM intégrée à l'infrastructure réseau via l'automatisation Ansible.",
            techStack: ["Ansible", "Bash", "Netbox", "Automatisation Réseau"],
            challenges: [
                "Synchronisation programmatique des états du réseau en temps réel avec la base de données Netbox.",
                "Mise à l'échelle des tâches d'automatisation pour gérer des milliers d'objets réseau.",
            ],
            decisions: [
                "Utilisation des rôles Ansible pour modulariser les tâches réseau, garantissant l'idempotence.",
                "Intégration de Netbox en tant que source de vérité unique pour tous les scripts de configuration réseau.",
            ],
        },
        {
            title: "Système de Gestion de Parc Auto",
            description: "Système complet de gestion de flotte de véhicules pour le suivi, la maintenance et le reporting.",
            architecture: "Application fullstack avec un backend Laravel, un frontend Vue.js et OracleDB, utilisant le reporting automatisé via des scripts Bash.",
            techStack: ["Laravel", "Vue.js", "OracleDB", "Bash"],
            challenges: [
                "Intégration de la planification complexe de la maintenance des véhicules avec le suivi de l'utilisation de la flotte en temps réel.",
                "Optimisation des requêtes SQL complexes sur OracleDB pour de grands volumes de données de flotte historiques.",
            ],
            decisions: [
                "Mise en œuvre d'un système de notification personnalisé basé sur des événements pour alerter les responsables de la maintenance à venir.",
                "Utilisation de vues matérialisées OracleDB pour améliorer considérablement les performances des rapports analytiques.",
            ],
        },
        {
            title: "Legal Tech : Barreau des Avocats",
            description: "Système complet pour l'administration des avocats, y compris la documentation, les paiements, les stages et les accords.",
            architecture: "Portail d'administration centralisé avec authentification robuste et flux de travail de gestion de documents.",
            techStack: ["Laravel", "JavaScript", "MySQL", "Legal Tech"],
            challenges: [
                "Assurer une haute intégrité des données pour la documentation légale sensible et les dossiers financiers.",
                "Mise en œuvre de règles complexes de suivi des stages et de conformité réglementaire.",
            ],
            decisions: [
                "Conception d'un schéma de base de données hautement flexible pour s'adapter aux exigences légales et aux types d'accords en évolution.",
                "Développement d'une intégration de traitement des paiements personnalisée avec des pistes d'audit automatisées.",
            ],
        },
        {
            title: "Système de Gestion de l'Apprentissage (LMS)",
            description: "Plateforme d'enseignement pour étudiants et enseignants incluant la gestion des classes, les examens et les fonctionnalités d'organisation.",
            architecture: "Plateforme d'e-learning évolutive avec un frontend modulaire et un design réactif pour divers groupes d'utilisateurs.",
            techStack: ["Laravel", "Vue.js", "MySQL", "E-learning"],
            challenges: [
                "Mise en œuvre de la surveillance des examens en temps réel et des systèmes de notation automatisés.",
                "Gestion d'un trafic simultané élevé pendant les périodes de pointe d'examens.",
            ],
            decisions: [
                "Utilisation de Vue.js pour une expérience utilisateur hautement interactive et à faible latence pendant les tests.",
                "Implémentation de la mise en cache côté serveur et de l'optimisation de la base de données pour maintenir les performances.",
            ],
        },
    ]
  },
  contact: {
    title: "ping contact",
    subtitle: "Actuellement ouvert à de nouvelles opportunités, des discussions techniques et des projets collaboratifs. N'hésitez pas à nous contacter via l'un des canaux ci-dessous.",
    needSeniorPerspective: "Besoin de la perspective d'un senior?",
    discussText: "Discutons infrastructure, mise à l'échelle ou architecture technique.",
    startConversation: "./demarrer_conversation.sh"
  },
  footer: {
    allRightsReserved: "Tous droits réservés."
  }
};
