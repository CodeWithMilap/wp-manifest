import PageHeader from "@/components/PageHeader";
import PortfolioItem from "@/components/PortfolioItem";
import React from "react";

const WorksPage = () => {
  return (
    <main className="grow">
      <PageHeader title="Works">
        <p>Hello! I’m Manifest – a Freelance UI/UX Designer from Berlin, Germany.</p>
      </PageHeader>

      <PortfolioItem
        title="Project Title"
        description="Description of the project goes here."
        year="2022"
        imageUrl="https://placehold.co/600x400/png"
      />
      <PortfolioItem
        title="Project Title"
        description="Description of the project goes here."
        year="2022"
        imageUrl="https://placehold.co/600x400/png"
      />
      <PortfolioItem
        title="Project Title"
        description="Description of the project goes here."
        year="2022"
        imageUrl="https://placehold.co/600x400/png"
      />
    </main>
  );
};

export default WorksPage;
