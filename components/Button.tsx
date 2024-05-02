import React, { ReactNode } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  onClick,
  children,
  className,
}) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={`${className} bg-Grey-700 px-5 py-2 font-bold tracking-wide  text-white hover:bg-Grey-900`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
