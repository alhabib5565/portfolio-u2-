import React from 'react';
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import {motion} from 'framer-motion'
const Social = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/al-habib-439685285/",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/alhabib5565",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <FiMail size={30} />
                </>
            ),
            href: "alhabib5565@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/resume.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ];

    return (
        <div className='hidden lg:flex top-[45%] left-0 fixed '>
            <ul>
                {
                    links.map(({ id, child, href, style, download }) => <li key={id} 
                    className='flex justify-between items-center w-40 h-14 transition ease-in-out  translate-x-[-105px] hover:translate-x-0 duration-500'>
                        <motion.a 
                               whileHover={{
                                scale: 1.1,
                                transition: { duration: .2 },
                                zIndex: '100px'
                            }}
                            whileTap={{ scale: .9, rotate: "-10deg"}}
                        className={`px-4 text-lg font-semibold h-full border-b-2 w-full text-white box- flex justify-between items-center bg-gray-700 rounded-r-xl`}
                         href={href} download={download} target="_blank" rel="noreferrer">
                            {child}
                        </motion.a>
                    </li>)
                }

            </ul>
        </div>
    );
};

export default Social;