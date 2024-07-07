import React, { ReactNode } from 'react';
import Container from './Container';
import Title from './Title';

interface PageHeaderProps {
  blok:any
}

const PageHeader: React.FC<PageHeaderProps> = ({blok}) => {

  return (
    <section className='py-5 md:py-10'>
      <Container>
        <div className='grid md:grid-cols-12 gap-2'>
          <div
            className={` col-span-full flex flex-col gap-6 `}
          >
            <Title
              className='text-3xl md:text-5xl md:leading-tight font-semibold'
              subtitle={blok?.description}
            >
              {blok?.title}
            </Title>
          </div>
          {/* {blok?.description && (
            <div className='flex flex-col gap-6 md:text-lg  col-span-full'>
              {blok?.description}
            </div>
          )} */}
        </div>
      </Container>
    </section>
  );
};

export default PageHeader;
