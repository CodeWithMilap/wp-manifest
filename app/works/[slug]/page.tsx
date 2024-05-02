import BlogCard from '@/components/BlogCard';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import Title from '@/components/Title';
import Image from 'next/image';
import React from 'react';

const BlogDetail = () => {
  return (
    <main className='grow'>
      <section className='py-5 md:py-10'>
        <Container>
          <article className="">
            <div className='py-5 md:py-10 text-Grey-500'>
              <div className='max-w-xl'>
                <Title className='text-3xl md:text-5xl md:leading-tight mb-8'>AI Fashion Platform</Title>
              </div>
            </div>

            <Image
              src={'https://placehold.co/1120x470/png'}
              width={1120}
              height={470}
              className='w-full mb-10'
              alt={''}
            />

            <div className='grid grid-cols-12'>
              <div className='col-span-9'>
                <Title>Project Overview</Title>
                <div className='prose max-w-[600px] lg:prose-xl mt-6'>
                  <p>FashHanger is a bespoke sustainable high-fashion accessory company based out of Berlin, currently operated by Siesly and her sister Ashely. They needed help for a big rebrand and wanted to relaunch their website.</p>
                  <p>Their goals were simple, create a unique e-commerce store that bring a wonderful shopping experience at every stage of the buyers journey.</p>
                </div>
              </div>
              <div className='col-span-3 space-y-6'>
                <div className='text-2xl'>
                  <h6 className='text-black'>Year</h6>
                  <span className='text-lg'>2019</span>
                </div>
                <div className='text-2xl'>
                  <h6 className='text-black'>Platform</h6>
                  <span className='text-lg'>Shopify, Webflow</span>
                </div>
                <div className='text-2xl'>
                  <h6 className='text-black'>Role</h6>
                  <span className='text-lg'>Research, Design</span>
                </div>
                <div className='text-2xl'>
                  <h6 className='text-black'>Deliverables</h6>
                  <span className='text-lg'>www.fashhanger.com</span>
                </div>
              </div>
            </div>

          </article>

        </Container>
      </section>
    </main>
  );
};

export default BlogDetail;
