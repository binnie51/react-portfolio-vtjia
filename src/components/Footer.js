import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <footer className="container-fluid relative py-10">
            <p className="text-center">&copy; 2022 Vincent Tjia. All rights rerserved.</p>

            {/* once users all the way at the bottom, click this arrow to scroll back up */}
            <a href="#" className="absolute bottom-0 right-0 p-5">
                <FontAwesomeIcon icon={["fas", "house"]} className="text-xl mx-2" />
            </a>
        </footer>
    )
}