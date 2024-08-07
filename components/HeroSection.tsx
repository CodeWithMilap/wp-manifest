"use client"
import React from 'react';
import Container from './Container';
import SocialLinks from './SocialLinks';
import Link from 'next/link';

interface HeroSectionProps {
  blok: {
    title: string;
    subtitle: string;
    description: any;
  };
}

export const HeroSection: React.FC<HeroSectionProps> = ({ blok }) => {
  return (
    <>
      <section id='home' className='h-[calc(100vh-85px)]  flex flex-col items-center justify-center'>
        {/* <Container> */}
          <div className='grid h-full md:grid-cols-12 grid-cols-none items-center gap-8 py-10 lg:py-20'>
            <div className='md:col-span-12 grid content-between  lg:col-span-12'>
              <h2 className='text-4xl font-bold md:text-8xl mb-3'>{blok?.title}</h2>
              <h2 className='text-4xl font-bold md:text-8xl mb-4'>{blok?.subtitle}</h2>
              <p className='md:my-4 my-2 md:text-2xl max-w-3xl'>
                {blok?.description}
              </p>
            </div>
            <SocialLinks className="" />
          </div>
        {/* </Container> */}
        <div className='hidden sm:flex items-end justify-end sm:fixed w-10 right-20 bottom-8 hover:text-black '><Link className='vertical-rl' href={'mailto:milapdave15@gmail.com'}>milapdave15@gmail.com</Link></div>
      </section>
    </>
  );
};
