import React from 'react';
import Container from './Container';
import Title from './Title';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioItemProps {
  blok: any
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ blok }) => {
  const item = blok.content
  return (
    <section className='py-5 md:py-10'>
      <div className='grid md:grid-cols-12 gap-10 border border-light rounded-md overflow-hidden bg-white dark:border-dark dark:bg-background2'>
        <div className='col-span-full md:order-2 md:col-span-8'>
          <Link href={`/projects/${blok.slug}`} className='group relative block w-full'>
            <Image
              src={item?.image?.filename}
              alt={''}
              className='w-full'
              height={1024}
              width={760}
            />
          </Link>
        </div>
        <div className='col-span-full flex flex-col gap-6 md:col-span-4 p-8'>
          <div className='flex flex-col gap-3'>
            <Title className='md:text-2xl text-xl'>{item?.title}</Title>
            <span className='block h-[1px] w-[80px] bg-Grey-300'></span>
          </div>
          <div className='flex flex-col gap-2 '>
            <p className='md:text-lg '>{item?.teaser}</p>
            {/* <p className=''>{year}</p> */}
          </div>
          <Button label='View More' />
        </div>
      </div>
    </section>
  );
};

export default PortfolioItem;
