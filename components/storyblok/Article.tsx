
import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import { StoryblokComponent } from '@storyblok/react';
import RichTextRenderer from './RichTextRenderer';

interface ArticleProps {
  blok: {
    image: {
      alt: string;
      filename: string;
    };
    date: string; // You can specify the date format or use a Date object
    title: string;
    content: any; // Adjust the type for content as per your data structure
  };
}

const Article: React.FC<ArticleProps> = ({ blok }) => {
  return (
    <section className='px-5 lg:px-24 py-5 md:py-10'>
      <div className='flex flex-col items-center justify-center'>
        <div className='relative mb-10 w-full '>
          <Image
            className='w-full rounded object-cover object-center md:h-[500px] mb-10'
            alt={blok.image.alt}
            src={blok.image.filename}
            width={1920}
            height={1080}
          />
          <div className='flex w-full flex-col items-center justify-center text-center'>
            {/* <div className='text-slate-200 mb-4'>
              {moment(blok.date).format('Do MMMM YYYY')}
            </div> */}
            <h1 className='text-3xl font-bold sm:text-5xl'>
              {blok.title}
            </h1>
          </div>
        </div>
        <div className=''>
          <div className='prose mb-8 text-justify leading-relaxed lg:prose-xl'>
            {<RichTextRenderer content={blok.content} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;