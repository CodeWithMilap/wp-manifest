import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import PortfolioItem from '@/components/PortfolioItem';
import React from 'react';

const WorksPage = () => {
  return (
    <main className='grow'>
      <PageHeader title='Works'>
        <p>{`Thing's I've made or learned at the companies I have worked for.`}</p>
      </PageHeader>

      <Container>
        <PortfolioItem
          title='Project Title'
          description='Description of the project goes here.'
          year='2022'
          imageUrl='https://placehold.co/1200x760/png'
        />
        <PortfolioItem
          title='Project Title'
          description='Description of the project goes here.'
          year='2022'
          imageUrl='https://placehold.co/1200x760/png'
        />
        <PortfolioItem
          title='Project Title'
          description='Description of the project goes here.'
          year='2022'
          imageUrl='https://placehold.co/1200x760/png'
        />
      </Container>
    </main>
  );
};

export default WorksPage;
