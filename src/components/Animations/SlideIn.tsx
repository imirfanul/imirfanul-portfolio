import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ISLideIn {
    children: ReactNode;
    duration: Number;
}

const SlideIn: React.FC<ISLideIn> = ({ children, duration = 0.7 }) => {
    const animations = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 }
    };
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: duration }}
        >
            {children}
        </motion.div>
    );
};

export default SlideIn;
