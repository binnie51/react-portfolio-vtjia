import React from "react";
import '../styles/About.css';

import photo from '../../assets/IMG05021.jpg';
// import MySQL from '../../assets/mysql.jpg';
// import express from '../../assets/express-js.png';
import { DiJavascript1, DiReact, DiJava } from 'react-icons/di';
import { FaNode, FaBootstrap, FaGitSquare } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiPython, SiMongodb } from 'react-icons/si';

export default function About() {
    return (
        <div className="container-fluid flex justify-center" >
            <div className="about-container px-16 py-16">
                <h2 className="heading-about text-white text-center font-bold mb-4">About Me</h2>
                <div className="grid gap-10 lg:grid-cols-2 md:grid-cols-1 pb-5">
                    <div className="overlay">
                        <div className="wrapper">
                            <img src={photo} ></img>
                        </div>
                        <p className="text-white text-end">Photo by Hansel Tan.</p>
                    </div>
                    <div className="about-text text-white">
                        <p className="tracking-wide">
                        A recent graduate from Upenn's coding bootcamp. I'm a full-stack web developer with backgrounds in art and design. 
                            Growing up in Indonesia, a tech career wasn't the path I see myself in due to the lack of exposure to advance technologies and the internet.                     
                            Hence, I was in pursuit of artistic career due to my love of Japanese manga and animation.
                            Eventually, fate brought me elsewhere and I began diving into programming, as I could utilize my artistic background
                            to solve problems and produce creative products on the web.<br/><br/>
                            Fun fact: I can also speak Indonesian and Japanese. I'm on my way to become a quartelingual, that being Mandarin Chinese.
                        </p>
                        <div className="m-8" style={{backgroundColor:"white", height: "1px"}}></div>
                        <p className="tracking-wide pt-1 text-center">Skills I have acquired:</p>
                        <ul className="skills flex flex-wrap justify-center py-4 gap-7">
                            <li className="list-item">
                                <DiJavascript1 />
                            </li>
                            <li className="list-item">
                                <FaNode />
                            </li>
                            <li className="list-item">
                                <SiTailwindcss />
                            </li>
                            <li className="list-item">
                                <FaBootstrap />
                            </li>
                            <li className="list-item">
                                <DiReact />
                            </li>
                            <li className="list-item">
                                <SiMysql />
                            </li>
                            <li className="list-item">
                                <SiPython />
                            </li>
                            <li className="list-item">
                                <DiJava />
                            </li>
                            <li className="list-item">
                                <FaGitSquare />
                            </li>
                            <li className="list-item">
                                <SiMongodb />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ) 
}