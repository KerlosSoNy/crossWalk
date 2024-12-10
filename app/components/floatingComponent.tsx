'use client'

import { motion } from 'framer-motion';
import React from 'react';

const FloatingComponent = ({ children }: { children: React.ReactNode }) => {
    const floatAnimation = {
        y: [10, -10, 10], // Moves the component up and down
        // x: [10, -10, 10], // Moves the component left and right
        transition: {
            duration: 3, // Duration for one complete animation cycle
            ease: 'easeInOut',
            repeat: Infinity, // Repeat the animation infinitely
        },
    };

    return (
        <motion.div
            className='flex-1'
            animate={floatAnimation}
        >
            {children}
        </motion.div>
    );
};

export default FloatingComponent;
