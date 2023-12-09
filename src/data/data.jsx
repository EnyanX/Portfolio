// images for timeline
import ByteDance from "../Assets/ByteDance.png";
import USC from "../Assets/USC.png";
import Pega from "../Assets/Pega.svg";

// images for projects
import Portfolio from "../Assets/portfolio-page.png";
import Beijing from "../Assets/ExperienceBeijing.png"
import Raft from "../Assets/RaftAlgo.jpeg";
import MapReduce from "../Assets/MapReduce.png";
import MineSweeper from "../Assets/MineSweeper.png";
import Mario from "../Assets/super-mario.png";
import Zelda from "../Assets/zelda.png";
import Frogger from "../Assets/frogger.png";
import Stock from "../Assets/StockTrading.png";
import BeijingOriginal from "../Assets/BeijingWelcomesYou.png"

// images for links
import github from "../Assets/github.svg";
import linkedin from "../Assets/linkedin.svg";

export const TAGS = ["HOME", "PROJECT✨"];
export const PAGES = ["", "project"];

export const ASPECTS = ["Backend Developer", "Frontend Developer", "Tech Content Creator", "National Chess Master"];
const backendTools = "Java/C++/Kotlin/Go MVC/Microservice SQL/NoSQL";
const frontendTools = "React/Postman Bootstrap/HTML/CSS ";
const contentCreator = "4,300+ Subscribers";
const chess = "\"Chess is life\" – Bobby Fischer";
export const ASPECT_DETAILS = [backendTools, frontendTools, contentCreator, chess];

export const TIMELINES = [
    {
        title: "Aug 2019 - Dec 2023",
        cardTitle: "University of Southern California",
        url: "https://www.usc.edu/",
        cardDetailedText:
          "B.S. in CS with GPA 3.79/4.0 and Jackling Engineering Scholarship. Admitted as a MechE major but ended up falling love with CompSci! Woohoo 🎉",
        media: {
          type: "IMAGE",
          source: {
            url: USC,
          },
        },
    },
    {
      title: "Mar-July 2022",
      cardTitle: "ByteDance",
      url: "https://www.bytedance.com/en/",
      cardDetailedText:
        "Software Developer Intern. Built a microservice middleware with Golang, RESTful API, ElasticSearch, Clickhouse and Adapter design pattern.",
      media: {
        type: "IMAGE",
        source: {
          url: ByteDance,
        },
      },
    },
    {
      title: "May-Aug 2023",
      cardTitle: "Pegasystems",
      url: "https://www.pega.com/",
      cardDetailedText:
      "Software Developer Intern. Built a 'Recents' feature for Pega's multi-million-revenue product using Kotlin, MongoDB, and Mockk with 95% test coverage. Also led code walkthrough sessions and pair-programmed with senior developers 👩‍💻",
      media: {
        type: "IMAGE",
        source: {
          url: Pega,
        },
      },
    },
    {
        title: "May-Present 2023",
        cardTitle: "✨ Technical Content Creator ",
        cardDetailedText:
        "Host a content channel focusing on software engineering and computer science topics. Produce diverse educational content, including personal experiences, project show cases, and step-by-step tutorials, empowering peers to navigate learning paths and field expectations.",
      },
];

export const PROJECTS = [
  {
    image: Portfolio,
    title: "Personal Website",
    description: "😉 Heyyy it's the site you're on right now!",
    techStack: "[Web] React, Bootstrap, Netlify",
    link: "http://enyanxia.netlify.com"
  },
  {
    image: Beijing,
    title: "Experience Beijing",
    description: "Discover Beijing's rich culture and travel gems. It's my first React project!",
    techStack: "[Web] React, Chatgpt API",
    link: "https://codesandbox.io/p/devbox/experience-beijing-glhqrk"
  },
  {
    image: Raft,
    title: "Raft Consensus Algo Impl",
    description: "Implement a consensus algorithm for fault-tolerant distributed systems",
    techStack: "[Backend] Go, Multithreading",
    link: "https://github.com/EnyanX/Raft-Concensus-Algorithm"
  },
  {
    image: MapReduce,
    title: "MapReduce Algo Impl",
    description: "Big data processing via parallel computation across distributed systems",
    techStack: "[Backend] Go, Multithreading",
    link: "https://github.com/EnyanX/Map-Reduce"
  },
  {
    image: MineSweeper,
    title: "Mine Sweeper",
    description: "Navigate, avoid mines, conquer the explosive challenge 💥",
    techStack: "[Mobile] Java, Android, BFS",
    link: "https://github.com/EnyanX/Mine-Sweeper"
  },
  {
    image: Mario,
    title: "Super Mario",
    description: "The iconic Super Mario adventure in a 2D side-scrolling fashion 🎮",
    techStack: "[Game] C++, OOP",
    link: ""
  },
  {
    image: Zelda,
    title: "A Link to the Past",
    description: "Mimic a portion of Zelda game, where Link walks around and attacks patrolling soldiers",
    techStack: "[Game] C++, OOP, A* Search",
    link: ""
  },
  {
    image: Frogger,
    title: "Frogger",
    description: "Guide the frog between opposing lanes of trucks, cars, and other vehicles, to avoid becoming roadkill!",
    techStack: "[Game] C++, OOP",
    link: ""
  },
  {
    image: Stock,
    title: "Mock Money Market",
    description: "Engage with real-time stock info, mark favorites, and trade with play money. Refine investment skills risk-free",
    techStack: "[Web] JavaScript, Java",
    link: ""
  },
  {
    image: BeijingOriginal,
    title: "Your Beijing Guide",
    description: "Older version of Experience Beijing in vanilla JS. Brainstormed my own color matching 🎨",
    techStack: "[Web] JavaScript, PHP, SQL",
    link: "https://github.com/EnyanX/Your-Beijing-Guide"
  }
]

export const LINKS_CONTENT = [
  {
    site: "https://www.linkedin.com/in/enyan-xia/",
    image: linkedin,
    alt: "linkedin-icon"
  },
  {
    site: "https://github.com/EnyanX/",
    image: github,
    alt: "github-icon"
  }
]


export const OVERVIEW_DESCRIPTION = "I'm a software engineer with experience in both Backend and Frontend. My passion lies in leveraging technology to tackle complex business challenges. Fun facts, I'm a technical content creator and chess player in my free time!";
export const TECH_CHANNEL_INTRO = "Since May 2023, my channel has garnered <strong>4,300+ subscribers</strong> and over <strong>200k views</strong>. Focusing in computer science and software engineering, I cover tech stack intros (React, Kotlin), share insights from internships (agile development, pair programming, best coding practices), and recommend study resources (full-stack web design, algorithms, etc). The driving force behind my channel is a sincere desire to assist fellow computer science peers in navigating their learning paths. Having experienced the challenges of transitioning from a different major, I aim to share the insights and tips I wish I had received when I first started my CS journey. My goal is to support others who may feel as lost as I once did in the vast world of computer science education. <p>(Yes I started college as a Mechanical Engineering major LOL)</p>"
