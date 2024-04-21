import React, { ReactNode } from "react";
import Container from './Container'
import Title from './Title'

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    children?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, children }) => {
    const hasChildren = !!children; // Check if children are available

    return (
        <section className="md:py-10 py-5">
            <Container>
                <div className="grid grid-cols-12 gap-10">
                    <div className={` ${hasChildren ? 'col-span-5' : 'col-span-6'} flex flex-col gap-6 `}>
                        <Title className="md:text-5xl text-3xl md:leading-tight" subtitle={subtitle}>
                            {title}
                        </Title>
                    </div>
                    {hasChildren &&
                        <div className="col-span-6 col-start-7 flex flex-col gap-6 text-xl">
                            {children}
                        </div>
                    }
                </div>
            </Container>
        </section>
    )
}

export default PageHeader