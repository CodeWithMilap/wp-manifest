import React from 'react'
import { motion, stagger } from "framer-motion";

const FadeInWhenVisible = ({children}:any) => {
    const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, }}
            variants={{
                visible: { opacity: 1, transition: staggerMenuItems },
                hidden: { opacity: 0, }
            }}
        >
            {children}
        </motion.div>
    )
}

export default FadeInWhenVisible