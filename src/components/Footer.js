import React from "react";
import "./styles/Footer.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <footer className="container-fluid relative py-10 bg-gray-900">
            <p className="text-center">&copy; Copyrights 2022 Vincent Tjia.</p>

            {/* once users all the way at the bottom, click this arrow to scroll back up */}
            <a href="https://github.com/binnie51" className="absolute bottom-0 right-0 p-5">
                {/* <FontAwesomeIcon icon={["fas", "house"]} className="text-xl mx-2" /> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
            </a>
        </footer>
    )
};