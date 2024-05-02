import PageHeader from '@/components/PageHeader';
import PortfolioItem from '@/components/PortfolioItem';
import React from 'react';

const WorksPage = () => {
  return (
    <main className='grow'>
      <PageHeader title='Works'>
        <p className='text-2xl'>{`Thing's I've made or learned at the companies I have worked for.`}</p>
      </PageHeader>

      <PortfolioItem
        title='Project Title'
        description='Description of the project goes here.'
        year='2022'
        imageUrl='https://placehold.co/544x544/png'
      />
      <PortfolioItem
        title='Project Title'
        description='Description of the project goes here.'
        year='2022'
        imageUrl='https://placehold.co/544x544/png'
      />
      <PortfolioItem
        title='Project Title'
        description='Description of the project goes here.'
        year='2022'
        imageUrl='https://placehold.co/544x544/png'
      />
    </main>
  );
};

export default WorksPage;
