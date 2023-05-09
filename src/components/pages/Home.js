import '../styles/Home.css';
import image from '../../assets/illust_top.png';
import resume from '../../assets/Vincent Tjia Resume.pdf';
import { useCallback, useEffect, useState } from 'react';
import { FaGithubSquare, FaMailBulk, FaInstagramSquare } from 'react-icons/fa';

export default function Hero() {
    const greetingsArray = [
        "Welcome",
        "Selamat datang",
        "ようこそ",
        "欢迎"
    ];

    const titleArray = [
        ""
    ]

    const [greet, setGreet] = useState("Welcome");
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
                            An amateur developer who provides services for digital programming and design content catering toward business and organization needs.
                            Also, an illustrator and graphic designer on the side. 
                        </p>
                        <div className="font-medium mt-8 flex flex-wrap justify-around gap-4 text-center">
                            <a className="myResumeBtn block w-full rounded px-12 py-3 bg-amber-600 hover:bg-gray-900 sm:w-auto duration-150 ease-in-out" 
                                href={resume}
                                target="_blank" 
                                rel="noreferrer">
                                    My Resume
                            </a>
                            <a className="myResumeBtn block w-full rounded px-12 py-3 bg-amber-600 hover:bg-gray-900 sm:w-auto duration-150 ease-in-out" 
                                href='www.linkedin.com/in/
                                vincent-tjia-5ab2751b8'
                                target="_blank" 
                                rel="noreferrer">
                                    My LinkedIn
                            </a>
                        </div>
                        <div className='flex justify-center mt-10 text-4xl space-x-8'>
                            <div className='transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:text-amber-600'>
                                <a href='https://github.com/binnie51'
                                target="_blank" >
                                    <FaGithubSquare />
                               </a>
                            </div>
                            <div className='transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:text-amber-600'>
                            <a href=''
                            target="_blank" >
                                    <FaInstagramSquare />
                            </a>
                            </div>
                            <div className='transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:text-amber-600'>
                                <a href='mailto:vtjia51@gmail.com'
                                target="_blank" >
                                    <FaMailBulk />
                                </a>
                            </div>
                            </div>   
                        
                    </div>  

                </div>
                </div>

            </header>
        </div>
    )
}