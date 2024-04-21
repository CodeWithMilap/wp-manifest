import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  subtitle?: string; 
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, subtitle, className = 'font-redHat text-2xl leading-normal tracking-wide' }) => {
  return (
    <div>
      <h3 className={`text-black ${className}`}>{children}</h3>
      {subtitle && <p className="font-redHat text-2xl mt-5">{subtitle}</p>}
    </div>
  );
};

export default Title;
