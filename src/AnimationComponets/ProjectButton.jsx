import React from 'react';

const ProjectButton = ({href, ButtonText}) => {
    return (
        <a
            href={href}
            target="_blank"
            className="duration-700 rounded-full bg-gray-800 px-2.5 py-1 text- capitalize text-cyan-600 shadow shadow-black/60"
        >
            {ButtonText}
        </a>
    );
};

export default ProjectButton;