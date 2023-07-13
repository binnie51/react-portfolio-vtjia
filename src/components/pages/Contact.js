import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
// icons
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();
  const [doneSent, setDoneSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          setDoneSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="my-16 mx-5">
      <div className="text-center">
        <h1 className="font-bold text-2xl contact-header justify-center uppercase mb-6">
          <span className="text-5xl">C</span>ontact Me
        </h1>
      </div>
      <div className="flex flex-wrap py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
          <p className="text-start  tracking-wide mb-6">
            I am looking to fullfill a full time web or software developer
            position. I am also interested in freelance opportunities -
            especially, where I get to help you boost your image and improve
            user experience while navigating your site. For any other inquiries
            such as commisioning me for design or illustratitive work(s), please
            don't hesitant to shoot me an email!
          </p>
          <div className="flex justify-center mt-10 text-4xl space-x-8">
            <div className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:text-amber-600">
              <a 
                href="https://github.com/binnie51" 
                target="_blank"
              >
                <FaGithubSquare />
              </a>
            </div>
            <div className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:text-amber-600">
              <a
                href="https://linkedin.com/in/vincent-tjia-5ab2751b8"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                focus:border-blue-600 focus:outline-none"
                id=""
                placeholder="Name"
                name="from_name"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                focus:border-blue-600 focus:outline-none"
                id=""
                placeholder="Email address"
                name="user_email"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                focus:border-blue-600 focus:outline-none"
                id="exampleInput8"
                placeholder="Subject"
                name="subject_from_user"
              />
            </div>
            <div className="form-group mb-6">
              <textarea
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlTextarea13"
                rows={5}
                placeholder="Message"
                name="message"
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2.5 bg-amber-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg
            focus:bg-amber-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150
              ease-in-out"
            >
              Send
            </button>
            {doneSent && "Thank You for your email!"}
          </form>
        </div>
      </div>
    </section>
  );
}
