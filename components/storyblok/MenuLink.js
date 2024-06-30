import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const MenuLink = ({ blok }) => {
  const pathname = usePathname(); // Get the current pathname
  return (
    <Link
      href={`/${blok.link.cached_url}`}
      {...storyblokEditable(blok)}
      className={`block py-3 text-[13px] font-medium uppercase tracking-widest leading-none lg:py-0 ${pathname === '/'+blok.link.cached_url ? 'border-black' : 'border-transparent'
        } text-blacks transform duration-300 hover:border-black`}
    >
      {blok.name}
    </Link>
  )
};
export default MenuLink;
