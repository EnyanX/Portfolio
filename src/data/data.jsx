import ByteDance from "../Assets/ByteDance.png";
import USC from "../Assets/USC.png";
import Pega from "../Assets/Pega.svg";

export const TAGS = ["HOME", "WORK"];
export const PAGES = ["home", "work"];

export const ASPECTS = ["Backend Developer", "Frontend Developer", "Tech Content Creator", "National Chess Master"];
const backendTools = "Java/C++/Kotlin/Go";
const frontendTools = "ReactJS/Bootstrap";
const contentCreator = "4,300+ Subscribers";
const chess = "Chess is the BEST!";
export const ASPECT_DETAILS = [backendTools, frontendTools, contentCreator, chess];

export const ITEMS = [
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
        "Host a content channel with 4,300+ subscribers,focusing on software engineering and computer science topics. Produce diverse educational content,including personal experiences, project show cases, and step-by-step tutorials, empowering peers to navigate learning paths and field expectations.",
        // media: {
        //   type: "IMAGE",
        //   source: {
        //     url: Pega,
        //   },
        // },
      },
  ];