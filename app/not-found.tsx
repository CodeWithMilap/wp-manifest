import Container from '@/components/Container';
import Link from 'next/link';
import React from 'react';

const Notfound = () => {
  return (
    <section className='flex grow items-center justify-center'>
      <Container>
        {' '}
        <div className='flex w-full flex-col gap-4 text-center'>
          <h1 className='text-5xl font-medium text-Grey-300 lg:text-[140px]'>
            404
          </h1>
          <p className='max-w-md text-xl'>
            <span className='text-Grey-300'>Oops!</span> we are sorry, but the
            page you requested was not found.
          </p>
          <div className='py-5'>
            <Link
              href={'/'}
              className='inline-flex transform items-center justify-center bg-Grey-700 px-5 py-2 text-white duration-300 hover:bg-black'
            >
              Go Home
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Notfound;
