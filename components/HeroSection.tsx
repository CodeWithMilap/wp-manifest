import React from 'react';
import ImageSlider from './Slider';
import PageHeader from './PageHeader';
import Container from './Container';
import SocialLinks from './SocialLinks';

export const HeroSection = () => {
  return (
    <>
      <section id='home' className=''>
        <Container>
          <div className='grid h-full grid-cols-12 items-center gap-8 py-20'>
            <div className='col-span-12 grid content-between  lg:col-span-12'>
              <h2 className='text-4xl font-semibold md:text-xl mb-3 text-black'>Hello, my name is Milap Dave,</h2>
              <h2 className='text-4xl font-bold md:text-7xl mb-4 text-black'>I make websites.,</h2>
              <p className='my-6 md:text-4xl font-normal'>
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
