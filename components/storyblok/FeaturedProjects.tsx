import React from 'react'
import Container from '../Container'
import Title from '../Title'
import PortfolioItem from '../PortfolioItem'

const FeaturedProjects = ({ blok }: any) => {
    console.log(blok, 'asdasd')

    const projects = blok?.projects || [];

    return (
        <section className='py-5 md:py-10'>
            <Container>
                <div className='flex items-center justify-between pt-5 md:pt-10'>
                    <Title>My Work</Title>
                </div>

                {projects.map((item: any) => {
                    return (
                        <PortfolioItem
                            key={item}
                            blok={item}
                        />
                    );
                })}


            </Container>
        </section>
    )
}

export default FeaturedProjects