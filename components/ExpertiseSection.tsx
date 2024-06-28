import React from 'react'
import PageHeader from './PageHeader'
import Container from './Container'
import ServicesItem from './ServicesItem'
import Title from './Title'
import { StoryblokComponent } from '@storyblok/react/rsc'

const ExpertiseSection = ({ blok }: any) => {
    return (
        <section className='fadeinItem fadeinItem--onView'>
            <Container>
                <div className='flex items-center justify-between py-5 md:py-10'>
                    <Title>{blok.title}</Title>
                </div>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-3 pb-10'>
                    {blok.body && blok.body.map((nestedBlok: any) => (
                        <div className='' key={nestedBlok._uid}>
                            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                        </div>
                    ))}
                    {/* <ServicesItem /> */}
                    {/* <ServicesItem /> */}
                    {/* <ServicesItem /> */}
                </div>
            </Container>
        </section>
    )
}

export default ExpertiseSection