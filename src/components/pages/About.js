import React from "react";
import '../styles/About.css';

export default function About() {
    return (
        <div class="container-fluid flex justify-center" id="about">
            <div class="about-container px-10 py-10">
                <h2 class="heading-about text-white text-end">About Myself</h2>
                <div class="grid gap-10 md:grid-cols-2 pb-5">
                    <div class="overlay">
                        <div class="wrapper">
                            <img src="./assets/profile-photo.png" alt="Vincent's profile photo"></img>
                        </div>
                    </div>
                    <div class="about-text text-white">
                        <p class="tracking-wide">
                            I'm a front-end developer with backgrounds in art and design.  
                            My pursue of creativity began as a kid who loves to doodle on his notebooks, then on a pen tablet.
                            Ever since, my fascniation of turning creative thoughts into digital media have led me to study art and design in high school and college.
                            I eventually took interest in programming, as I could utilize my multilingual and artistic background
                            to solve problems and produce creative end products.
                        </p>
                        <p class="tracking-wide pt-4">Skills I have acquired:</p>
                        <ul class="skills flex flex-wrap justify-center py-4 gap-7">
                            <li class="list-item">
                                <i class="fa-brands fa-js"></i>
                            </li>
                            <li class="list-item">
                                <i class="fa-brands fa-node"></i>
                            </li>
                            <li class="list-item">
                                <i class="fa-brands fa-bootstrap"></i>
                            </li>
                            <li class="list-item">
                                <i class="fa fa-git"></i>
                            </li>
                            <li class="list-item pt-3">
                                <img src="./assets/mysql.png.jpg" alt="mysql logo" style="height: 40px;"></img>
                            </li>
                            <li class="list-item pt-3">
                                <img src="./assets/Tailwind_CSS.svg.png" alt="tailwindcss logo" style="height: 50px;"></img>
                            </li>
                            <li class="list-item pt-3">
                                <img src="./assets/express-js.png" alt="express.js logo" style="height: 50px;"></img>
                            </li>
                            <li class="list-item">
                                <i class="fa-brands fa-python"></i>
                            </li>
                            <li class="list-item">
                                <i class="fa-brands fa-java"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ) 
}