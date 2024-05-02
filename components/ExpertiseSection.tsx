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

                {/* <ul className='grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3'>
                    <li className='relative rounded-md'>
                        <div className='gradient-border gradient-border-dark hidden dark:block'></div>
                        <div className='gradient-border gradient-border-light dark:hidden'></div>
                        <div className='app-card border border-[#e4e4e7] bg-white hover:border-transparent dark:border-[#27272A] dark:bg-[#18181b] '>
                            <div className='p-8'>
                                <div className='mb-7 w-16'>
                                    <img
                                        className=''
                                        src='//images.ctfassets.net/jqinz8yow1ks/2Gtpb3EbbYeFxuc2HwKmXD/fad67597468f9e1508cd52dc327abd26/icons8-backend-development-96.png'
                                        alt='Front-end Frameworks'
                                    />
                                </div>
                                <h2 className='mb-4 text-3xl'>Front-end Frameworks</h2>
                                <p className='dark:text-gray-300'>
                                    {`I'm well-versed in popular front-end frameworks like React,
                  Angular, or Vue.js. Leveraging their capabilities, I build
                  interactive and high-performance web applications.`}
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className='relative rounded-md'>
                        <div className='gradient-border gradient-border-dark hidden dark:block'></div>
                        <div className='gradient-border gradient-border-light dark:hidden'></div>
                        <div className='app-card border border-[#e4e4e7] bg-white hover:border-transparent dark:border-[#27272A] dark:bg-[#18181b] '>
                            <div className='p-8'>
                                <div className='mb-7 w-16'>
                                    <img
                                        className=''
                                        src='//images.ctfassets.net/jqinz8yow1ks/4wd35BMpv9q55EXIE4JvM9/06d9eb673d8e24c48eafc393bbc0103d/icons8-multiple-devices-96.png'
                                        alt='Responsive Design'
                                    />
                                </div>
                                <h2 className='mb-4 text-3xl'>Responsive Design</h2>
                                <p className='dark:text-gray-300'>
                                    Ensuring your website looks great on all devices is crucial. I
                                    implement responsive design techniques to optimize user
                                    experience across desktops, tablets, and mobile phones.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className='relative rounded-md'>
                        <div className='gradient-border gradient-border-dark hidden dark:block'></div>
                        <div className='gradient-border gradient-border-light dark:hidden'></div>
                        <div className='app-card border border-[#e4e4e7] bg-white hover:border-transparent dark:border-[#27272A] dark:bg-[#18181b] '>
                            <div className='p-8'>
                                <div className='mb-7 w-16'>
                                    <img
                                        className=''
                                        src='//images.ctfassets.net/jqinz8yow1ks/7cYgQYurA8dTrXmhR4vyqb/7d7d783de2d227213b18ddb8bb5cea65/icons8-code-96.png'
                                        alt='Website Development'
                                    />
                                </div>
                                <h2 className='mb-4 text-3xl'>Website Development</h2>
                                <p className='dark:text-gray-300'>
                                    {`I create fully functional and visually appealing websites
                  using HTML, CSS, and JavaScript. From static sites to dynamic
                  web applications, I'll bring your ideas to life.`}
                                </p>
                            </div>
                        </div>
                    </li>
                </ul> */}
            </Container>
        </section>
    )
}

export default ExpertiseSection