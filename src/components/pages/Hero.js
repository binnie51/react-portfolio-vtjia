import '../styles/Hero.css';
import image from '../../assets/illust_top.png';
import resume from '../../assets/Vincent Tjia Resume.pdf';
import { useCallback, useEffect, useState } from 'react';
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

function Hero() {
    const greetingsArray = [
        "Hello",
        "Halo",
        "こんにちは",
        "欢迎"
    ];

    const titleArray = [
        ""
    ]

    const [greet, setGreet] = useState("Hello");
    const [title, setTitle] = useState("Web Developer");
    
    const shuffleGreet = useCallback(() => {
        const i = Math.floor(Math.random() * greetingsArray.length);
        setGreet(greetingsArray[i]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffleGreet, 4000);
        return () => clearInterval(intervalID);
    }, [shuffleGreet])

    return (
        <div>
            <header className="container-fluid">
                <div className="relative bg-cover bg-no-repeat bg-center w-full md:max-xl:flex" 
                    style={{ 
                        backgroundImage: `url(${image})`,
                         }}>
                {/* <div className="absolute inset-0 bg-white/50 sm:bg-transparent sm:from-white/95 sm:to-white/100 ltr:sm:bg-gradient-to-r"
                ></div> */}

                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className='max-w-xl text-start ltr:sm:text-left rtl:sm:text-right rounded px-6 py-12 md:py-16 md:px-12 hero-text'
                    style={{ background: 'hsla(0, 0%, 100%, 0.5)', backdropFilter: 'blur(2px)'}}>
                        <h3 className='font-medium animate-[slide_4s_ease-in-out_infinite]'>{greet}</h3>
                        <h1 className='font-bold'>Vincent Tjia</h1>
                        <div className="bg-amber-600" style={{height : 2.5, width : '30%' }}></div>
                        <h2><strong className='text-'>Web Developer</strong>, Designer, Illustrator</h2>
                        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            An amateur developer who provides services for digital programming and design content for business and organization needs.
                            Also a part-time illustrator and graphic designer on the side. 
                        </p>
                        <div className="font-medium mt-8 flex flex-wrap gap-4 text-center">
                            <a className="myResumeBtn block w-full rounded px-12 py-3 bg-amber-600 hover:bg-gray-900 sm:w-auto duration-150 ease-in-out" 
                                href={resume}
                                target="_blank" 
                                rel="noreferrer">
                                    My Resume
                            </a>
                        </div>
                        <div className='flex justify-center mt-10 text-4xl space-x-8'>
                                <div>
                                    <FaGithubSquare />
                                </div>
                                <div>
                                    <FaInstagramSquare />
                                </div>
                                <div>
                                    <FaLinkedin />
                                </div>
                            </div>   
                            {/* <div className='flex flex-row justify-center'>
                                
                            </div> */}
                        
                        {/* <div className='justify-self-end self-end text-white bg-black'>
                            <p>&copy; Vincent Tjia</p>
                        </div> */}
                    </div>  

                </div>
                </div>

            </header>
        </div>
    )
}

export default Hero;