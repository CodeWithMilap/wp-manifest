// components/Card.tsx
import Image from 'next/image';
import Title from './Title';
import Link from 'next/link';

interface CardProps {
  imageUrl: string;
  category: string;
  date: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<CardProps> = ({
  imageUrl,
  category,
  date,
  title,
  description,
}) => {
  return (
    <div className='mb-10 flex flex-col border border-light dark:border-dark rounded-xl overflow-hidden'>
      <Link href={'#'} className='group relative block overflow-hidden'>
        <Image
          src={imageUrl}
          width={350}
          height={250}
          className='w-full scale-110 transition-all duration-300 group-hover:scale-100'
          alt={title} // Using title as alt
        />
      </Link>
      <div className='flex flex-col gap-4 leading-normal tracking-wide p-5'>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between text-sm'>
            <div>{category}</div>
            <div>{date}</div>
          </div>
          <Title className='text-2xl'>
            <Link href={'/blog/1'}>{title}</Link>
          </Title>
        </div>
        <p className=''>{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
