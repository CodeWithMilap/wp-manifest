import React from 'react'
import PageHeader from './PageHeader'
import Container from './Container'
import ServicesItem from './ServicesItem'
import Title from './Title'

const ExpertiseSection = () => {
    return (
        <section>
            <Container>
                <div className='flex items-center justify-between py-5 md:py-10'>
                    <Title>My Expertise</Title>
                </div>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-3 pb-10'>
                    <ServicesItem />
                    <ServicesItem />
                    <ServicesItem />
                </div>
            </Container>
        </section>
    )
}

export default ExpertiseSection