import React from 'react';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

// Define the props for the Section component.
interface SectionProps {
    blok: any
}

const Section: React.FC<SectionProps> = ({ blok }) => {
    // Define the default CSS classes for the section.

    return (
        // Render the section div with the specified classes and Storyblok attributes.
        <section className={``} {...storyblokEditable(blok)}>
            {blok.body && blok.body.map((nestedBlok: any) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </section>
    );
};

export default Section;
