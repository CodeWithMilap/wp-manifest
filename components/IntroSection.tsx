import React from "react";
import Container from "./Container";
import Title from "./Title";

export const IntroSection = () => {
  return (
    <section className="md:py-10 py-5">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="md:col-span-5 col-span-full">
            <Title>
              {" "}
              Full-time UI/UX designer <br />
              Head of Design at VeronaLabs.com
            </Title>
          </div>
          <div className="grid md:col-span-5  col-span-full gap-5 text-xl leading-normal tracking-wide lg:col-start-8">
            <p>
              We work with clients around the world from our headquarters in
              Charleston, South Carolina.
            </p>
            <p>
              We focus on naming, branding, brand narratives, website design and
              development, and brand experiences.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
