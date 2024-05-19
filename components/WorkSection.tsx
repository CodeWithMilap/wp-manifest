import React from 'react'
import Container from './Container'
import Title from './Title'
import PortfolioItem from './PortfolioItem'

const WorkSection = () => {
    return (
        <section className='py-5 md:py-10'>
            <Container>
                <div className='flex items-center justify-between pt-5 md:py-10'>
                    <Title>My Work</Title>
                </div>
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
        </section>
    )
}

export default WorkSection