import React from 'react';
import hero from '../assets/portfolio hero image.jpg'
import { FaArrowRight } from 'react-icons/fa';
import {FiDownload} from 'react-icons/fi'
const Hero = () => {
    return (
        <section className='min-h-screen flex py-16 px-4 md:flex-row flex-col items-center'>
            <div className="flex-1 flex items-center justify-center h-full mt-10">
                <img src={hero} alt="" className="md:h-3/5 h-full object-cover rounded-full" />
            </div>
            <div className="flex-1 mt-10 md:mt-0">
                <div className="md:text-left text-center">
                    <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                        <span className="text-cyan-600 md:text-6xl text-5xl">
                            Hello!
                            <br />
                        </span>
                        My Name is <span>Al-Habib</span>
                    </h1>
                    <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-500">
                        Fullstack Developer
                    </h4>
                    <div className='flex items-center gap-6 mt-8'>
                        <button className='text-white cursor-pointer flex items-center gap-3 uppercase font-medium bg-gradient-to-r from-cyan-400 to-sky-700 py-2 px-4 rounded-lg hover:scale-x-105 duration-300'>resume <span><FaArrowRight size={20}/></span></button>

                        <a  className='text-white cursor-pointer flex items-center gap-3 uppercase font-medium bg-gradient-to-r from-cyan-400 to-sky-700 py-2 px-4 rounded-lg hover:scale-x-105 duration-300'>resume <span><FiDownload size={20}/></span></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;