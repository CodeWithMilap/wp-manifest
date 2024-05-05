import React, { ReactNode } from 'react';
import Container from './Container';
import Title from './Title';

interface PageHeaderProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  children,
}) => {
  const hasChildren = !!children; // Check if children are available

  return (
    <section className='py-5 md:py-10'>
      <Container>
        <div className='grid md:grid-cols-12 md:gap-4 gap-2'>
          <div
            className={` col-span-full flex flex-col gap-6 `}
          >
            <Title
              className='text-3xl md:text-5xl md:leading-tight font-semibold'
              subtitle={subtitle}
            >
              {title}
            </Title>
          </div>
          {hasChildren && (
            <div className='flex flex-col gap-6 text-xl  col-span-full'>
              {children}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default PageHeader;
