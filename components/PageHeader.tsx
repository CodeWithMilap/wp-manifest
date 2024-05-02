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
        <div className='grid grid-cols-12 gap-10'>
          <div
            className={` ${hasChildren ? 'col-span-5' : 'col-span-7'} flex flex-col gap-6 `}
          >
            <Title
              className='text-3xl md:text-5xl md:leading-tight'
              subtitle={subtitle}
            >
              {title}
            </Title>
          </div>
          {hasChildren && (
            <div className='col-span-6 col-start-7 flex flex-col gap-6 text-xl'>
              {children}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default PageHeader;
