import React from "react";

export default function Footer() {
    return (
        <footer class="container-fluid relative py-10">
            <p class="text-center">&copy; 2022 Vincent Tjia. All rights rerserved.</p>

            {/* once users all the way at the bottom, click this arrow to scroll back up */}
            <a href="#" className="absolute bottom-0 right-0 p-5">
                <i class="fa-solid fa-house text-xl mx-2"></i>
            </a>
        </footer>
    )
}