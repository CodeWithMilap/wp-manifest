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
          <div className='grid h-full grid-cols-12 items-center gap-8 py-20'>
            <div className='col-span-12 grid content-between  lg:col-span-12'>
              <FadeInWhenVisible>
                <h2 className='text-xl font-semibold md:text-2xl mb-3 text-black'>Hello, my name is Milap Dave,</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible>

                <h2 className='text-4xl font-bold md:text-8xl mb-4 text-black'>I make websites.</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <p className='md:my-6 my-3 md:text-4xl font-normal'>
                  A front end developer based in India. I specialize in creating
                  stunning, user-friendly websites using the latest technologies.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <SocialLinks />
              </FadeInWhenVisible>
            </div>
          </div>
        </Container>
      </section>
      {/* <ImageSlider /> */}
    </>
  );
};
