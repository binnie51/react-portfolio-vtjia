import React from "react";

import codeOp from '../../assets/codeop_sc.png';
import movieList from '../../assets/'

function Portfolio({portfolios}) {
    return (
        <div className="container flex flex-wrap justify-between items-center mx-auto px-10 md:px-14 lg:px-20 pb-10" id="portfolio">
            <section className="w-full text-white">
                <h2 className="work-header">Portfolio</h2>
                <p >
                    Click on the cards to view sites!
                </p>
                <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 content-center gap-6 mt-6">
                    <div class="project-card hover:animate-pulse">
                        <a href="" target="_blank">
                            <img class="card-image" src={codeOp} alt="codeOp image"></img>
                        </a>
                        <h4 class="project-title">codeOp</h4>
                        <div class="link-list">
                            <a href="https://github.com/cpaschall/codeOp.git" target="_blank"
                            className="fa fa-github link-portfolio animate__animated animate__bounce animate__infinite"></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio;