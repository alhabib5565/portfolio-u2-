import React from 'react';

const SectionTitle = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <h2 className='text-3xl md:text-4xl font-bold'>About<span className='text-cyan-600'> Me</span></h2>
            <p className='text-lg text-gray-400'>My introduction</p>
        </div>
    );
};

export default SectionTitle;