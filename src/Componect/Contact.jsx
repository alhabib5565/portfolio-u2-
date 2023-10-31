import React from "react";
import { FiMail } from 'react-icons/fi'
import { AiOutlineWhatsApp } from "react-icons/ai"
import { CiLocationOn } from "react-icons/ci"
import { motion } from "framer-motion"
import SectionTitle from "./SectionTitle";
import ImageOrCardAnmtn from "../AnimationComponets/ImageOrCardAnmtn";
const Contact = () => {
    const contact_info = [
        { logo: <FiMail />, text: "alhabib5565@gmail.com" },
        { logo: <CiLocationOn />, text: "Sherpur, Mymensingh", },
        { logo: <AiOutlineWhatsApp />, text: "+8801405468432" },
    ];
    const buttonEffect = {
        whileHover: {
            scale: 1.1,
            transition: { duration: .2 },
        },
        whileTap: { scale: .9, rotate: "-20deg" }
    }
    return (
        <section name="contact" className="py-10 px-3 text-white">

            <SectionTitle colorText={'Me'} sectionTitle={'Contact'} description={'Get in touch'} />
           <ImageOrCardAnmtn>
           <div
                className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
            >
                <form
                    action="https://getform.io/f/a077c3bd-1748-4ee0-8cc6-9acfb6badaa6"
                    method="POST"
                    className="flex flex-col flex-1 gap-5">
                    <input name="name" type="text" placeholder="Your Name" />
                    <input name="Email" type="Email" placeholder="Your Email Address" />
                    <textarea name="message" placeholder="Your Message" rows={10}></textarea>

                    <motion.button
                        {...buttonEffect}
                        className='text-white w-fit cursor-pointer flex items-center gap-3 uppercase font-medium bg-gradient-to-r from-cyan-400 to-sky-700 py-2 px-4 rounded-lg hover:scale-x-105 duration-300'>
                        send message
                    </motion.button>
                </form>
                <div className="flex flex-col  gap-7 ">
                    {contact_info.map((contact, i) => (
                        <div
                            key={i}
                            className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
                        >
                            <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-gradient-to-r from-cyan-400 to-sky-700  rounded-full">
                                {contact.logo}
                            </div>
                            <p className="md:text-base text-sm  break-words">
                                {contact.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
           </ImageOrCardAnmtn>
        </section>
    );
};

export default Contact;