import React, { useState } from "react";
import logo from "../assets/logo.png";
// import { Menu, XIcon } from "@heroicons/react/outline";
import './styles/Navbar.css';
import { Transition } from "@headlessui/react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // <header>
        //     <nav className="px-4 sm:px-8 py-2.5">
        //         <div className="container-fluid flex flex-wrap justify-between items-center mx-auto">
        //             {/* logo */}
        //             {/* <a href="https://github.com/binnie51" className="flex items-center">
        //                 <img src="./assets/Logo_Website_-2.png" className="mr-3 h-10" alt="V's logo"></img>
        //             </a> */}
        //             <div className="flex items-center">
        //                 <img src={logo} alt="logo" className="logo mr-3 h-10" />
        //             </div>
        //             {/* mobile responsive collapse btn that targets navbar menu */}
        //             <button type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" id="burger-btn">
        //                 <span className="sr-only">Click to drop-down menu</span>
        //                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        //                 <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        //             </button>  
        //             {/* navbar menu */}
        //             <div className="w-full md:block md:w-auto hidden" id="mobile-menu">
        //                 <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        //                     <li>
        //                         <a href="https://github.com/binnie51" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
        //                     </li>
        //                     <li>
        //                         <a href="#about" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Me</a>
        //                     </li>
        //                     <li>
        //                         <a href="#portfolio" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Portfolio</a>
        //                     </li>
        //                     <li>
        //                         <a href="#contact" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </header>

        // <div className="w-screen h-[80px] z-10 bg-gray-900 fixed drop-shadow-lg">
        //     <div className="px-2 flex justify-between items-center w-full mx-auto">
        //         {/* Logo_Website_ */}
        //         <div className="flex items-center">
        //         <img className="logo" src={logo} alt="logo V" />
        //             <ul className="hidden md:flex p-4 menu">
        //                 <li>Home</li>
        //                 <li>About</li>
        //                 <li>Portfolio</li>
        //                 <li>Contact</li>
        //             </ul>
        //         </div>
        //         {/* mobile responsive collapse btn that targets navbar menu */}
        //         <button type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" id="burger-btn">
        //             <span className="sr-only">Click to drop-down menu</span>
        //             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        //              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        //         </button>  
        //     </div>

        // </div>

        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img
                        className="logo h-8 w-8"
                        src={logo}
                        alt="Workflow"
                        />
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                        <a
                            href="#"
                            className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Dashboard
                        </a>

                        <a
                            href="#"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Team
                        </a>

                        <a
                            href="#"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Projects
                        </a>

                        <a
                            href="#"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Calendar
                        </a>

                        <a
                            href="#"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Reports
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        ) : (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                        )}
                    </button>
                    </div>
                </div>
                </div>

                <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                    <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                        href="/"
                        className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                        Home
                        </a>

                        <a
                        href="/about"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                        About
                        </a>

                        <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                        Projects
                        </a>

                        <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                        Contacts
                        </a>

                        {/* <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                        Reports
                        </a> */}
                    </div>
                    </div>
                )}
                </Transition>
            </nav>

            
        </div>
    )
} 

export default Navbar;