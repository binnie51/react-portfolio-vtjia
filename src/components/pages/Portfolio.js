// all the images
import codeOp from '../../assets/portfolio/codeop_sc.png';
import rentMyRide from '../../assets/portfolio/rentmyride.PNG';
import weather from '../../assets/portfolio/weather-1.PNG';
import movie from '../../assets/portfolio/movie.PNG';
import jsQuiz from '../../assets/portfolio/quiz.PNG';

// icons
import { FaGithub, FaLink } from 'react-icons/fa';

function Portfolio() {
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
            title: 'JS Quiz',
            alt: 'JS Quiz thumbnail',
            deployLink:'https://binnie51.github.io/movie-watchlist/',
            githubLink: 'https://github.com/binnie51/movie-watchlist.git',
            description: 'A quiz game using simple logics to initialize time, deduct time, and save scores in localStorage.'
        },
    ]
    
    return (
        <div className="container flex flex-wrap justify-between items-center mx-auto px-10 md:px-14 lg:px-20 pb-10" id="portfolio">
            <section className="w-full text-white">
                <h2 className="work-header">Portfolio</h2>
                <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 place-content-center">
                    {portfolios.map(portfolio => {
                        return (
                            // <div className="project-card hover:animate-pulse">
                            //     <a href={portfolio.deployLink} target="_blank">
                            //         <img className="card-image" src={codeOp} alt="codeOp image"></img>
                            //     </a>
                            //     <h4 className="project-title">{portfolio.title}</h4>
                            //     <div className="link-list">
                            //         <a href={portfolio.githubLink} target="_blank"
                            //         className="fa fa-github link-portfolio animate__animated animate__bounce animate__infinite"></a>
                            //     </div>
                            // </div>

                            <div className="bg-slate-500 h-80 w-64 rounded-md">
                                <div className="flex justify-center items-center leading-none">
                                    <img
                                        src={portfolio.image}
                                        alt={portfolio.alt}
                                        className="h-40 w-56 rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700 hover:animate-pulse"
                                    />
                                </div>
                                <div className="p-3">
                                    <p className="block mb-1 font-medium">{portfolio.title}</p>
                                    <p className="text-xs tracking-tighter">
                                        {portfolio.description}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center p-2">
                                <img
                                    src=""
                                    alt=""
                                    className="rounded-full h-7"
                                />
                                <div className="flex">
                                    <a href={portfolio.githubLink} target="_blank" className="mx-3 text-xl hover:animate-bounce" >
                                        <FaGithub />
                                    </a>
                                    {/* <span className="text-sm ml-1">100</span> */}
                                    {/* <i className="material-icons ml-1" style={{color: "#522cad"}}>message</i> */}
                                    <a href={portfolio.deployLink} target="_blank" className="mx-3 text-xl hover:animate-bounce">
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

export default Portfolio;