// components/ImageSlider.tsx
'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const ImageSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const totalItems: number = 5; // Total number of items in the slider
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // Function to automatically slide to the next item
    const autoSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    // Start autorun on component mount
    // intervalRef.current = window.setInterval(autoSlide, 3000);

    // Clear interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to handle next button click
  const nextSlide = (): void => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  // Function to handle previous button click
  const prevSlide = (): void => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  return (
    <div
      id='controls-carousel'
      className='relative w-full py-5 md:py-10'
      data-carousel='static'
    >
      {/* Carousel wrapper */}
      <div className='relative h-[200px] overflow-hidden rounded-lg md:h-[600px]'>
        {/* Render slides */}
        {[...Array(totalItems)].map((_, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === activeIndex ? '' : 'opacity-0'
            }`}
            data-carousel-item={index === activeIndex ? 'active' : ''}
          >
            <Image
              src={`https://placehold.co/1200x600/png?text=Slide${index + 1}`}
              width={1200}
              height={600}
              className='absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2'
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type='button'
        className='group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none'
        onClick={prevSlide}
      >
        <span className='inline-flex h-16 w-16 items-center justify-center bg-white bg-opacity-35 hover:bg-opacity-100'>
          <svg
            className='h-4 w-4  rtl:rotate-180'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M5 1 1 5l4 4'
            />
          </svg>
          <span className='sr-only'>Previous</span>
        </span>
      </button>
      <button
        type='button'
        className='group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none'
        onClick={nextSlide}
      >
        <span className='inline-flex h-16 w-16 items-center justify-center bg-white bg-opacity-35 hover:bg-opacity-100'>
          <svg
            className='h-4 w-4  rtl:rotate-180'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='m1 9 4-4-4-4'
            />
          </svg>
          <span className='sr-only'>Next</span>
        </span>
      </button>
    </div>
  );
};

export default ImageSlider;
