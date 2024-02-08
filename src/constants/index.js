import {
  mobile,
  backend,
  creator,
  chatbot,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  chatbotdesign,
  tailwind,
  protfoliodesign,
  nodejs,
  mongodb,
  git,
  mangosoft,
  freelance,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI, React Developer",
    icon: mobile,
  },
  {
    title: "Backend NodeJS Developer",
    icon: backend,
  },
  {
    title: "AI Chatbot Developer",
    icon: chatbot,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "UI Developer",
    company_name: "Upwork, Fiverr",
    icon: freelance,
    iconBg: "#383E56",
    date: "March 2020 - December 2021",
    points: [
      "Expertly crafting and sustaining web applications through the proficient use of HTML, CSS, JavaScript, and other cutting-edge technologies.",
      "Fostering collaboration with cross-functional teams, including designers, product managers, and fellow developers, to deliver top-tier, high-quality products.",
      "Executing responsive design implementation and guaranteeing cross-browser compatibility for seamless user experiences.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Mangosoftsolution",
    icon: mangosoft,
    iconBg: "#383E56",
    date: "December 2022 - April 2023",
    points: [
      "Building and sustaining web applications with expertise in MERN stack and complementary technologies for robust and efficient solutions.",
      "Proficiently managing API interactions with robust error handling and efficient code practices, ensuring effective and reliable performance.",
      "Utilized a diverse technology stack, including SQL, MongoDB, Node.js, and React.js, to create versatile and dynamic solutions.",
    ],
  },
  {
    title: "React JS",
    company_name: "Mangosoftsolution",
    icon: mangosoft,
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "Contributed to the development and enhancement of UI designs for VKYC (Video Know Your Customer) modules, ensuring a seamless and user-friendly experience for identity verification processes.",
      "Played a key role in crafting UI designs for brokerage forms, focusing on intuitive and visually appealing interfaces to streamline the user input process for financial transactions.",
      "Contributed to UI designs for educational systems, integrating innovative elements for enhanced engagement. Also, facilitated API integration for seamless communication and efficient data exchange between system components.",
    ],
  },
];

const testimonials = [
  {}
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Company Web Design",
    description:
      "Refining online presence with our Elegant Company Web Design. A harmonious blend of aesthetics and functionality, our designs create an engaging user experience. Elevating the brand with a captivating online showcase.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Abhayshah020/",
  },
  {
    name: "AI Business Automation",
    description:
      "Elevating scalability and manageability with AI Chatbot Automation. Streamline tasks, enhance efficiency, and effortlessly handle increased interactions. Empower your business with intelligent automation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "ChatGpt",
        color: "blue-text-gradient",
      },
    ],
    image: chatbotdesign,
    source_code_link: "https://github.com/Abhayshah020/",
  },
  {
    name: "Clients Protfolio",
    description:
      "Crafted a stunning Client Portfolio, showcasing a curated collection of our collaborative achievements. Each project is elegantly presented, reflecting our commitment to excellence and creativity in delivering impactful solutions for our valued clients.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "animation",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: protfoliodesign,
    source_code_link: "https://github.com/Abhayshah020/",
  },
];

export { services, technologies, experiences, testimonials, projects };
