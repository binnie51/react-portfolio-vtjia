import "../styles/Portfolio.css"
// sample images
import codeOp from '../../assets/portfolio/codeop_sc.png';
import rentMyRide from '../../assets/portfolio/rentmyride.PNG';
import weather from '../../assets/portfolio/weather-1.PNG';
import movie from '../../assets/portfolio/movie.PNG';
import jsQuiz from '../../assets/portfolio/quiz.PNG';
import techBlog from '../../assets/portfolio/blog_tech.PNG'

// icons
import { FaGithub, FaLink } from 'react-icons/fa';

export default function Portfolio() {
    // web portfolio object
    const portfolios = [
        {
            image: codeOp,
            title: 'codeOp',
            alt: 'codeOp thumbnail',
            deployLink:'https://codeop2.herokuapp.com/',
            githubLink: 'https://github.com/cpaschall/codeOp.git',
            description: 'Full-stack app using MVC model. A request board for developers to do volunteer works.'
        },
        {
            image: rentMyRide,
            title: 'RentMyRide',
            alt: 'RentMyRide thumbnail',
            deployLink:'https://rentmyride01.herokuapp.com/',
            githubLink: 'https://github.com/AnthonyDiBlasio/RentMyRide.git',
            description: 'Full-stack MERN app where people could lend and borrow fancy cars!'
        },
        {
            image: movie,
            title: 'Movie Watchlist',
            alt: 'Movie Watchlist thumbnail',
            deployLink:'https://binnie51.github.io/movie-watchlist/',
            githubLink: 'https://github.com/binnie51/movie-watchlist.git',
            description: 'Search up movies using third-part APIs and create a personal watchlist.'
        },
        {
            image: weather,
            title: 'Weather Dashboard',
            alt: 'Weather Dashboard tumbnail',
            deployLink:'https://binnie51.github.io/weather-dashboard/',
            githubLink: 'https://github.com/binnie51/weather-dashboard.git',
            description: "App that utilize a third-party API to retrieve data for cities and localStorage to store persitent data."
        },
        {
            image: jsQuiz,
            title: 'Code Quiz',
            alt: 'Code Quiz thumbnail',
            deployLink:'https://binnie51.github.io/coding-quiz-assessment/',
            githubLink: 'https://github.com/binnie51/coding-quiz-assessment.git',
            description: 'A quiz game using simple logics to initialize time, deduct time, and save scores in localStorage.'
        },
        {
            image: techBlog,
            title: 'Tech Blog',
            alt: 'Code Quiz thumbnail',
            deployLink:'https://techblog-v300.herokuapp.com/',
            githubLink: 'https://github.com/binnie51/mvc-tech-blog.git',
            description: 'A blog like site using MVC model.'
        },
    ]
    // illustrations object
    const illustrations = [
        {
            image: '',
            title: 'Brave Killer',
            alt: 'visual of Brave Killer illustration',
            description:'This is the piece that I have submitted to the Digimon Illustration Competition earlier this year based on their preselected Digimon and given prompt of ',
            date: 'January 2023'
        },
    ]
    // design object
    const graphicDesigns = [
        
    ]
    
    return (
        <div className="container flex flex-wrap justify-between items-center mx-auto px-10 md:px-14 lg:px-20 pb-10" id="portfolios">
            <section className="w-full">
                <h2 className="work-header font-bold">Portfolio</h2>
                <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 place-content-center">
                    
                    {/* porfolio cards */}
                    {portfolios.map((portfolio) => {
                        return (
                            <div className="bg-slate-500 h-80 w-64 rounded-md mb-6">
                                <div className="flex justify-center items-center leading-none">
                                    <img
                                        src={portfolio.image}
                                        alt={portfolio.alt}
                                        className="h-40 w-56 rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700 hover:animate-pulse"
                                    />
                                </div>
                                <div className="p-3">
                                    <p className="block mb-1 font-bold">{portfolio.title}</p>
                                    <p className="text-xs tracking-tighter">
                                        {portfolio.description}
                                    </p>
                                </div>
                                {/* links */}
                                <div className="flex justify-end p-2">
                                    <div className="flex">
                                        <a href={portfolio.githubLink} target="_blank" className="icons mx-3 " >
                                            <FaGithub />
                                        </a>
                                        <a href={portfolio.deployLink} target="_blank" className="icons mx-3 text-xl">
                                            <FaLink />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })} 
                </div>
            </section>
        </div>
    )
}