import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "bidbird",
    title: "BidBird",
    tagline:
      "Discover and manage Philippine government bids — powered by PhilGEPS data",
    status: "live",
    repositoryPhase: "working",
    period: "Personal project",
    role: "Product · engineering",
    description:
      "A SaaS platform for contractors and suppliers in the Philippines to discover and manage government bidding opportunities, primarily sourced from PhilGEPS. Users can filter by category, budget, and location, get alerts for new bids, and track a bidding pipeline. The aim is to cut manual work, improve win rates, and streamline the full process — with room to grow into analytics, collaboration, and richer notifications.",
    links: [],
    coverImage: "/projects/bidbird-app-icon.png",
    snapshots: ["/projects/bidbird-app-icon.png"],
    snapshotsObjectFit: "contain",
  },
  {
    slug: "teks",
    title: "Teks",
    tagline: "AI Trust Layer — evolved from SMS access to any AI model",
    status: "live",
    repositoryPhase: "working",
    period: "Personal project",
    role: "Founder · CTO",
    description:
      "Teks is an AI Trust Layer, evolved from SMS-based tech that let anyone reach any AI model and get answers by text.",
    links: [
      { label: "Website", href: "https://sendteks.com/" },
      {
        label: "Company",
        href: "https://www.linkedin.com/company/tekssmstoai",
      },
      {
        label: "Press — tech.eu",
        href: "https://tech.eu/2025/02/14/startup-teks-aims-to-service-the-3-45b-people-lacking-mobile-internet-access-globally/",
      },
    ],
    coverImage: "/projects/teks-app-icon.png",
    snapshots: ["/projects/teks-app-icon.png"],
    snapshotsObjectFit: "contain",
  },
  {
    slug: "jta-logistics",
    title: "JTA Logistics App",
    tagline: "Internal operating system for a local logistics company",
    status: "live",
    repositoryPhase: "working",
    period: "Client build",
    role: "Custom software",
    description:
      "A custom operations platform that centralizes core workflows for a local logistics business: inventory and parts, fleet visibility, manpower coordination, billing and invoicing, and day-to-day operational tasks. It acts as the company’s internal OS to improve efficiency, visibility, and control across the operation.",
    links: [],
    coverImage: "/projects/jta-app-icon.png",
    snapshots: ["/projects/jta-app-icon.png"],
    snapshotsObjectFit: "contain",
  },
  {
    slug: "parqpay",
    title: "ParqPay",
    tagline: "Pay for your spot from your phone",
    status: "in-progress",
    repositoryPhase: "upcoming",
    period: "Ongoing",
    role: "Product · engineering",
    description:
      "ParqPay (parqpay.com) — pay for parking on your phone: enter the code on the meter or sign, continue to PayMongo, and pay with card or e-wallet.",
    links: [],
    coverImage: "/projects/parqpay-icon.svg",
    snapshots: ["/projects/parqpay-icon.svg"],
    snapshotsObjectFit: "contain",
  },
  {
    slug: "wishtherewas",
    title: "Wish There Was",
    tagline:
      "A repository of real problems — where people wish a solution already existed",
    status: "in-progress",
    repositoryPhase: "upcoming",
    period: "Early",
    role: "Product · concept",
    description:
      "wishtherewas.com — a place to collect problems real people face and wish a solution already existed: honest gaps, not polished pitch decks. Meant to surface demand and ideas worth building.",
    links: [],
    coverImage: "/projects/wishtherewas-icon.svg",
    snapshots: ["/projects/wishtherewas-icon.svg"],
    snapshotsObjectFit: "contain",
  },
  {
    slug: "takle",
    title: "takle.io",
    tagline: "Two-sided UGC marketplace — brands meet content creators",
    status: "acquired",
    repositoryPhase: "worked",
    period: "2022 — 2024",
    role: "CTO · Bubble / no-code delivery",
    description:
      "Takle was a two-sided user-generated content (UGC) marketplace: brands found and briefed creators; creators produced content and got paid — matchmaking, workflows, and payouts in one place. Technically demanding, full of lessons, and harder in practice than on paper. I led engineering and shipped complex Bubble-based products while the company iterated on product–market fit. The business was later acquired; I’m proud of what the team shipped and grateful for everyone who backed the journey. The product continues under new leadership with ongoing feature work on the Bubble stack.",
    links: [
      {
        label: "Acquisition announcement (LinkedIn)",
        href: "https://www.linkedin.com/posts/carlo-baltazar-canda-430207b8_exciting-news-takleio-has-been-acquired-activity-7181549091632431104-yS9F?utm_source=share&utm_medium=member_desktop&rcm=ACoAABjyiaQBQX5w5QR4cuExlO_KT5-Uq-L7J5I",
      },
      {
        label: "Company",
        href: "https://www.linkedin.com/company/takle-io",
      },
    ],
    coverImage: "/projects/takle-app-icon.png",
    snapshots: ["/projects/takle-app-icon.png"],
    snapshotsObjectFit: "contain",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
