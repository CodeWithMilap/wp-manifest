import React from 'react';
import ImageSlider from './Slider';
import PageHeader from './PageHeader';
import Container from './Container';

export const HeroSection = () => {
  return (
    <>
      <section id='home' className='flex items-center '>
        <Container>
          <div className='grid h-full grid-cols-12 items-center gap-8 py-20'>
            <div className='col-span-12 grid content-between text-black lg:col-span-7'>
              <h2 className='text-4xl font-bold md:text-6xl'>Hi,</h2>
              <h2 className='text-4xl font-bold md:text-6xl md:leading-normal '>
                I’m Milap Dave
              </h2>
              <p className='my-4 md:text-xl '>
                A front end developer based in India. I specialize in creating
                stunning, user-friendly websites using the latest technologies.
              </p>
            </div>
          </div>
        </Container>
      </section>
      {/* <ImageSlider /> */}
    </>
  );
};
