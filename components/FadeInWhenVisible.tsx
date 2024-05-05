import React, { ReactNode } from 'react';
import { motion, stagger, Variants } from "framer-motion";

interface FadeInWhenVisibleProps {
    children: ReactNode;
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children }) => {
    const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

    const animationVariants: Variants = {
        visible: { opacity: 1, transition: staggerMenuItems },
        hidden: { opacity: 0 }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={animationVariants}
        >
            {children}
        </motion.div>
    );
};

export default FadeInWhenVisible;
