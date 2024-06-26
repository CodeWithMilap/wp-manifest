import BlogCard from '@/components/BlogCard';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import React from 'react';

const BlogPage = () => {
  return (
    <main className='grow'>
      <PageHeader title='Blog' ><p>Essays, learning, and other miscellaneous goodies.
      </p></PageHeader>

      <section className='py-5 md:py-10'>
        <Container>
          <div className='grid gap-8 md:grid-cols-3'>
            <BlogCard
              imageUrl='https://placehold.co/350x250/png'
              category='Interface Design'
              date='8 June, 2020'
              title='UX traffic light colours'
              description='UI has to make a huge visual difference between warning, an alert and a success.'
            />
            <BlogCard
              imageUrl='https://placehold.co/350x250/png'
              category='Interface Design'
              date='8 June, 2020'
              title='UX traffic light colours'
              description='UI has to make a huge visual difference between warning, an alert and a success.'
            />
            <BlogCard
              imageUrl='https://placehold.co/350x250/png'
              category='Interface Design'
              date='8 June, 2020'
              title='UX traffic light colours'
              description='UI has to make a huge visual difference between warning, an alert and a success.'
            />
            <BlogCard
              imageUrl='https://placehold.co/350x250/png'
              category='Interface Design'
              date='8 June, 2020'
              title='UX traffic light colours'
              description='UI has to make a huge visual difference between warning, an alert and a success.'
            />
            <BlogCard
              imageUrl='https://placehold.co/350x250/png'
              category='Interface Design'
              date='8 June, 2020'
              title='UX traffic light colours'
              description='UI has to make a huge visual difference between warning, an alert and a success.'
            />
            <BlogCard
              imageUrl='https://placehold.co/350x250/png'
              category='Interface Design'
              date='8 June, 2020'
              title='UX traffic light colours'
              description='UI has to make a huge visual difference between warning, an alert and a success.'
            />
            <BlogCard
              imageUrl='https://placehold.co/350x250/png'
              category='Interface Design'
              date='8 June, 2020'
              title='UX traffic light colours'
              description='UI has to make a huge visual difference between warning, an alert and a success.'
            />
            <BlogCard
              imageUrl='https://placehold.co/350x250/png'
              category='Interface Design'
              date='8 June, 2020'
              title='UX traffic light colours'
              description='UI has to make a huge visual difference between warning, an alert and a success.'
            />
            <BlogCard
              imageUrl='https://placehold.co/350x250/png'
              category='Interface Design'
              date='8 June, 2020'
              title='UX traffic light colours'
              description='UI has to make a huge visual difference between warning, an alert and a success.'
            />
            <BlogCard
              imageUrl='https://placehold.co/350x250/png'
              category='Interface Design'
              date='8 June, 2020'
              title='UX traffic light colours'
              description='UI has to make a huge visual difference between warning, an alert and a success.'
            />
            <BlogCard
              imageUrl='https://placehold.co/350x250/png'
              category='Interface Design'
              date='8 June, 2020'
              title='UX traffic light colours'
              description='UI has to make a huge visual difference between warning, an alert and a success.'
            />
            <BlogCard
              imageUrl='https://placehold.co/350x250/png'
              category='Interface Design'
              date='8 June, 2020'
              title='UX traffic light colours'
              description='UI has to make a huge visual difference between warning, an alert and a success.'
            />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default BlogPage;
