import React from "react";
import '../styles/About.css';

import photo from '../../assets/profile-photo.png';
import MySQL from '../../assets/mysql.png.jpg';
import tailwind from '../../assets/tailwind.png';
import express from '../../assets/express-js.png';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
    return (
        <div className="container-fluid flex justify-center" >
            <div className="about-container px-16 py-16">
                <h2 className="heading-about text-white text-center font-bold mb-4">About Myself</h2>
                <div className="grid gap-10 md:grid-cols-2 pb-5">
                    <div className="overlay">
                        <div className="wrapper">
                            <img src={photo} ></img>
                        </div>
                    </div>
                    <div className="about-text text-white">
                        <p className="tracking-wide">
                            I'm a front-end developer with backgrounds in art and design.  
                            My pursue of creativity began as a kid who loves to doodle on his notebooks, then on a pen tablet.
                            Ever since, my fascniation of turning creative thoughts into digital media have led me to study art and design in high school and college.
                            I eventually took interest in programming, as I could utilize my multilingual and artistic background
                            to solve problems and produce creative end products.
                        </p>
                        <p className="tracking-wide pt-4">Skills I have acquired:</p>
                        <ul className="skills flex flex-wrap justify-center py-4 gap-7">
                            <li className="list-item">
                                <i src={tailwind}></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ) 
}