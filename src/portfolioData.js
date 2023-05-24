// sample images app
import codeOp from "./assets/portfolio/codeop_sc.png";
import rentMyRide from "./assets/portfolio/rentmyride.PNG";
import weather from "./assets/portfolio/weather-1.PNG";
import movie from "./assets/portfolio/movie.PNG";
import jsQuiz from "./assets/portfolio/quiz.PNG";
import techBlog from "./assets/portfolio/blog_tech.PNG";

// illustrations
import wargreymon from "./assets/portfolio/Wargreymon.jpg";

const Portfolios = [
    {
      portType: "app",
      image: codeOp,
      title: "codeOp",
      alt: "codeOp thumbnail",
      deployLink: "https://codeop2.herokuapp.com/",
      githubLink: "https://github.com/cpaschall/codeOp.git",
      description:
        "Full-stack app using MVC model. A request board for developers to do volunteer works.",
    },
    {
      portType: "app",
      image: rentMyRide,
      title: "RentMyRide",
      alt: "RentMyRide thumbnail",
      deployLink: "https://rentmyride01.herokuapp.com/",
      githubLink: "https://github.com/AnthonyDiBlasio/RentMyRide.git",
      description:
        "Full-stack MERN app where people could lend and borrow fancy cars!",
    },
    {
      portType: "app",
      image: movie,
      title: "Movie Watchlist",
      alt: "Movie Watchlist thumbnail",
      deployLink: "https://binnie51.github.io/movie-watchlist/",
      githubLink: "https://github.com/binnie51/movie-watchlist.git",
      description:
        "Search up movies using third-part APIs and personalize your watchlist.",
    },
    {
      portType: "app",
      image: weather,
      title: "Weather Dashboard",
      alt: "Weather Dashboard thumbnail",
      deployLink: "https://binnie51.github.io/weather-dashboard/",
      githubLink: "https://github.com/binnie51/weather-dashboard.git",
      description:
        "Utilize a third-party weatherAPI to pull city's forecast and localStorage to store persitent data.",
    },
    {
      portType: "app",
      image: jsQuiz,
      title: "Code Quiz",
      alt: "Code Quiz thumbnail",
      deployLink: "https://binnie51.github.io/coding-quiz-assessment/",
      githubLink: "https://github.com/binnie51/coding-quiz-assessment.git",
      description:
        "A quiz game using simple logics to initialize time, deduct time, and save scores in localStorage.",
    },
    {
      portType: "app",
      image: techBlog,
      title: "Tech Blog",
      alt: "Blog thumbnail",
      deployLink: "https://techblog-v300.herokuapp.com/",
      githubLink: "https://github.com/binnie51/mvc-tech-blog.git",
      description: 
        "A blog like site using model-view-controller (MVC) design pattern. It enables registered users to post/delete their entries, and view other entries made by other users in the dashboard. Users can post comments to share their thoughts/opinions in regards to a specific entry.",
    },
    {
        portType: "illustration",
        image: wargreymon,
        title: 'Brave Killer',
        alt: 'visual of Brave Killer illustration',
        description:'This is the piece that I have submitted to the Digimon Illustration Competition earlier this year based on their preselected Digimon and given prompt of ',
        date: 'January 2023'
    }
  ];

  export default Portfolios;