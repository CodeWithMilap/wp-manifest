import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import React from 'react';

const AboutPage = () => {
  return (
    <main className='grow'>
      <PageHeader
        title='About'
      >
        <p className='text-2xl'>{`Building Seamless Experiences through Innovative Front End Solutions`}</p>
      </PageHeader>
      <section className='py-5 md:py-10'>
        <Container>
          <div className='prose max-w-none lg:prose-lg'>
            <p>{`Hi there! My name is Milap Dave, and I'm a front end developer with a passion for creativity. In addition to coding, I love exploring my interests in photography, and videography, which all contribute to my unique perspective and approach to building for the web.`}</p>
            <p>{`Building for the web is a fascinating and rewarding experience. From a single HTML file to a large React js application, I enjoy the process of creating something from scratch and watching it come to life.`}</p>
            <p>{`As a developer, I bring my passion and creativity to every project. I believe in building intuitive, user-friendly websites that offer a seamless experience for visitors. Whether you're looking to build a simple website or a complex web application, I'm here to help you bring your vision to life. Let's create something incredible together.`}</p>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default AboutPage;
