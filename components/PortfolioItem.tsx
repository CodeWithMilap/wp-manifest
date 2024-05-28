import React from 'react';
import Container from './Container';
import Title from './Title';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioItemProps {
  title: string;
  description: string;
  year: string;
  imageUrl: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  description,
  year,
  imageUrl,
}) => {
  return (
    <section className='py-5 md:py-10'>
        <div className='grid md:grid-cols-12 gap-10'>
          <div className='col-span-full md:order-2 md:col-span-8'>
            <Link href={'works/1'} className='group relative block w-full'>
              <Image
                src={imageUrl}
                alt={title}
                className='w-full revealing-image'
                height={1024}
                width={760}
              />
            </Link>
          </div>
          <div className='col-span-full flex flex-col gap-6 md:col-span-4'>
            <div className='flex flex-col gap-3'>
              <Title className='md:text-2xl text-xl'>{title}</Title>
              <span className='block h-[1px] w-[80px] bg-Grey-300'></span>
            </div>
            <div className='flex flex-col gap-2 text-Grey-700'>
              <p className='md:text-lg text-black'>{description}</p>
              <p className=''>{year}</p>
            </div>
            <Button label='View More'/>
          </div>
        </div>
    </section>
  );
};

export default PortfolioItem;
