
type gridItemsType = {
  title: string;
  description: string;
  InitBg?: string;
  hoverBg?: string;
  hasEmail? : boolean
};


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
    link: "https://xarme-frontend.vercel.app",
  },
  {
    id: 3,
    title: "GIOS",
    des: "Modern, user-friendly online platform designed to offer a seamless shopping experience across a wide range of products.",
    img: "/gios.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://gios-client.vercel.app/dashboard",
  },
  {
    id: 4,
    title: "SKILL FINDER",
    des: "A web app that helps users quickly discover, match, and connect with skills or experts relevant to their goals.",
    img: "/skillfinder.png",
    iconLists: ["/re.svg", "/next.svg", "/ts.svg", "/fm.svg"],
    link: "http://skill-finder.net/",
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
    title: "Frontend Developer",
    desc: "Development of the Ministry of Foreign Affairs (MFA) platform, delivering and maintaining user-facing features using modern frontend technologies.",
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
