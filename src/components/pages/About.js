import "../styles/About.css";

import photo from "../../assets/IMG05021.jpg";
import { DiJavascript1, DiReact } from "react-icons/di";
import { FaNode, FaBootstrap, FaGitSquare } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiPython, SiMongodb, SiNextdotjs } from "react-icons/si";

export default function About() {
  return (
    <div className="container-fluid flex justify-center">
      <div className="about-container px-16 py-16">
        <h2 className="heading-about uppercase text-center font-bold mb-4">
          About Me
        </h2>
        <div className="grid gap-10 lg:grid-cols-2 md:grid-cols-1 pb-5">
          <div className="overlay">
            <div className="wrapper">
              <img src={photo}></img>
            </div>
            <p className="text-end">Photo by Hansel Tan.</p>
          </div>
          <div className="about-text text-white">
            <p className="tracking-wide">
              A comprehensive coding bootcamp graduate with prior experience in
              graphic design and art. Exhibiting enthusiasm for technologies,
              programming, analytics, and innovative endeavors. Demonstrates a
              quick grasp of novel concepts and ideas, akin to acquiring fluency
              in a second language. Presently seeking opportunities to apply
              their development skills in order to fulfill business requirements
              and achieve high-quality results. <br /> <br />
              <span className="font-bold">Background:</span> <br />
              Having been raised in Indonesia, pursuing a career in the tech
              industry seemed unrealistic for me personally, mainly due to
              limited exposure to the internet and advanced gadgets. However, as
              time went on, I delved into programming and discovered that my
              creative background could be utilized to solve problems and create
              innovative products on the web.
            </p>
            <div className="m-8 bg-amber-600" style={{ height: "1px" }}></div>
            <p className="tracking-wide pt-1 text-center">
              Skills I have acquired:
            </p>
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
                <SiNextdotjs />
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
  );
}
