export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

type gridItemsType = {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
};
export const gridItems: gridItemsType[] = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I adapt easily, ensuring smooth collaboration.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a Project Skill finder",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "GIOS E-commerce website",
    des: "Modern, user-friendly online platform designed to offer a seamless shopping experience across a wide range of products.",
    img: "/gios.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://gios-client.vercel.app/dashboard",
  },
  {
    id: 2,
    title: "Ministry of Foreign Affairs (MFA) ",
    des: "MFA serves as the official digital gateway to a nation’s foreign policy, diplomatic missions, and international relations. It provides up-to-date information on foreign policy objectives, consular services, visa and passport guidelines, international agreements, press releases, and official statements.",
    img: "/mfa.jpg",
    iconLists: ["/next.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://mfawebsite-psi.vercel.app",
  },
  {
    id: 3,
    title: "Xarme (mini telegram)",
    des: "Xarme is a lightweight, real-time messaging platform inspired by Telegram — built for fast, secure, and seamless communication. Whether you're chatting one-on-one, creating group conversations, or sharing media, Xarme delivers an intuitive interface and end-to-end encrypted messaging with minimal overhead.",
    img: "/xarme.jpg",
    iconLists: ["/next.svg", "/re.svg", "/ts.svg", "/three.svg"],
    link: "https://xarme-frontend.vercel.app/twitter%60",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Xthink has been a defining asset to our team. He brings a rare mix of technical precision, initiative, and leadership that sets the tone for excellence. Whether tackling complex bugs or leading feature rollouts, Xthink approaches every challenge with clarity and focus. His reliability and ability to consistently deliver high-quality code under tight timelines made him someone I could always count on. He doesn’t just execute — he elevates the entire team.",
    name: "Solomon Odafe",
    title: "Director of CompassTechnology174",
    img: "/odafe.jpg",
  },
  {
    quote:
      "Collaborating with Xthink on the Animax project was genuinely energizing. His depth of knowledge across both frontend and backend made our workflows seamless. What stood out most was his ability to communicate ideas clearly, debug collaboratively, and write clean, scalable code that made integration painless. Beyond his technical prowess, Xthink fosters a no-ego, get-things-done atmosphere that makes working with him feel more like creative synergy than just task execution.",
    name: "Mustafa Balogun",
    title: "Backend Software Developer",
    img: "/musty.jpg",
  },
  {
    quote:
      "Hiring Xthink for the Skill Finder platform was one of the best decisions I made. From the first call to final deployment, he was incredibly professional, transparent, and committed to delivering beyond expectations. He understood the business goals, translated them into intuitive user flows, and built a product that’s not only functional but polished. Working with Xthink felt like having a co-founder, not just a freelancer.",
    name: "Opusunju Moses  (Mr Dark)",
    title: "CEO JodnaTechnologies",
    img: "/dark.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
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
