import React from 'react';
import SectionTitle from './SectionTitle';
import aboutImage from '../assets/portfolio hero image.jpg'
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion'
import ImageOrCardAnmtn from '../AnimationComponets/ImageOrCardAnmtn';
import TextAnimation from '../AnimationComponets/TextAnimation';
import { Link } from 'react-scroll';
const AboutMe = () => {
    const buttonEffect = {
        whileHover: {
            scale: 1.1,
            transition: { duration: .2 },
        },
        whileTap: { scale: .9, rotate: "20deg" }
    }
    return (
        <div name='about' className='pt-10 px-4 max-w-6xl h-full w-full mx-auto overflow-hiden'>
            <SectionTitle description='My introduction' sectionTitle='About' colorText='Me' />
            <div className='flex flex-col-reverse items-center gap-5 md:gap-8 md:flex-row mt-14'>
                <div className='flex-1'>
                  <TextAnimation delay='.7' direction={'-100%'}>
                  <p className='text-justify text-gray-400 text-lg leading-8 mt-8 md:mt-0'>
                        I'm a front-end web developer with a passion for crafting immersive and responsive user
                        experiences. My goal is to join a dynamic team, learn, grow, and contribute to building user-centric web applications.I stay up-to-date with the latest web technologies through continuous learning and practice.
                    </p>
                  </TextAnimation>
                <TextAnimation delay='.9' direction={'-100%'}>
                      <Link to='contact' smooth duration={500}>
                      <motion.button
                            {...buttonEffect}
                            className='text-white mt-4 cursor-pointer flex items-center gap-3 uppercase font-medium bg-gradient-to-r from-cyan-400 to-sky-700 py-2 px-3 sm:px-4 rounded-lg hover:scale-x-105 duration-300'>Contact Me <span><FaArrowRight size={20} /></span></motion.button>
                      </Link>
                </TextAnimation>
                </div>
                <ImageOrCardAnmtn direction={'-100%'}>
                    <div className='flex-1 flex justify-center items-center h-full relative aboutImg'>
                        <img className='w-4/5 md:w-3/5 rounded-lg object-cover' src={aboutImage} alt="" />
                    </div>
                </ImageOrCardAnmtn>
            </div>
        </div>
    );
};

export default AboutMe;