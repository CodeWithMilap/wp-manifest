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
              <div className='mb-4'>Technology, Interface Design</div>
              <div className='max-w-xl'>
                <Title className='text-3xl md:text-5xl md:leading-tight mb-8'>Using UX Design to Build a Sustainable Future</Title>
              </div>
              <div className='text-Grey-500 flex gap-5'><span>6 May, 2020</span><span>8 comments</span></div>
            </div>
            
            <Image
              src={'https://placehold.co/1120x470/png'}
              width={1120}
              height={470}
              className='w-full mb-10'
              alt={''}
            />
            <div className='prose lg:prose-xl'>
              <p>
                Transformation has to be driven by everybody, not just by climate groups, and we have a responsibility to use our influence to drive this. Overwhelming evidence points to the fact that we have about a decade to combat climate change caused by human activity before irreversible damage is caused. It is the biggest crisis of our generation.
              </p>
              <h3>What Can UX Designers Do?</h3>
              <p>
                Firstly, on a broader scale, influence is held by people who work in tech, economically, socially and politically. People follow and listen to what happens in the world of tech. We need to take advantage of this to highlight important issues and create awareness around the environmental impact of tech.
              </p>
              <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
                <p>{`UX designers are in a unique position to create tools with sustainability at their heart by streamlining user workflows, minimizing information overload, and removing potential distractions that keep users from accomplishing tasks they set out to do.`}</p>
                <p className='text-Grey-500'>Designing For Sustainability, Tim Frick, 2014</p>
              </blockquote>

              <p>Flowbite is an open-source library of UI components built with the utility-first classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals, datepickers.</p>
              <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can think things through before committing to an actual design project.</p>
              <p>But then I found a <a href="#">component library based on Tailwind CSS called Flowbite</a>. It comes with the most commonly used UI components, such as buttons, navigation bars, cards, form elements, and more which are conveniently built with the utility classes from Tailwind CSS.</p>

              <h2>When does design come in handy?</h2>
              <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping will come in handy:</p>
              <ol>
                <li><strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live;</li>
                <li><strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying properly? Pass your prototype to your data protection team and they can test it for real;</li>
                <li><strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by providing your client with a hands-on experience;</li>
                <li><strong>Communicating your vision</strong>. By using an interactive medium to preview and test design elements, designers and developers can understand each other — and the project — better.</li>
              </ol>

            </div>
          </article>

        </Container>
      </section>
    </main>
  );
};

export default BlogDetail;
