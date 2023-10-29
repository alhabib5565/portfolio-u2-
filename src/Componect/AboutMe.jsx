import React from 'react';
import SectionTitle from './SectionTitle';
import aboutImage from '../assets/portfolio hero image.jpg'
import { FaArrowRight } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi'
import { motion } from 'framer-motion'
const AboutMe = () => {
    const buttonEffect = {
        whileHover: {
            scale: 1.1,
            transition: { duration: .2 },
        },
        whileTap: { scale: .9, rotate: "-20deg" }
    }
    return (
        <div className='my-10 px-4 max-w-6xl w-full mx-auto overflow-hidden'>
            <SectionTitle description='My introduction' sectionTitle='About' colorText='Me' />
            <div className='flex flex-col-reverse items-center gap-8 md:flex-row mt-14'>
                <div className='flex-1'>
                    <p className='text-justify text-gray-400 text-lg leading-8 mt-8 md:mt-0'>
                        I'm a front-end web developer with a passion for crafting immersive and responsive user
                        experiences. My goal is to join a dynamic team, learn, grow, and contribute to building user-centric web applications.I stay up-to-date with the latest web technologies through continuous learning and practice.
                    </p>
                    <div className='flex items-center gap-4 md:gap-6 mt-8'>
                        <motion.button
                            {...buttonEffect}
                            className='text-white cursor-pointer flex items-center gap-3 uppercase font-medium bg-gradient-to-r from-cyan-400 to-sky-700 py-2 px-3 sm:px-4 rounded-lg hover:scale-x-105 duration-300'>Contact Me <span><FaArrowRight size={20} /></span></motion.button>

                        <motion.a
                            {...buttonEffect}
                            className='text-white cursor-pointer flex items-center gap-3 uppercase font-medium bg-gradient-to-r from-cyan-400 to-sky-700 py-2 px-3 sm:px-4 rounded-lg hover:scale-x-105 duration-300'>resume <span><FiDownload size={20} /></span>
                        </motion.a>
                    </div>
                </div>
                <div className='flex-1 flex justify-center items-center relative aboutImg'>
                    <motion.img
                        initial={{ opacity: .5, scale: .5, x: 500 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1.3 }}
                        className='w-full md:w-3/5 rounded-lg object-cover' src={aboutImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;