import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import BlogCard from "./BlogCard";
import Title from "./Title";

export const LatestPosts = () => {
  return (
    <section className="md:py-10 py-5">
      <Container>
        <div className="flex items-center justify-between md:py-10 py-5">
          <div>
            <Title>Latest Posts</Title>
          </div>
          <div>
            <Link href={"#"}>View All</Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <BlogCard
            imageUrl="https://placehold.co/350x250/png"
            category="Interface Design"
            date="8 June, 2020"
            title="UX traffic light colours"
            description="UI has to make a huge visual difference between warning, an alert and a success."
          />
          <BlogCard
            imageUrl="https://placehold.co/350x250/png"
            category="Interface Design"
            date="8 June, 2020"
            title="UX traffic light colours"
            description="UI has to make a huge visual difference between warning, an alert and a success."
          />
          <BlogCard
            imageUrl="https://placehold.co/350x250/png"
            category="Interface Design"
            date="8 June, 2020"
            title="UX traffic light colours"
            description="UI has to make a huge visual difference between warning, an alert and a success."
          />
        </div>
      </Container>
    </section>
  );
};
