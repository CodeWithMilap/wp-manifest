import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const MenuLink = ({ blok }) => {
  const pathname = usePathname(); // Get the current pathname
  return (
    <Link
      href={`/${blok.link.cached_url}`}
      {...storyblokEditable(blok)}
      className={`block py-3 text-[13px] font-medium uppercase tracking-widest  leading-none lg:py-0 ${pathname === '/'+blok.link.cached_url ? 'text-black ' : 'text-Grey-900 dark:text-Grey-100'
        } text-blacks transform duration-300 `}
    >
      {blok.name}
    </Link>
  )
};
export default MenuLink;
