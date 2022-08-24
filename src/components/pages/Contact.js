import React from "react";

function Contact() {
    return (
        <section class="container-fluid flex justify-center pb-20" id="contact">
            <div class="text-white text-center">
                <h2 class="contact-header">How to Reach Me?</h2>
                <p class="tracking-wide pb-16">
                    Please click the button below for inquiries and job opportunities. 
                        My email is also open for QandA's and making connections!
                </p>
                <a class="email-link hover:animate-ping" href="mailto:vtjia51@gmail.com" rel="noopener noreferrer" target="_blank">Email me</a>
            </div>
        </section>
    )
}

export default Contact;