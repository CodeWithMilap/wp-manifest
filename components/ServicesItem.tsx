import Link from 'next/link'
import React from 'react'
import Title from './Title'

const ServicesItem = () => {
    return (
        <div className="relative flex flex-col bg-white bg-clip-border rounded-xl border border-Grey-300 hover:shadow-xl transform duration-200">
            <div className="p-6 flex flex-col gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-12 h-12 text-Grey-900">
                    <path fill-rule="evenodd"
                        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                        clip-rule="evenodd"></path>
                    <path
                        d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z">
                    </path>
                </svg>
                <div className='flex flex-col gap-2'>
                    <Title className='md:text-2xl text-xl'>Frontend Dev
                        React, NextJS</Title>
                    <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                        {`Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.`}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ServicesItem