import '../styles/Hero.css';

import resume from '../../assets/Vincent Tjia Resume.pdf';

function Hero() {
    return (
        <div>
            <header className="container-fluid flex flex-wrap justify-center">
                <div className="hero-image">
                    <div className="hero-text my-16 ml-20 px-10">
                        <div>
                            <h2 className="font-semibold">Hello, I'm</h2>
                            <h1 className="font-black">
                                Vincent Tjia
                            </h1>
                            <div className="bg-slate-800" style={{height : 1.5 }}></div>
                            <h2 className="font-bold">
                                Web Developer, Designer
                            </h2>
                            {/* resume */}
                            <div className="font-medium mt-10">
                                <a className="myResumeBtn bg-amber-600 hover:bg-gray-900 hover:" 
                                    href={resume}
                                    target="_blank" 
                                    rel="noreferrer">
                                        View my resume
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Hero;