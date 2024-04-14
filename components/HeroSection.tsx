import React from "react";
import Container from "./Container";
import ImageSlider from "./Slider";
import Title from "./Title";

export const HeroSection = () => {
  return (
    <section>
      <Container>
        <Title className="font-redHat md:text-5xl text-3xl max-w-2xl md:leading-tight leading-normal md:py-10 py-5">
          Manifest is a newborn theme. Clean, simple and fast.
        </Title>
      </Container>
      <ImageSlider />
    </section>
  );
};
