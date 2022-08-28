import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import SLideInInterface from "../../Interfaces/SlideInInterface";
import AnimationInterface from "../../Interfaces/AnimationInterface";

const SlideIn = (props: SLideInInterface) => {
    const { children, duration } = props;
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
