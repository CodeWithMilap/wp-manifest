import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className = 'text-2xl leading-normal tracking-wide' }) => {
  return <h3 className={` text-black ${className}`}>{children}</h3>;
};

export default Title;
