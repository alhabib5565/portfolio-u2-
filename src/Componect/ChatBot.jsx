import React from 'react';
import {BsChatDots, BsFillChatDotsFill} from 'react-icons/bs'
const ChatBot = () => {
    return (
        <div>
            <div className='text-white bg-cyan-600 w-14 h-14 fixed bottom-5 right-5 cursor-pointer animate-bounce z-10 rounded-full flex justify-center items-center'>
                <BsFillChatDotsFill size={30}/>
            </div>
        </div>
    );
};

export default ChatBot;