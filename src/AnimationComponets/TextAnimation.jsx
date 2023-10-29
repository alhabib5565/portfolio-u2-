import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion"

const TextAnimation = ({ children, delay, direction }) => {
    const ref = useRef(null)
    const inView = useInView(ref)
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: .5, x: direction }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: .5, x: direction }}
            transition={{ duration: delay }}
        >
            {children}
        </motion.div>
    );
};

export default TextAnimation;