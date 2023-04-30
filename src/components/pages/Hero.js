import '../styles/Hero.css';
import image from '../../assets/illust_top.png';
import resume from '../../assets/Vincent Tjia Resume.pdf';
import { useCallback, useEffect, useState } from 'react';

function Hero() {
    const greetingsArray = [
        "Hello, my name is",
        "Halo, nama saya",
        "こんにちは！私の名前は",
        "欢迎！我的名字是"
    ];

    const [greet, setGreet] = useState("Hello, my name is");
    
    const shuffle = useCallback(() => {
        const i = Math.floor(Math.random() * greetingsArray.length);
        setGreet(greetingsArray[i]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 2000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    return (
        <div>
            <header className="container-fluid flex justify-center">
                <div className="bg-cover bg-no-repeat bg-center w-full md:max-xl:flex" 
                    style={{ 
                        backgroundImage: `url(${image})`,
                         }}>
                    <div className='h-screen grid grid-cols-2 justify-start hero-text bg-transparent'>
                        <div className='font-bold m-auto mt-12'>
                            <h2 className='transition-all ease-in-out'>{greet}</h2>
                            <h1>Vincent Tjia</h1>
                            <div className="bg-slate-800" style={{height : 2.5 }}></div>
                            <h2>Web Developer, Designer, Illustrator</h2>
                            <div className="font-medium mt-10">
                                <a className="myResumeBtn bg-amber-600 hover:bg-gray-900" 
                                    href={resume}
                                    target="_blank" 
                                    rel="noreferrer">
                                        My Resume
                                </a>
                            </div>
                            <div className='flex flex-row justify-center'>
                                
                            </div>
                        </div>
                        <div className='justify-self-end self-end text-white bg-black'>
                            <p>&copy; Vincent Tjia</p>
                        </div>
                        </div>  
                     
                    {/* <div className="hero-text my-16 ml-20 px-10">
                        <div>
                            <h2 className="font-semibold">Hello, I'm</h2>
                            <h1 className="font-black">
                                Vincent Tjia
                            </h1>
                            <div className="bg-slate-800" style={{height : 1.5 }}></div>
                            <h2 className="font-bold">
                                Web Developer, Designer, Illustrator
                            </h2>
                          
                            <div className="font-medium mt-10">
                                <a className="myResumeBtn bg-amber-600 hover:bg-gray-900 hover:" 
                                    href={resume}
                                    target="_blank" 
                                    rel="noreferrer">
                                        View my resume
                                </a>
                            </div>
                        </div>
                        
                    </div> */}

                </div>

            </header>
        </div>
    )
}

export default Hero;