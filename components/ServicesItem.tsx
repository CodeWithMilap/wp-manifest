import Link from 'next/link'
import React from 'react'
import Title from './Title'
import Image from 'next/image'

const ServicesItem = ({ blok }: any) => {
    return (
        <div className='gradient-border-box relative'>
            <div className="hidden gradient-border gradient-border-dark dark:block"></div>
            <div className="dark:hidden gradient-border gradient-border-light"></div>
            <div className="relative h-full flex flex-col rounded-xl bg-white dark:bg-background2  border border-light dark:border-dark fadeinItem fadeinItem--rise">
                <div className="p-6 flex flex-col gap-5">
                    <Image src={blok?.icon?.filename} alt={blok?.icon?.alt} width={40} height={40} />
                    <div className='flex flex-col gap-2'>
                        <Title className='md:text-2xl text-xl'>{blok?.title}</Title>
                        <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                            {blok?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesItem