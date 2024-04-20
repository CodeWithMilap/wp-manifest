import Container from "@/components/Container";
import Title from "@/components/Title";
import React from "react";

const AboutPage = () => {
  return (
    <main className="grow">
      <section className="md:py-10 py-5">
        <Container>

          <div className="grid grid-cols-12 gap-10">
            <div className="flex flex-col gap-6 col-span-4">
              <Title className="font-redHat md:text-5xl text-3xl md:leading-tight leading-normal ">
                About
              </Title>
              <p>I’m Manifest
                Full-time UI/UX designer
                Head of Design at VeronaLabs.com</p>
            </div>
            <div className="col-span-6 col-start-7 flex flex-col gap-6">
              <p>I was born in January 1990. After getting my Degree in computer science in 2002, I persuaded my higher study in Human Computer Interaction Design. I got my first job as Graphic Designer in the year 2008. After getting experience in graphic for a year, I moved to UI-UX Designing.</p>
              <p>In 2010, I decided to work as a Freelance Web, UI-UX & Mobile Interface Designer. I find myself still in the learning phase and have strong desire to achieve as many skills as I can.</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default AboutPage;
