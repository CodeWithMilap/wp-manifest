import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Container from "@/components/Container";
import FollowUs from "@/components/FollowUs";
import Title from "@/components/Title";
import React from "react";

const ContactPage = () => {
  return (
    <main className="grow">
      <section className="md:py-10 py-5">
        <Container>
          <div className="grid grid-cols-12 gap-10">
            <div className="flex flex-col gap-6 col-span-3">
              <Title className="font-redHat md:text-5xl text-3xl md:leading-tight leading-normal ">
                Contact Us
              </Title>
            </div>
            <div className="col-span-6 col-start-7 flex flex-col gap-6">
              <p>If you need our help with your user account, have questions about how to use the platform or are experiencing technical difficulties, please do not hesitate to contact us.</p>
            </div>
          </div>
        </Container>
      </section>
      <section className="md:py-10 py-5">
        <Container>
          <div className="grid grid-cols-12 gap-10">
            <div className="flex flex-col gap-6 col-span-3">
              <ContactInfo />
              <FollowUs />
            </div>
            <div className="col-span-6 col-start-7 flex flex-col gap-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ContactPage;
