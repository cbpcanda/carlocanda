export const site = {
  name: "Carlo Canda",
  title: "Software · Electronics engineering",
  location: "Davao, Philippines",
  /** Bold hook under the title row */
  hook: {
    lead: "I help businesses turn ideas into software solutions that solve real-world problems without hiring an entire tech team.",
  },
  tagline:
    "Electronics engineer by training; I design and build software for startups and companies — and ship personal products on the side — and a dad.",
  bio: [
    "My foundation is electronics engineering, but day to day I create software solutions for startups and established teams: from internal tools and operations platforms to customer-facing products. I care about clear requirements, maintainable delivery, and outcomes that hold up after launch.",
    "This site is my project repository — work I’m doing now, what I plan to take on next, and what I’ve already shipped — plus a Features section for events I’ve been invited to and joined.",
    "Alongside client work, I run personal projects where I can explore ideas end to end — product, stack, and iteration — without losing sight of real users and constraints.",
  ],
  /** Engineering / consultancy company */
  company: {
    label: "Alora Tech",
    href: "https://www.aloratech.it.com/",
  },
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/carlo-baltazar-canda-430207b8/",
    },
    { label: "Teks", href: "https://sendteks.com/" },
  ],
  contact: {
    email: "cbpcanda@gmail.com",
    /** `tel:` href (Philippines mobile, E.164) */
    phoneTel: "+639086073184",
    /** Human-readable */
    phoneLabel: "0908 607 3184",
  },
} as const;
