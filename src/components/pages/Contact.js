import React from "react";

import { FaFacebookSquare, FaLinkedin, FaMailBulk } from 'react-icons/fa';

function Contact() {
    return (
        <section className="container-fluid pb-40" id="contact">
            <div className=" grid grid-cols-1 text-white text-center">
                <h2 className="contact-header font-bold">How to Reach Me?</h2>
                <p className="">
                    Please click the button below for inquiries and job opportunities. 
                        My email is also open for QandA's and making connections!
                </p>
               
            </div>
            <div className="">
                <ul className="flex justify-center">
                    <li className="list-item py-2 hover:animate-pulse">
                        <FaFacebookSquare />
                    </li>
                    <li className="list-item py-2 hover:animate-pulse">
                        <FaLinkedin />
                    </li>
                    <li className="list-item py-2 hover:animate-pulse">
                        <FaMailBulk />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Contact;