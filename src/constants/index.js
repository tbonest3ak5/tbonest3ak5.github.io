import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    Python,
    Cpp,
    Java,
    C,
    Racket,
    Haskell,
    Latex,
    VSCode,
    Fusion360,
    Inventor,
    Solidworks,
    OnShape,
    NumPy,
    Matplotlib,
    OpenCV,
    Tensorflow,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    Markham,
    FIRST,
    Elections,
    Paint1,
    Heli,
    Can,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "#about",
      title: "About",
    },
    {
      id: "#work",
      title: "Work",
    },
    {
      id: "#contact",
      title: "Contact",
    },
    {
      id: "https://drive.google.com/file/d/1_KYckn9V702zhFrbj5_SMsu5XjiwKURN/view",
      title: "CV",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "C++",
      icon: Cpp,
    },
    {
      name: "C",
      icon: C,
    },
    {
      name: "Java",
      icon: Java,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    /*
    {
      name: "Racket",
      icon: Racket,
    },
    {
      name: "Haskell",
      icon: Haskell,
    },
    {
      name: "LaTeX",
      icon: Latex,
    },
    */
    {
      name: "git",
      icon: git,
    },
    {
      name: "VS Code",
      icon: VSCode,
    },
    {
      name: "Fusion 360",
      icon: Fusion360,
    },
    {
      name: "Inventor",
      icon: Inventor,
    },
    {
      name: "Solidworks",
      icon: Solidworks,
    },
    {
      name: "OnShape",
      icon: OnShape,
    },
    {
      name: "NumPy",
      icon: NumPy,
    },
    /*
    {
      name: "Matplotlib",
      icon: Matplotlib,
    },
    */
    {
      name: "React JS",
      icon: reactjs,
    },
    /*
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  */
  ];
  
  const experiences = [
    {
      title: "Robotics Mentor",
      company_name: "FIRST Tech Challenge Teams 16488 & 22101",
      icon: FIRST,
      iconBg: "white",
      date: "June 2023 - Present",
      points: [
        "Mentor and former team captain of St. Robert CHS Rams Robotics",
        "Worked with 2 teacher coaches and 30 students to incorporate the engineering design process and effective team management",
        "4 qualifier wins and 2023 Ontario Provincial Championships Design Award Winner",
        "Programmed in Java custom PID motion profiling and curved paths with odometry for robot optimization",
        "Applied OpenCV and TensorFlow for computer vision capabilities ",
        "Applied FEA, generative design and version control in OnShape, Fusion 360, and Inventor",
      ],
    },
    {
      title: "Lifeguard",
      company_name: "City of Markham",
      icon: Markham,
      iconBg: "white",
      date: "Sept 2022 - June 2023",
      points: [
        "Worked to ensure the safety of patrons and smooth operation of large events at the Markham Pan Am Centre including the 2023 World Aquatics Artistic Swimming World Cup.",
      ],
    },
    {
      title: "Information Assistant",
      company_name: "Elections Ontario",
      icon: Elections,
      iconBg: "white",
      date: "Sept 2022 - June 2023",
      points: [
        "Assisted in the 2022 Provincial Election by ensuring a smooth and transparent election at a polling location. Served over 1000 voters.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const projects = [
    {
      name: "CanSat Competition",
      description:
        "Launched our custom mini-satelite to analyze atmospheric data to assist in wildfire detection and monitoring. Designed an auto-tracking antenna to ensure a consistent data connection during descent.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "OnShape",
          color: "green-text-gradient",
        },
        {
          name: "Fusion 360",
          color: "orange-text-gradient",
        },
      ],
      image: Can,
      source_code_link: "https://esamultimedia.esa.int/docs/edu/Canada_Team_Contrail_CanSat_Final_Report_2023_redacted.pdf",
    },
    {
      name: "Canadian Young Physicists' Tournament",
      description:
        "Tackled advanced experimental physics problems by formulating theretical models, reproducing phenomena, and isolating parameters through experiments. Used Lagrangian Mechanics and coded simulations in Python. Competed in Physics debates against opponents.",
      tags: [
        {
          name: "Analytical Skills",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Fusion 360",
          color: "orange-text-gradient",
        },
      ],
      image: Heli,
      source_code_link: "",
    },
    {
      name: "Paint Tube Mathematical Analysis",
      description:
        "A fun deep dive into modelling the real-world connections of a paint tube's geometry. Spans from simple ovals to integration, polynomial fitting and CAD models.",
      tags: [
        {
          name: "OnShape",
          color: "green-text-gradient",
        },
        {
          name: "Mathematical Modelling",
          color: "pink-text-gradient",
        },
      ],
      image: Paint1,
      source_code_link: "https://drive.google.com/file/d/1iGzz9Mr5i0OOX7lmehsGBWLdplkoqg57/view?usp=sharing",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };