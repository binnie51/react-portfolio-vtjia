const apps = [
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
    {
        type: "illustration",
        image: '',
        title: 'Brave Killer',
        alt: 'visual of Brave Killer illustration',
        description:'This is the piece that I have submitted to the Digimon Illustration Competition earlier this year based on their preselected Digimon and given prompt of ',
        date: 'January 2023'
    }
  ];

  {apps.map((app) => {
    return (
      <div className="bg-slate-500 h-80 w-64 rounded-md mb-6">
        <div className="flex justify-center items-center leading-none">
          <img
            src={app.image}
            alt={app.alt}
            className="h-40 w-56 rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700 hover:animate-pulse"
          />
        </div>
        <div className="p-3">
          <p className="block mb-1 font-bold">{app.title}</p>
          <p className="text-xs tracking-tighter">{app.description}</p>
        </div>
        {/* links */}
        <div className="flex justify-end p-2">
          <div className="flex">
            <a
              href={app.githubLink}
              target="_blank"
              className="icons mx-3 "
            >
              <FaGithub />
            </a>
            <a
              href={app.deployLink}
              target="_blank"
              className="icons mx-3 text-xl"
            >
              <FaLink />
            </a>
          </div>
        </div>
      </div>
    );
  })}