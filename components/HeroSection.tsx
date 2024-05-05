"use client"
import React from 'react';
import Container from './Container';
import SocialLinks from './SocialLinks';
import { motion } from "framer-motion";
import FadeInWhenVisible from './FadeInWhenVisible';

export const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.5, ease: "easeInOut", duration: 0.5 } }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <section id='home' className=''>
        <Container>
          <div className='grid h-full grid-cols-12 items-center gap-8 py-20 text-black'>
            <div className='col-span-12 grid content-between  lg:col-span-12'>
              <h2 className='text-xl font-medium md:text-2xl mb-3'>Hello, my name is Milap Dave,</h2>
              <h2 className='text-4xl font-bold md:text-8xl mb-4'>I make websites.</h2>
              <p className='md:my-4 my-2 md:text-3xl '>
                A front end developer based in India. I specialize in creating
                stunning, user-friendly websites using the latest technologies.
              </p>
              <SocialLinks />
            </div>
          </div>
        </Container>
      </section>
      {/* <ImageSlider /> */}
    </>
  );
};
