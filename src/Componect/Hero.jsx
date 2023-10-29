import React, { useEffect, useRef } from 'react';
import hero from '../assets/portfolio hero image.jpg'
import { FaArrowRight } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi'
import { motion, useInView } from 'framer-motion'
import TextAnimation from '../AnimationComponets/TextAnimation';
const Hero = () => {
    const ref = useRef(null)
    const inView = useInView(ref)
    useEffect(() => {
        console.log(inView, ref)
    }, [ref, inView])

    const buttonEffect = {
        whileHover: {
            scale: 1.1,
            transition: { duration: .2 },
        },
        whileTap: { scale: .9, rotate: "-20deg" }
    }

    return (
        <section ref={ref} className='min-h-screen flex py-16 px-4 md:flex-row flex-col items-center overflow-hidden'>
            <div className="flex-1 flex items-center justify-center h-full mt-10">
                <motion.img
                    initial={{ opacity: .5, scale: .5, x: "-100%" }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        damping: 4,
                        stiffness: 10,
                        restDelta: 0.001,
                    }}
                    src={hero} alt="" className="md:h-3/5 h-full object-cover rounded-full" />
            </div>
            <div className="flex-1 mt-10 md:mt-0">
                <div className="md:text-left text-center">
                    {/* <motion.h1
                        initial={{ opacity: .5, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                        <span className="text-cyan-600 md:text-6xl text-5xl">
                            Hello!
                            <br />
                        </span>
                        My Name is <span>Al-Habib</span>
                    </motion.h1> */}
                    {/* <motion.h4
                        initial={{ opacity: .5, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-500">
                        Fullstack Developer
                    </motion.h4> */}
                            {/* <motion.div
                                initial={{ opacity: .5, x: "100%" }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2 }}
                                className='flex items-center gap-6 mt-8'>
                                <motion.button
                                    {...buttonEffect}
                                    className='text-white cursor-pointer flex items-center gap-3 uppercase font-medium bg-gradient-to-r from-cyan-400 to-sky-700 py-2 px-4 rounded-lg hover:scale-x-105 duration-300'>projects <span><FaArrowRight size={20} /></span>
                                </motion.button>
        
                                <motion.a
                                    {...buttonEffect}
                                    className='text-white cursor-pointer flex items-center gap-3 uppercase font-medium bg-gradient-to-r from-cyan-400 to-sky-700 py-2 px-4 rounded-lg hover:scale-x-105 duration-300'>resume <span><FiDownload size={20} /></span>
                                </motion.a>
                            </motion.div> */}
                    <TextAnimation delay={'.8'}>
                        <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                            <span className="text-cyan-600 md:text-6xl text-5xl">
                                Hello!
                                <br />
                            </span>
                            My Name is <span>Al-Habib</span>
                        </h1>
                    </TextAnimation>
                    <TextAnimation delay={'1'}>
                        <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-500">
                            Fullstack Developer
                        </h4>
                    </TextAnimation>
                    <TextAnimation delay={'1.2'}>
                        <div className='flex items-center gap-6 mt-8'>
                            <motion.button
                                {...buttonEffect}
                                className='text-white cursor-pointer flex items-center gap-3 uppercase font-medium bg-gradient-to-r from-cyan-400 to-sky-700 py-2 px-4 rounded-lg hover:scale-x-105 duration-300'>projects <span><FaArrowRight size={20} /></span>
                            </motion.button>

                            <motion.a
                                {...buttonEffect}
                                className='text-white cursor-pointer flex items-center gap-3 uppercase font-medium bg-gradient-to-r from-cyan-400 to-sky-700 py-2 px-4 rounded-lg hover:scale-x-105 duration-300'>resume <span><FiDownload size={20} /></span>
                            </motion.a>
                        </div>
                    </TextAnimation>


                </div>
            </div>
        </section>
    );
};

export default Hero;