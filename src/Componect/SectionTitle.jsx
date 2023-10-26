import React from 'react';

const SectionTitle = ({description, colorText, sectionTitle}) => {
    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <h2 className='text-3xl md:text-4xl font-bold'>{sectionTitle}
                <span className='text-cyan-600'> {colorText}</span></h2>
            <p className='text-lg text-gray-400'>{description}</p>
        </div>
    );
};

export default SectionTitle;