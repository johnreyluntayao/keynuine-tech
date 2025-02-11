//Navigation Links
export const navItems = [
    {
        id: 1,
        label: 'Home',
        link: "#home",
    },
    {
        id: 2,
        label: 'Services',
        link: "#service",
    },
    {
        id: 3,
        label: 'About',
        link: "#about",
    },
    {
        id: 4,
        label: 'Our Approach',
        link: '#approach',
    },
    {
        id: 5,
        label: 'Projects',
        link: '#projects',
    }
];

//Service Cards

export const ServiceCardContent = [
    {
        id: 1,
        icon: "webdev.svg",
        title: "Web Development",
        description: "Web development involves creating and managing websites to ensure optimal performance, responsiveness, and user experience through modern coding techniques and technologies."
    },
    {
        id: 2,
        icon: "mobiledev.svg",
        title: "Mobile Development",
        description: "Mobile development focuses on designing and building applications for smartphones and tablets, ensuring seamless functionality, performance, and user-friendly interfaces across different platforms."
    },
    {
        id: 3,
        icon: "gamedev.svg",
        title: "Game Development",
        description: "Game development is the process of designing, programming, and optimizing interactive digital experiences, combining creativity and technology to produce engaging and immersive games."
    }
    
]
export const ApproachCardContent = [
    {
        id: 1,
        icon: "refinement.svg",
        count:"01",
        title: "Planning & Refinement",
        description: "Prioritize features and gather requirements. Define the scope of the upcoming sprint. Break down tasks, estimate efforts, and align the team's objectives."
    },
    {
        id: 2,
        icon: "development.svg",
        count:"02",
        title: "Development & Integration",
        description: "Sprint execution for development and integration of features, including design. Regularly check progress, address obstacles, and test code to ensure quality."
    },
    {
        id: 3,
        icon: "review.svg",
        count:"03",
        title: "Review & Improvement",
        description: "Demonstrate completed work and gather feedback for improvements. Reflect on the sprint, identify areas for enhancement, and implement refinements."
    }
    
]

export const techStack = [
    {
        id: 1,
        label: "Next JS",
        img: "/techstack/nextjs.svg",
        description: "React framework for server-side rendering and static sites.",
        link: "https://nextjs.org/"
    },
    {
        id: 2,
        label: "TypeScript",
        img: "/techstack/typescript.svg",
        description: "Superset of JavaScript that adds static types.",
        link: "https://www.typescriptlang.org/"
    },
    {
        id: 3,
        label: "React JS/Native",
        img: "/techstack/react.svg",
        description: "JavaScript library for building user interfaces.",
        link: "https://react.dev/"
    },
    {
        id: 4,
        label: "Tailwind CSS",
        img: "/techstack/tailwindcss.svg",
        description: "Utility-first CSS framework for rapid UI development.",
        link: "https://tailwindcss.com/"
    },
    {
        id: 5,
        label: "HTML",
        img: "/techstack/html.svg",
        description: "Markup language for creating web pages.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
        id: 6,
        label: "CSS",
        img: "/techstack/css.svg",
        description: "Stylesheet language for designing web pages.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
        id: 7,
        label: "JavaScript",
        img: "/techstack/javascript.svg",
        description: "Programming language for web development.",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        id: 8,
        label: "PHP",
        img: "/techstack/php.svg",
        description: "Server-side scripting language for web development.",
        link: "https://www.php.net/"
    },
    {
        id: 9,
        label: "MySQL",
        img: "/techstack/mysql.svg",
        description: "Relational database management system.",
        link: "https://www.mysql.com/"
    },
    {
        id: 10,
        label: "Node.js",
        img: "/techstack/nodejs.svg",
        description: "JavaScript runtime built on Chrome's V8 engine.",
        link: "https://nodejs.org/"
    },
    {
        id: 11,
        label: "C++",
        img: "/techstack/cplusplus.svg",
        description: "Programming language for system and game development.",
        link: "https://isocpp.org/"
    },
    {
        id: 12,
        label: "Unity",
        img: "/techstack/unity.svg",
        description: "Game engine for 2D, 3D, and interactive experiences.",
        link: "https://unity.com/"
    }
];


  // Data for quick links
  export const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#service", label: "What we offer" },
    { href: "#contact", label: "Contact" },
  ];

  // Data for contact info
  export const contactInfo = [
    { type: "Email", value: "keynuinetech@gmail.com" },
    { type: "Phone", value: "+639471852092" },
    { type: "Address", value: "Daet, Camarines Norte" },
  ];

  // Data for social media
  export const socialMedia = [
    { href: "#facebook", label: "Facebook" },
    { href: "#twitter", label: "Twitter" },
    { href: "#linkedin", label: "LinkedIn" },
];


  export const ProjectItems = [
    {
    index: 0,
    title: "TravelCN",
    description: "TravelCN is a website that showcases the stunning landmarks and must-visit tourist spots in Camarines Norte, Philippines.",
    image: "/projects/travelcn.svg",
    visitLink: "https://travelcn.vercel.app/",
    codeLink: "https://github.com/aljonard-dc/travelcn",
    },
    {
    index: 1,
    title: "Elementalix",
    description: "Elementalix is an AR learning app that makes studying the Periodic Table immersive with a 360° view and detailed element data.",
    image: "/projects/elementalix.jpg",
    visitLink: "https://github.com/johnrefani/Elementalix",
    codeLink: "https://github.com/johnrefani/Elementalix",
    },
    {
    index: 2,
    title: "Natura Verde",
    description: "Natura Verde website streamlines resort bookings with a user-friendly interface, detailed resort info, a virtual tour, and an automated reservation system for efficiency and accuracy.",
    image: "/projects/natura.png",
    visitLink: "https://naturaverde.website/",
    codeLink: "https://github.com/johnrefani/Elementalix",
    }

];

export const AboutUsContent = [
    {
        id: 1,
        img: "/about/About.png",
        name: "What we do",
        designation: "",
        description: "We are a passionate team dedicated to turning ideas into reality through web, mobile, and game development. Our mission is to empower businesses and individuals with cutting-edge technology and seamless user experiences.",
    },{
        id: 2,
        img: "/about/Johnrey.PNG",
        name: "Johnrey Luntayao",
        designation: "UI/UX Designer | Full-Stack Developer",
        description: "I'm a developer & designer based from the Philippines. I specialize in UI/UX designing, focusing on creating simple but high quality designs. And is experienced in framework based front-end development.",
    },{
        id: 3,
        img: "/about/John-Cloyd.PNG",
        name: "John Cloyd Refani",
        designation: "Game Developer",
        description: "I am a game and web developer passionate about creating interactive and user-friendly digital experiences. With a strong foundation in both website and game development, I design and build websites and games that are not only visually appealing but also functional.",
    },{
        id: 4,
        img: "/about/Aljonard.PNG",
        name: "Aljonard Dela Cruz",
        designation: "Front-End Developer",
        description: "I'm a front-end developer passionate about turning designs into responsive, user-friendly, and visually appealing websites and web applications using modern technologies.",
    }
]
