import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import bootrap from '../assets/bootsrap.jpeg'
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import expressjs from "../assets/expressjs.png";
import node from "../assets/node.png"
import github from "../assets/github.png";
import firebase from "../assets/firebase.png";
import redux from '../assets/redux.svg'
import SectionTitle from "./SectionTitle";

const Skills = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 4,
            src: bootrap,
            title: "Bootrap",
            style: "shadow-blue-400",
        },
        {
            id: 5,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 6,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            id: 9,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
        },
        {
            id: 10,
            src: firebase,
            title: "Firebase",
            style: "shadow-yellow-400",
        },
        {
            id: 10,
            src: redux,
            title: "Redux",
            style: "shadow-purple-400",
        },
        {
            id: 8,
            src: expressjs,
            title: "Express Js",
            style: "shadow-yellow-400",
        },
        {
            id: 11,
            src: node,
            title: "Node Js",
            style: "shadow-green-400",
        },
    ];

    return (

        <div className="max-w-6xl mx-auto p-4 mt-8 md:mt-16 lg:mt-24 text-white">
            <SectionTitle description='These are the technologies I"ve worked with' sectionTitle='My' colorText='Skills' />

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center mt-14 sm:px-0">
                {techs.map(({ id, src, title, style }) =>
                    <div key={id} className="w-full h-[150px] [perspective: 1000px]">
                        <div className={`w-full h-full relative rounded-md shadow-md ${style}`} key={id}>
                            <div
                                className="absolute inset-0"
                            >
                                <img src={src} alt="" className="w-20 mx-auto" />
                                <p className="mt-4">{title}</p>
                            </div>
                            <div className="absolute inset-0">
                                <h1>helos</h1>
                                <p>kldjfjfsl</p>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default Skills;


{/* <div
    key={id}
    className={`shadow-md hover:scale-105 origin-center hover:-rotate-180 rotate-0  duration-500 py-2 rounded-lg ${style}`}
>
    <img src={src} alt="" className="w-20 mx-auto" />
    <p className="mt-4">{title}</p>
</div> */}