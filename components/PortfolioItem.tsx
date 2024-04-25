import React from "react";
import Container from "./Container";
import Title from "./Title";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

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
                        <Link href={'#'} className="relative overflow-hidden group block">
                            <Image src={imageUrl} alt={title} className="scale-110 transition-all duration-300 group-hover:scale-100" height={544} width={544} />
                        </Link>
                    </div>
                    <div className="md:col-span-6 col-span-full flex flex-col gap-6">
                        <div className="flex gap-3 flex-col">
                            <Title>{title}</Title>
                            <span className="w-[80px] h-[1px] bg-Grey-300 block"></span>
                        </div>
                        <div className="flex flex-col gap-2 text-Grey-700">
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
