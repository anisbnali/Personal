
import { CVData } from './types';

export const RESUME_DATA: CVData = {
  name: "Anis BEN ALI",
  title: "Open Source & Observability Engineer",
  location: "Ain Zaghouen, Tunis",
  email: "anisbenali001002@gmail.com",
  linkedin: "linkedin.com/in/anis-ben-ali-938ba5a6",
  bio: "Open Source Engineer specializing in systems and deep observability. Architect of high-availability Prometheus-Grafana stacks and hybrid cloud automation expert.",
  projects: [
    {
      id: "mission-smartcarbone",
      title: "Project PFE: SmartCarbone",
      description: "Deployment of an end-to-end observability platform using Docker Compose.",
      tags: ["Prometheus", "Grafana", "Docker Compose", "Instrumentation"],
      metrics: [
        { label: "Alert Latency", value: "< 2ms" },
        { label: "Uptime", value: "99.99%" }
      ],
      url: "#",
      story: "For my graduation project, I tackled the challenge of monitoring decentralized assets. I built a stack that not only tracked metrics but visualized decision-making data for environmental impact."
    }
  ],
  experiences: [
    {
      id: "exp-sofrecom",
      company: "SOFRECOM Tunisie",
      role: "IT Support Technician",
      location: "Tunis, Tunisia",
      period: "Sept 2023 - Present",
      contributions: [
        "Continuous supervision of datacenter alerts and anomalies.",
        "Documentation and exposition of workflow methodologies.",
        "Management of VPN access and hardware/logical incidents.",
        "Installation and maintenance of critical workstations."
      ],
      techStack: ["Monitoring", "Datacenter Ops", "VPN", "ITIL"]
    },
    {
      id: "exp-thehive",
      company: "The Hive",
      role: "Help Desk Support Specialist",
      location: "Tunis, Tunisia",
      period: "Jan 2023 - Sept 2023",
      contributions: [
        "Diagnostics and resolution of software and network issues.",
        "User ticket management and incident escalation.",
        "Technical documentation of resolved incidents."
      ],
      techStack: ["Network Troubleshooting", "Customer Support", "Ticketing Systems"]
    },
    {
      id: "exp-oryxo",
      company: "Oryxo",
      role: "Help Desk Technician",
      location: "Tunis, Tunisia",
      period: "Apr 2019 - Jan 2023",
      contributions: [
        "Daily onsite and remote user assistance.",
        "Management of network printers and IT hardware park.",
        "Monitoring system availability and lifecycle updates."
      ],
      techStack: ["Remote Support", "Asset Management", "System Updates"]
    }
  ],
  education: [
    {
      id: "edu-master",
      degree: "Mastère Professionnel en Logiciels libres (MP2L)",
      institution: "ISI-Ariana",
      specialization: "Open Source Systems & Software"
    },
    {
      id: "edu-license",
      degree: "Licence en Réseaux et Internet des Objets (IOT)",
      institution: "UVT-Tunis",
      specialization: "Networks & IoT Systems"
    }
  ],
  skills: [
    { name: "Prometheus", level: 95, category: "Observability" },
    { name: "Grafana", level: 92, category: "Observability" },
    { name: "Kubernetes", level: 80, category: "DevOps" },
    { name: "Docker", level: 88, category: "DevOps" },
    { name: "Linux", level: 94, category: "Systems" },
    { name: "Python", level: 85, category: "Programming" },
    { name: "Bash", level: 90, category: "Programming" },
    { name: "Networking (Cisco)", level: 82, category: "Networking" }
  ],
  certifications: [
    { name: "RHCSA (Red Hat Certified System Admin)", year: "2025", issuer: "Red Hat" },
    { name: "Microsoft 365 Endpoint Administration", year: "2024", issuer: "Microsoft" },
    { name: "AI Hackathon Winner", year: "2024", issuer: "Innovation Lab" }
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "Professional" },
    { name: "English", level: "Professional" }
  ]
};
