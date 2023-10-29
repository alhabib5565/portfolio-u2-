import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'
const ImageOrCardAnmtn = ({ children, direction }) => {
    const ref = useRef(null)
    const inView = useInView(ref)
    return (
        <motion.div
            ref={ref}
            // initial={{ opacity: .5, scale: .5, x: direction }}
            // animate={{ opacity: 1, scale: 1, x: 0 }}
            initial={{ opacity: 0.5, scale: 0.5, direction }}
            animate={inView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0.5, scale: 0.5,  direction }}
            transition={{
                type: "spring",
                damping: 4,
                stiffness: 10,
                restDelta: 0.001,
            }}>
            {children}
        </motion.div>
    );
};

export default ImageOrCardAnmtn;