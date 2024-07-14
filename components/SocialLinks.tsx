import { EmailIcon, FacebookIcon, GitHubIcon, IconFacebook, IconGithub, IconLinkedin, IconYoutube, LinkedInIcon, YouTubeIcon } from '@/utils/Icons';
import Link from 'next/link';
import React from 'react';


const SocialLinks = ({ className }: any) => {
  return (
    <div className={`overflow-hidden w-full sm:flex sm:fixed sm:left-20 sm:bottom-8 transform  ${className}`}>
      <div className={`flex sm:flex-col w-full sm:w-10 gap-4 uppercase font-normal text-[11px] tracking-[0.1em]`}>
        <Link className="relative group " rel="noreferrer noopener" href="https://github.com/milapdave" target="_blank">
          <GitHubIcon className="w-6 h-6" />
        </Link>
        <Link className="relative group " rel="noreferrer noopener" href="https://www.linkedin.com/in/milapdave/" target="_blank">
          <LinkedInIcon className="w-6 h-6" />
        </Link>
        <Link className="relative group " rel="noreferrer noopener" href="https://www.facebook.com/milapdave" target="_blank">
          <FacebookIcon className="w-6 h-6" />
        </Link>
        <Link className="relative group " rel="noreferrer noopener" href="https://www.youtube.com/@milapdave" target="_blank">
          <YouTubeIcon className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}

export default SocialLinks;
