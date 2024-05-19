import React from 'react';
import Title from './Title';
import Link from 'next/link';
import {
  IconFacebook,
  IconGithub,
  IconLinkedin,
  IconYoutube,
} from '@/utils/Icons';

const FollowUs: React.FC = () => {
  return (
    <div className='flex flex-col gap-6'>
      <Title className='text-xl'>Follow Us</Title>
      <ul className='social-icons flex gap-4'>
        <li>
          <Link href={'#'}>
            <IconFacebook />
          </Link>
        </li>
        <li>
          <Link href={'#'}>
            <IconLinkedin />
          </Link>
        </li>
        <li>
          <Link href={'#'}>
            <IconYoutube />
          </Link>
        </li>
        <li>
          <Link href={'#'}>
            <IconGithub />
          </Link>
        </li>
        {/* Add other social media icons similarly */}
      </ul>
    </div>
  );
};

export default FollowUs;
