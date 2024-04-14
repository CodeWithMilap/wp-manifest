import Link from 'next/link';

const Logo = () => {
  return (
    // Link to the home page with padding and a responsive logo
    <Link href='/' className='-m-1.5  p-1.5 text-lg font-bold uppercase tracking-[0.5em]  text-black'>
      <span className='sr-only'>Manifest</span>{' '}
      Manifest
    </Link>
  );
};

export default Logo;
