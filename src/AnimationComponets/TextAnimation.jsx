import React from 'react';
import { motion } from "framer-motion"

const TextAnimation = ({ children, delay }) => {
    return (
        <motion.div
            initial={{ opacity: .5, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: delay }}
        >
            {children}
        </motion.div>
    );
};

export default TextAnimation;