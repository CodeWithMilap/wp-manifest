import React from "react";
import Container from "./Container";
import Title from "./Title";
import Button from "./Button";
import Image from "next/image";

interface PortfolioItemProps {
    title: string;
    description: string;
    year: string;
    imageUrl: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, year, imageUrl }) => {
    return (
        <section className="md:py-10 py-5">
            <Container>
                <div className="grid grid-cols-12 gap-10">
                    <div className="md:col-span-6 col-span-full md:order-2">
                        <Image src={imageUrl} alt={title} className="rounded-md shadow-md" height={400} width={600} />
                    </div>
                    <div className="md:col-span-6 col-span-full flex flex-col gap-6">
                        <Title>{title}</Title>
                        <div className="flex flex-col gap-1">
                            <p className=" text-black text-lg">{description}</p>
                            <p className="">{year}</p>
                        </div>
                        <Button>
                            View More
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PortfolioItem;
