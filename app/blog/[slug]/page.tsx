import BlogCard from "@/components/BlogCard";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Title from "@/components/Title";
import React from "react";

const BlogDetail = () => {
  return (
    <main className="grow">
      <section className="md:py-10 py-5">
        <Container>
          <div className="grid gap-10">
            <div className={`flex flex-col gap-6 `}>
              <Title className="md:text-5xl text-3xl md:leading-tight">
                Using UX Design to Build a Sustainable Future
              </Title>
            </div>
            <div className="col-span-6 col-start-7 flex flex-col gap-6 text-xl">
              6 May, 2020
            </div>
          </div>
        </Container>
      </section>

      
    </main>
  );
};

export default BlogDetail;
