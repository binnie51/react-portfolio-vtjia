// sample images app
import codeOp from "./assets/portfolio/codeop_sc.png";
import rentMyRide from "./assets/portfolio/rentmyride.PNG";
import weather from "./assets/portfolio/weather-1.PNG";
import movie from "./assets/portfolio/movie.PNG";
import jsQuiz from "./assets/portfolio/quiz.PNG";
import techBlog from "./assets/portfolio/blog_tech.PNG";

// graphics
import sq1PamMock from "./assets/portfolio/sq1_pam/mockup_pampSQ1.png";
import codeOpLogo from "./assets/portfolio/Logocodeop.png";

// illustrations
import wargreymon from "./assets/portfolio/Wargreymon.jpg";
import reiAsuka from "./assets/portfolio/Rei_Asuka.png";
import homeIllust from "./assets/portfolio/Untitled_Artwork.png";

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
    title: "Brave Killer",
    alt: "image of Brave Killer illustration",
    description:
      "A piece that I have submitted to the Digimon Illustration Competition earlier this year based on their preselected Digimon and themed prompt of their unique characteritics.",
    date: "Jan '23",
  },
  {
    portType: "illustration",
    image: homeIllust,
    title: "Homepage Illustration",
    alt: "image of homepage illustration",
    description:
      "The full view of my illustration from the Home page.",
    deployLink: homeIllust,
    githubLink: "",  
    date: "Jul '22",
  },
  {
    portType: "illustration",
    image: reiAsuka,
    title: "Evangelion Fanart",
    alt: "image of Brave Killer illustration",
    description:
      "A fanart of Rei and Asuka from Evangelion using a different coloring technique that's more rendered than my usual graphic-style coloring.",
    deployLink: reiAsuka ,
    githubLink: "",  
    date: "Jun '23",
  },
  {
    portType: "graphic",
    image: sq1PamMock,
    title: "SQ1 Church Pamphlete",
    alt: "church pamphlet",
    deployLink:
      "https://www.canva.com/design/DAFaygxwVHk/FJLjIS8ULS-jaYHCJP39hA/view?utm_content=DAFaygxwVHk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    githubLink: "",
    description: "A trifold pamphlete designed to introduce Square One Church.",
    date: "Feb '23",
  },
  {
    portType: "graphic",
    image: codeOpLogo,
    title: "codeOp app Logo",
    alt: "image of codeOp Logo",
    deployLink: codeOpLogo,
    githubLink: "",
    description: "A logo graphic I created for the app: codeOp.",
    date: "Jul '22",
  },
];

export default Portfolios;
