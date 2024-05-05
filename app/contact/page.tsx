import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import Container from '@/components/Container';
import FollowUs from '@/components/FollowUs';
import PageHeader from '@/components/PageHeader';
import React from 'react';

const ContactPage = () => {
  return (
    <main className='grow'>
      <PageHeader title=' Contact Us'>
        <p>
          If you need our help with your user account, have questions about how
          to use the platform or are experiencing technical difficulties, please
          do not hesitate to contact us.
        </p>
      </PageHeader>

      <section className='py-5 md:py-10'>
        <Container>
          <div className='grid md:grid-cols-12  gap-10'>
            <div className='md:col-span-3 col-span-full flex flex-col gap-6'>
              <ContactInfo />
              <FollowUs />
            </div>
            <div className='md:col-span-6 col-span-full md:col-start-7 flex flex-col gap-6'>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ContactPage;
