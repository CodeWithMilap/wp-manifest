import React, { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  children,
  subtitle,
  className = 'md:text-4xl text-2xl',
}) => {
  return (
    <div>
      <h3 className={`leading-normal tracking-wide font-semibold ${className}`}>{children}</h3>
      {subtitle && <p className='mt-5 text-2xl'>{subtitle}</p>}
    </div>
  );
};

export default Title;
