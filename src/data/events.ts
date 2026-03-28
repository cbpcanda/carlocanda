import type { FeaturedEvent } from "@/types/event";

/**
 * Speaking, panels, summits, and other appearances.
 * Set `invited` / `joined` to reflect what actually happened.
 * Add rows here — newest first is recommended; the Features page sorts by `dateSort`.
 */
export const featuredEvents: FeaturedEvent[] = [
  {
    slug: "teks-slush-100-top-50-2025",
    title: "Teks — Slush 100 Top 50",
    host: "Daniel Sendt · Slush 100",
    dateLabel: "Sept 2025",
    dateSort: "2025-09-23",
    location: "Slush",
    kind: "highlight",
    invited: false,
    joined: false,
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQFQ97guO_y7Xw/feedshare-shrink_2048_1536/B4EZl1iys0IIAw-/0/1758613682299?e=2147483647&v=beta&t=g7QmI-ZMmzOVSR8sbUFSO5ulr94R5BHLX6kUmrZ1EHo",
    notes:
      "Teks selected as one of the Top 50 companies in the Slush 100 competition — making AI observable and controllable for security and EU AI Act compliance.",
    link: {
      label: "Post",
      href: "https://www.linkedin.com/posts/daniel-sendt-bbb753188_we-made-it-excited-to-share-thatteks-activity-7376190344184475648-FUhu",
    },
  },
  {
    slug: "teks-tech-eu-mobile-internet-2025",
    title:
      "Startup Teks aims to service the 3.45B people lacking mobile internet access globally",
    host: "tech.eu",
    dateLabel: "Feb 2025",
    dateSort: "2025-02-14",
    kind: "press",
    invited: false,
    joined: false,
    image:
      "https://cdn.tech.eu/uploads/2025/02/download-10-961.jpg",
    notes:
      "Profile on Teks and bridging the digital divide for people without reliable mobile data.",
    link: {
      label: "Read on tech.eu",
      href: "https://tech.eu/2025/02/14/startup-teks-aims-to-service-the-3-45b-people-lacking-mobile-internet-access-globally/",
    },
  },
  {
    slug: "european-founders-sendteks-remote-ai-2024",
    title: "Spotlight on European founders and Teks (Sendteks)",
    host: "LinkedIn (via Mitch de Leon)",
    dateLabel: "Nov 2024",
    dateSort: "2024-11-27",
    location: "Online",
    kind: "feature",
    invited: false,
    joined: false,
    image:
      "https://media.licdn.com/dms/image/v2/D4D22AQFn4jKiSITLtQ/feedshare-shrink_800/feedshare-shrink_800/0/1732698210117?e=2147483647&v=beta&t=AWf9BcH1HS92cUyBvd7vl6nkerEXC52aiHUV5gm05jY",
    notes:
      "Thank-you post resharing coverage of founders building AI and chatbots for underserved communities, including Teks in the Southern Philippines.",
    link: {
      label: "Post",
      href: "https://www.linkedin.com/posts/carlo-baltazar-canda-430207b8_two-remarkable-european-startup-founders-activity-7267472470343901185-N4wf",
    },
  },
  {
    slug: "deped-davao-action-research-workshop-teks-2024",
    title:
      "Division training-workshop on writing action research — TEKS for educators",
    host: "Department of Education (MATATAG) · Schools Division of Davao City",
    dateLabel: "Oct 2024",
    dateSort: "2024-10-12",
    location: "Apo View Hotel, Davao City, Philippines",
    invited: true,
    joined: true,
    image: "/features/deped-davao-action-research-workshop-2024.png",
    notes:
      "Session for educators on bringing TEKS to learners and teachers in areas with limited or no internet—extending access through SMS. With thanks to Engr. Mack Arthur Gamayot, Planning and Research Office, SDO Davao City, for the invitation. Try TEKS by texting 0985 434 5380 (Philippines).",
    link: {
      label: "sendteks.com",
      href: "https://www.sendteks.com",
    },
  },
  {
    slug: "mindanews-haquathon-dnsc-blue-economy-2024",
    title:
      "Panabo students ideate tech solutions for Blue Economy challenges",
    host: "MindaNews (press release)",
    dateLabel: "Sept 2024",
    dateSort: "2024-09-27",
    location: "Davao del Norte State College · Panabo City, Philippines",
    kind: "press",
    invited: false,
    joined: false,
    image:
      "https://mindanews.com/wp-content/uploads/2024/09/HAQUATHON4-scaled-e1727391822105.jpg",
    notes:
      "Coverage of HAQUATHON — students ideating ICT and startup ideas for the blue economy, with Teks.io founder Carlo B. Canda supporting teams on technology implementation. Part of Davao Startup Week 2024 pre-events (BUGSAI / regional TBI context).",
    link: {
      label: "Read on MindaNews",
      href: "https://mindanews.com/press-release/2024/09/panabo-students-ideate-tech-solutions-for-blue-economy-challenges/",
    },
  },
  {
    slug: "nocode-ph-lean-coffee-davao-2024",
    title: "Lean Coffee Davao — No-code Philippines",
    host: "No-code Philippines · DEVCON Davao · DICE · Davao Startup Week",
    dateLabel: "Sept 2024",
    dateSort: "2024-09-18",
    location: "Davao City, Philippines",
    speaker: true,
    invited: true,
    joined: true,
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQFxG7YAwpwTjg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1725975188594?e=2147483647&v=beta&t=34NxPZnDAWaRbDSTTSLrzvBSnhAYQY3W30svhfFiUC0",
    notes:
      "Short talk alongside Brylle Barriga; community lean coffee on no-code and startups.",
    link: {
      label: "Post",
      href: "https://www.linkedin.com/posts/nocodeph_nocode-nocodeph-leancoffeedavao-activity-7239264642420588544-265Z",
    },
  },
  {
    slug: "bayanihan-founders-circle-validation-2024",
    title: "Founders Circle — startup validation (with Bayanihan Ventures)",
    host: "Bayanihan Ventures · IDEAS Davao",
    dateLabel: "Mar 2024",
    dateSort: "2024-03-25",
    location: "Davao City, Philippines",
    speaker: true,
    invited: true,
    joined: true,
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQF1_byMMCIGNw/feedshare-shrink_800/feedshare-shrink_800/0/1711370650281?e=2147483647&v=beta&t=-JoaGKVA-gWzsYsMg1_BznPW0wimcPWxaN0PIsUEq-Q",
    notes:
      "Founder speaker on product–market fit, MVP, and refining the business hypothesis alongside the community.",
    link: {
      label: "Post",
      href: "https://www.linkedin.com/posts/carlo-baltazar-canda-430207b8_%F0%9D%97%A7%F0%9D%97%B5%F0%9D%97%AE%F0%9D%97%BB%F0%9D%97%B8-%F0%9D%97%AC%F0%9D%97%BC%F0%9D%98%82-%F0%9D%97%AA%F0%9D%97%B2%F0%9D%97%B1-%F0%9D%97%9F%F0%9D%97%BC%F0%9D%98%83%F0%9D%97%B2-%F0%9D%97%AC%F0%9D%97%BC-activity-7178215854843580416-ORns",
    },
  },
  {
    slug: "takle-io-acquired-2024",
    title: "Takle (takle.io) acquired",
    host: "LinkedIn announcement",
    dateLabel: "Apr 2024",
    dateSort: "2024-04-04",
    kind: "highlight",
    invited: false,
    joined: false,
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQFXHb0rrJU5bA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1712214729420?e=2147483647&v=beta&t=FG1lEcuYZUliM1v-W3LGZhrNnqUwaFeBRSEHzRKZB1A",
    notes:
      "Announcement of Takle’s acquisition after building a two-sided UGC marketplace — gratitude to the team and community, and the next chapter under Ed Garay’s leadership.",
    link: {
      label: "Post",
      href: "https://www.linkedin.com/posts/carlo-baltazar-canda-430207b8_exciting-news-takleio-has-been-acquired-activity-7181549091632431104-yS9F",
    },
  },
  {
    slug: "hiheiritpamore-tbi-training-of-trainers-2023",
    title: "HIHEIRITPAMORE Training of Trainers — Day 2",
    host: "DOST-PCIEERD (TBI Philippines)",
    dateLabel: "Nov 2023",
    dateSort: "2023-11-21",
    location: "Philippines",
    speaker: true,
    invited: true,
    joined: true,
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQEv48D7H1MA5Q/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1700550769547?e=2147483647&v=beta&t=uPvjoX56J0pkjx6f41VQW9pEIwHfbJZ3jsTsK5tl1cc",
    notes:
      "Session on startup development: no-code tools for MVPs, rapid prototyping, and validation (Bubble, WeWeb, Xano).",
    link: {
      label: "Post",
      href: "https://www.linkedin.com/posts/carlo-baltazar-canda-430207b8_hiheiritpamoretrainingoftrainers-tbiphilippines-activity-7132626906474053632-Livw",
    },
  },
  {
    slug: "startup-weekend-cdo-2023-pre-webinar",
    title:
      "Techstars Startup Weekend Cagayan de Oro 2023 — pre-event webinar",
    host: "Techstars · Startup Weekend CDO",
    dateLabel: "Sept 2023",
    dateSort: "2023-09-19",
    location: "Zoom (Cagayan de Oro)",
    invited: true,
    joined: true,
    image: "/features/startup-weekend-cdo-2023-pre-webinar.png",
    notes:
      "Pre-event webinar on no-code development (Bubble, WeWeb, Xano), alongside Dr. Franch Maverick Lorilla on from-idea-to-startup — ahead of Startup Weekend CDO. At the time: CTO at Takle.io. Free session; registration via bit.ly/SWCDO_PRE; details also at startupweekendcdo.com.",
    link: {
      label: "Facebook post",
      href: "https://www.facebook.com/share/p/1J1tiMbhq5/",
    },
  },
  {
    slug: "codeless-innovations-davao-startup-week-2023",
    title: "Codeless Innovations — Davao Startup Week 2023",
    host: "No Code PH · IDEAS Davao",
    dateLabel: "Sept 2023",
    dateSort: "2023-09-15",
    location: "Davao City, Philippines",
    speaker: true,
    invited: true,
    joined: true,
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQHklE_OPsIB6g/feedshare-shrink_800/feedshare-shrink_800/0/1694772072206?e=2147483647&v=beta&t=NBbY2JnatP8zBhoLiqZ91OoISAPBBuSPv65_dKNSV2o",
    notes:
      "Speaker at the pre-event on how Bubble is changing web development, with students, founders, and professionals.",
    link: {
      label: "Post",
      href: "https://www.linkedin.com/posts/carlo-baltazar-canda-430207b8_codelessinnovations-davaostartupweek2023-activity-7108389294003666944-LhUp",
    },
  },
];

export function eventsSortedNewestFirst(): FeaturedEvent[] {
  return [...featuredEvents].sort(
    (a, b) => Date.parse(b.dateSort) - Date.parse(a.dateSort),
  );
}
