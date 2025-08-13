
type gridItemsType = {
  title: string;
  description: string;
  InitBg?: string;
  hoverBg?: string;
  hasEmail? : boolean
};
export const gridItems: gridItemsType[] = [
  {
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    InitBg: "/collab.jpg",
    hoverBg: "/team.jpg",
  },
  {
    title: "Interned at Zuri, Genesys; built Animax, honed skills.",
    description: "",
    InitBg: "/upskill.jpg",
    hoverBg: "/zuri.jpg",
  },
  {
    title: "My tech stack",
    description: "Frontend",
    InitBg: "/next.jpg",
    hoverBg: "/nuxt.jpg",
  },
  {
    title: "Tech enthusiast with a passion for development.",
    description: "",
  },
  {
    title: "Currently building a Project",
    description: "Skill finder",
  },
  {
    title: "Do you want to start a project together?",
    description: "",
    hasEmail : true
  },
];

export const projects = [
  {
    id: 1,
    title: "MFA",
    des: "Ministry of Foreign Affairs serves as the official digital gateway to a nation’s foreign policy, diplomatic missions, and international relations. It provides up-to-date information on foreign policy objectives, consular services, visa and passport guidelines, international agreements, press releases, and official statements.",
    img: "/mfa.jpg",
    iconLists: ["/next.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://mfawebsite-psi.vercel.app",
  },
  {
    id: 2,
    title: "Xarme",
    des: "Xarme (mini telegram) is a lightweight, real-time messaging platform inspired by Telegram — built for fast, secure, and seamless communication. Whether you're chatting one-on-one, creating group conversations, or sharing media, Xarme delivers an intuitive interface and end-to-end encrypted messaging with minimal overhead.",
    img: "/xarme.jpg",
    iconLists: ["/next.svg", "/re.svg", "/ts.svg", "/three.svg"],
    link: "https://xarme-frontend.vercel.app/twitter%60",
  },
  {
    id: 3,
    title: "GIOS",
    des: "Modern, user-friendly online platform designed to offer a seamless shopping experience across a wide range of products.",
    img: "/gios.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://gios-client.vercel.app/dashboard",
  }
];

export const testimonials = [
  {
    quote:
      "Collaborating with Xthink on the Animax project was genuinely energizing. His depth of knowledge across both frontend and backend made our workflows seamless. What stood out most was his ability to communicate ideas clearly, debug collaboratively, and write clean, scalable code that made integration painless. Beyond his technical prowess, Xthink fosters a no-ego, get-things-done atmosphere that makes working with him feel more like creative synergy than just task execution.",
    name: "Mustafa Balogun",
    title: "Backend Dev",
    img: "/musty.jpg",
    iosQuote:
      "Xthink’s fullstack knowledge, clear communication, and teamwork makes collaboration seamless and productive",
  },
  {
    quote:
      "Working with Xthink has been a defining asset to our team. He brings a rare mix of technical precision, initiative, and leadership that sets the tone for excellence. Whether tackling complex bugs or leading feature rollouts, Xthink approaches every challenge with clarity and focus. His reliability and ability to consistently deliver high-quality code under tight timelines made him someone I could always count on. He doesn’t just execute — he elevates the entire team.",
    name: "Solomon Odafe",
    iosQuote:
      "Xthink’s technical skill, leadership, and reliability consistently elevate the team.",
    title: "Director CompassTech",
    img: "/odafe.jpg",
  },
  {
    quote:
      "Hiring Xthink for the Skill Finder platform was one of the best decisions I made. From the first call to final deployment, he was incredibly professional, transparent, and committed to delivering beyond expectations. He understood the business goals, translated them into intuitive user flows, and built a product that’s not only functional but polished. Working with Xthink felt like having a co-founder, not just a freelancer.",
    name: "Opusunju Moses  (Mr Dark)",
    title: "CEO JodnaTech",
    img: "/dark.jpg",
    iosQuote:
      "Xthink’s professionalism, vision, and dedication turned our goals into a polished, functional product.",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Interned at Zuri, contributing to the development of the Animax Animation Library using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp2.svg",
  // },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp3.svg",
  // },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Lead the development of the Ministry of Foreign Affairs (MFA) platform, delivering and maintaining user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/softthink02",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/SThink02?t=uREJSRgB1w9PRvHK0WxZQA&s=09",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/oguagu-ekenechukwu-david-b4534823a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];
