import React, { ReactNode } from 'react';

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
    children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type = "button", onClick, children, className }) => {
    return (
        <div>
            <button type={type} onClick={onClick} className={`${className} bg-Grey-700 font-bold text-white py-2 px-5  tracking-wide hover:bg-Grey-900`}>
                {children}
            </button>
        </div>
    );
};

export default Button;
