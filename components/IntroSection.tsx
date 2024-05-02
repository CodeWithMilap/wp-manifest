import React from 'react';
import Container from './Container';
import Title from './Title';

export const IntroSection = () => {
  return (
    <section className='py-5 md:py-10'>
      <Container>
        <div className='grid gap-10 lg:grid-cols-12'>
          <div className='col-span-full md:col-span-5'>
            <Title>
              {' '}
              Full-time UI/UX designer <br />
              Head of Design at VeronaLabs.com
            </Title>
          </div>
          <div className='col-span-full grid  gap-5 text-xl leading-normal tracking-wide md:col-span-5 lg:col-start-8'>
            <p>
              We work with clients around the world from our headquarters in
              Charleston, South Carolina.
            </p>
            <p>
              We focus on naming, branding, brand narratives, website design and
              development, and brand experiences.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
