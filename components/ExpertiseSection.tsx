import React from 'react'
import PageHeader from './PageHeader'
import Container from './Container'
import ServicesItem from './ServicesItem'
import Title from './Title'
import { StoryblokComponent } from '@storyblok/react/rsc'

const ExpertiseSection = ({ blok }: any) => {
    return (
        <section className='fadeinItem fadeinItem--rise'>
            <Container>
                <div className='flex items-center justify-between py-5 md:py-10'>
                    <Title>{blok?.title}</Title>
                </div>
                <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 pb-10'>
                    {blok.body && blok.body.map((nestedBlok: any) => (
                        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default ExpertiseSection