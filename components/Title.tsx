import React, { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  children,
  subtitle,
  className = 'md:text-3xl text-2xl',
}) => {
  return (
    <div>
      <h3 className={`text-black leading-normal tracking-wide font-redHat font-semibold ${className}`}>{children}</h3>
      {subtitle && <p className='mt-5 font-redHat text-2xl'>{subtitle}</p>}
    </div>
  );
};

export default Title;
