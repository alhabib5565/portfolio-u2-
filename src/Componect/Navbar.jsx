import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
const Navbar = () => {
    const [sticky, setSticky] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [hidden, setHidden] = useState(false)

    const menuLinks = [
        { name: "HOME", link: "#home" },
        { name: "ABOUT", link: "#about" },
        { name: "SKILLS", link: "#skills" },
        { name: "PROJECTS", link: "#projects" },
        { name: "CONTACT", link: "#contact" },
    ];

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        }, [])
    })
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change",(latestValue) => {
         const previous = scrollY.getPrevious()
         if (latestValue > previous && previous > 120) {
            setHidden(true)
         }else{
            setHidden(false)
         }
    })  
    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: '-100%' }
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: .35, ease: 'easeInOut' }}
            className={`fixed z-20 top-0 left-0 right-0 ${sticky ? 'bg-white/60' : ''}`}>
            <div className='flex justify-between items-center'>
                <h4 className="text-4xl uppercase font-bold mx-6">
                    Al<span className="text-cyan-600">hab</span>ib
                </h4>
                <div
                    className={`text-gray-900 hidden md:block rounded-bl-full px-6 py-2 ${sticky ? 'md:bg-white/0 bg-white ' : 'bg-white'}`}                >
                    <ul className="flex items-center gap-1 py-2 text-lg">
                        {menuLinks?.map((menu, i) => (
                            <li key={i} className={`px-6 hover:text-cyan-600 duration-200 font-medium`}>
                                <a href={menu?.link}>{menu?.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>


                <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer py-2 px-6 text-gray-300 md:hidden">
                    {
                        menuOpen ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>
                    }
                </div>

                <div className={`absolute duration-500 md:hidden w-full top-[46px] ${menuOpen ? 'right-0 ' : '-right-[100%]'}`}>

                    <ul className={` box-border bg-cyan-950  w-full rounded-b-xl py-6 duration-1000
                   `}>
                        {
                            menuLinks.map((navItem, index) => <li onClick={() => setMenuOpen(false)} className=' text-gray-300 cursor-pointer font-medium uppercase px-6 py-3 hover:bg-cyan-800  duration-300' key={index}>
                                <a href={navItem.link}>{navItem.name}</a>
                            </li>)
                        }
                    </ul>

                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;