import Link from 'next/link'
import React from 'react'
import Title from './Title'
import Image from 'next/image'

const ServicesItem = ({ blok }: any) => {
    console.log(blok, 'blokblokblok')
    return (
        <div className="relative flex flex-col bg-white bg-clip-border rounded-xl border border-Grey-300 hover:shadow-xl transform duration-200">
            <div className="p-6 flex flex-col gap-5">
                <Image src={blok?.icon?.filename} alt={blok?.icon?.alt} width={40} height={40}/>
                <div className='flex flex-col gap-2'>
                    <Title className='md:text-2xl text-xl'>{blok?.title}</Title>
                    <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                        {blok?.description}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ServicesItem