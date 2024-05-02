import React, { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  children,
  subtitle,
  className = 'font-redHat text-2xl leading-normal tracking-wide',
}) => {
  return (
    <div>
      <h3 className={`text-black ${className}`}>{children}</h3>
      {subtitle && <p className='mt-5 font-redHat text-2xl'>{subtitle}</p>}
    </div>
  );
};

export default Title;
