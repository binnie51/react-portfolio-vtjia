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
  const [showModal, setShowModal] = useState(false);

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
      <section className="w-full">
        <p className="text-center pt-16">Choose a category</p>
        <div className="flex flex-row gap-4 justify-center pb-4">
          <button
            className="relative btnFilter uppercase overflow-hidden text-white tracking-wider focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-3 py-2.5"
            type="button"
            onClick={() => filterContent("apps")}
          >
            <span className="absolute inset-x-0 h-1 bottom-0 bg-blue-300"></span>
            Apps
          </button>
          <button
            className="relative btnFilter uppercase overflow-hidden text-white tracking-wider focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-3 py-2.5"
            type="button"
            onClick={() => filterContent("graphic")}
          >
            <span className="absolute inset-x-0 h-1 bottom-0 bg-blue-300"></span>
            Graphics
          </button>
          <button
            className="relative btnFilter uppercase overflow-hidden text-white tracking-wider focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-3 py-2.5"
            type="button"
            onClick={() => filterContent("illustration")}
          >
            <span className="absolute inset-x-0 h-1 bottom-0 bg-blue-300"></span>
            Illustrations
          </button>
        </div>
        <h2 className="work-header font-bold">Portfolio</h2>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-content-center">
          {/* portfolio list */}
          <div className="mb-4">
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-lg">
              <img
                src={codeOp}
                className="transition duration-300 ease-in-out hover:-scale-125"
              />

              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 p-5">
                <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
                  This is the title
                </h4>
                <p className="leading-normal text-gray-100 line-clamp-3">
                  Lorem ipsum dolor, sit amet cons ectetur adipis icing elit.
                  Praesen tium, quibusdam facere quo laborum maiores sequi nam
                  tenetur laud.
                  
                </p>
                <button
                  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Details
                </button>
              </div>
            </div>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-sky-400 outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold text-white">Modal Title</h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-white text-lg leading-relaxed">
                        Lorem ipsum dolor, sit amet cons ectetur adipis icing elit.
                        Praesen tium, quibusdam facere quo laborum maiores sequi nam
                        tenetur laud.
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
