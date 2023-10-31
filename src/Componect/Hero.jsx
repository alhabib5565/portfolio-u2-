import React, { useEffect, useRef } from 'react';
import hero from '../assets/portfolio hero image.jpg'
import { FaArrowRight } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi'
import { motion, useInView } from 'framer-motion'
import TextAnimation from '../AnimationComponets/TextAnimation';
import ImageOrCardAnmtn from '../AnimationComponets/ImageOrCardAnmtn';
import { Link } from 'react-scroll';
const Hero = () => {
    const ref = useRef(null)
    const inView = useInView(ref)

    const buttonEffect = {
        whileHover: {
            scale: 1.1,
            transition: { duration: .2 },
        },
        whileTap: { scale: .9, rotate: "-20deg" }
    }

    return (
        <section name='home' className=' md:pt-10 px-4 max-w-6xl h-full w-full mx-auto overflow-hiden'>
            <div className='py-16 flex gap-6 md:flex-row flex-col-reverse items-center md:justify-between'>
                <div className="md:text-left flex-1 text-center w-full">
                    <TextAnimation direction={'-100%'} delay={'.8'}>
                        <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                            <span className="text-cyan-600 md:text-6xl text-5xl">
                                Hello!
                                <br />
                            </span>
                            My Name is <span>Al-Habib</span>
                        </h1>
                    </TextAnimation>
                    <TextAnimation direction={'-100%'} delay={'1'}>
                        <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-500">
                            Fullstack Developer
                        </h4>
                    </TextAnimation>
                    <TextAnimation direction={'-100%'} delay={'1.2'}>
                        <div className='flex items-center justify-center md:justify-start mt-6 gap-6'>
                            <Link to='projects' smooth duration={500}>
                                <motion.button
                                    {...buttonEffect}
                                    className='text-white cursor-pointer flex items-center gap-3 uppercase font-medium bg-gradient-to-r from-cyan-400 to-sky-700 py-2 px-4 rounded-lg hover:scale-x-105 duration-300'>projects <span><FaArrowRight size={20} /></span>
                                </motion.button>
                            </Link>

                            <motion.a
                                {...buttonEffect}
                                download={true}
                                href='/public/resume.pdf'
                                className='text-white cursor-pointer flex items-center gap-3 uppercase font-medium bg-gradient-to-r from-cyan-400 to-sky-700 py-2 px-4 rounded-lg hover:scale-x-105 duration-300'>resume <span><FiDownload size={20} /></span>
                            </motion.a>
                        </div>
                    </TextAnimation>


                </div>

                <div className="w-full md:w-2/5">
                    <ImageOrCardAnmtn direction={{ x: "-100%" }}>
                        <img src={hero} alt="" className='rounded-full' />
                    </ImageOrCardAnmtn>
                </div>
            </div>
        </section>
    );
};

export default Hero;