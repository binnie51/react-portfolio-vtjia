import React from "react";
import '../styles/Hero.css';

import resume from '../../assets/jr.web_VT.pdf';

function Hero() {
    return (
        <div>
            <header className="container-fluid flex flex-wrap justify-center">
                <div className="hero-image grid grid-rows-2">
                    <div className="hero-text m-10 px-5">
                        <div>
                            <h1 className="font-black">
                                Vincent Tjia
                            </h1>
                            <div  className="bg-slate-800" style={{height : 2 }}></div>
                            <h2 className="font-bold">
                                Web Developer, Designer
                            </h2>
                        </div>
                        {/* resume */}
                        <div className="mt-6 font-medium">
                        <a className="myResumeBtn bg-amber-600 hover:bg-gray-900 hover:" 
                        href={resume}
                        target="_blank" 
                        rel="noreferrer">
                            View my resume
                        </a>
                        </div>
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Hero;