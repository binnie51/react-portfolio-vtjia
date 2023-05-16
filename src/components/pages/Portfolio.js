import "../styles/Portfolio.css";
// sample images
import codeOp from "../../assets/portfolio/codeop_sc.png";
import rentMyRide from "../../assets/portfolio/rentmyride.PNG";
import weather from "../../assets/portfolio/weather-1.PNG";
import movie from "../../assets/portfolio/movie.PNG";
import jsQuiz from "../../assets/portfolio/quiz.PNG";
import techBlog from "../../assets/portfolio/blog_tech.PNG";

// icons
import { FaGithub, FaLink } from "react-icons/fa";
import { useState } from "react";

export default function Portfolio() {
  const [content, setContent] = useState("App");

  const portfolios = [
    {
      type: "app",
      image: codeOp,
      title: "codeOp",
      alt: "codeOp thumbnail",
      deployLink: "https://codeop2.herokuapp.com/",
      githubLink: "https://github.com/cpaschall/codeOp.git",
      description:
        "Full-stack app using MVC model. A request board for developers to do volunteer works.",
    },
    {
      type: "app",
      image: rentMyRide,
      title: "RentMyRide",
      alt: "RentMyRide thumbnail",
      deployLink: "https://rentmyride01.herokuapp.com/",
      githubLink: "https://github.com/AnthonyDiBlasio/RentMyRide.git",
      description:
        "Full-stack MERN app where people could lend and borrow fancy cars!",
    },
    {
      type: "app",
      image: movie,
      title: "Movie Watchlist",
      alt: "Movie Watchlist thumbnail",
      deployLink: "https://binnie51.github.io/movie-watchlist/",
      githubLink: "https://github.com/binnie51/movie-watchlist.git",
      description:
        "Search up movies using third-part APIs and personalize your watchlist.",
    },
    {
      type: "app",
      image: weather,
      title: "Weather Dashboard",
      alt: "Weather Dashboard tumbnail",
      deployLink: "https://binnie51.github.io/weather-dashboard/",
      githubLink: "https://github.com/binnie51/weather-dashboard.git",
      description:
        "Utilize a third-party weatherAPI to pull city's forecast and localStorage to store persitent data.",
    },
    {
      type: "app",
      image: jsQuiz,
      title: "Code Quiz",
      alt: "Code Quiz thumbnail",
      deployLink: "https://binnie51.github.io/coding-quiz-assessment/",
      githubLink: "https://github.com/binnie51/coding-quiz-assessment.git",
      description:
        "A quiz game using simple logics to initialize time, deduct time, and save scores in localStorage.",
    },
    {
      type: "app",
      image: techBlog,
      title: "Tech Blog",
      alt: "Code Quiz thumbnail",
      deployLink: "https://techblog-v300.herokuapp.com/",
      githubLink: "https://github.com/binnie51/mvc-tech-blog.git",
      description: "A blog like site using MVC model.",
    },
    // {
    //     type: "illustration",
    //     image: '',
    //     title: 'Brave Killer',
    //     alt: 'visual of Brave Killer illustration',
    //     description:'This is the piece that I have submitted to the Digimon Illustration Competition earlier this year based on their preselected Digimon and given prompt of ',
    //     date: 'January 2023'
    // }
  ];

  const filterContent = (portType) => {};

  return (
    <div
      className="container flex flex-wrap justify-between items-center mx-auto px-10 md:px-14 lg:px-20 pb-10"
      id="portfolios"
    >
      <section className="w-full px-16 py-16">
        <div className="flex flex-row gap-4 justify-center hover:uppercase">
          <button
            className="text-white hover:underline focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="button"
            onClick={() => filterContent("apps")}
          >
            Apps
          </button>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => filterContent("graphic")}
          >
            Graphic
          </button>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => filterContent("illustration")}
          >
            Illustration
          </button>
        </div>
        <h2 className="work-header font-bold">Portfolio</h2>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-content-center">
          {/* portfolio list */}
          <div 
            className="mb-4">
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img
                    src={codeOp}
                    className="transition duration-300 ease-in-out hover:-scale-125" />
                    
                    <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40"></div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
