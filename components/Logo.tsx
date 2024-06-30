import Link from 'next/link';

const Logo = () => {
  return (
    // Link to the home page with padding and a responsive logo
    <Link
      href='/'
      className='-m-1.5  p-1.5 text-3xl font-bold uppercase tracking-[0.1em]'
    >
      <span className='sr-only'>Milap Dave</span> MD.
    </Link>
  );
};

export default Logo;
