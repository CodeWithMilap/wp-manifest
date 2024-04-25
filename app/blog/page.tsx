import BlogCard from "@/components/BlogCard";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import React from "react";

const BlogPage = () => {
  return (
    <main className="grow">
      <PageHeader title="Blog" />


      <Container>
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
    </main>
  );
};

export default BlogPage;
