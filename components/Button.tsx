// components/Button.tsx

import React from "react";
import Link from "next/link";

interface ButtonProps {
  label?: string;
  size?: "small" | "medium" | "large";
  textColor?: string;
  variant?: "primary" | "secondary" | "white" | "outline" | "link";
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
  className?: string; // Change from customClass to className
}

const AppButton: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  variant = "primary",
  onClick,
  href,
  icon,
  className, // Change from customClass to className
}) => {
  const buttonSizeClasses = {
    small: "text-sm px-2 py-1",
    medium: "text-base px-6 py-2",
    large: `text-base py-3 font-bold ${icon ? "px-6" : "px-11"}`,
  };

  const buttonVariantClasses = {
    primary:
      "bg-Grey-700 px-5 py-2 text-white hover:bg-black",
    secondary:
      "bg-Grey-700 px-5 py-2 text-white hover:bg-black",
    white: "border-none text-pxBlack bg-white",
    link: "border-none !p-0",
    outline:
      "border-2 hover:bg-black hover:text-white",
  };

  return (
    <div>
      {href ? (
        <Link
          href={href}
          className={`${buttonSizeClasses[size]} ${buttonVariantClasses[variant]} font-bold tracking-wide disabled:bg-Grey-300 flex items-center justify-center border-2 transition duration-300 ease-in-out ${className}`} // Changed from customClass to className
        >
          {icon && <span className="mr-2">{icon}</span>}
          {label}
        </Link>
      ) : (
        <button
          type="button"
          className={`flex items-center ${buttonSizeClasses[size]} ${buttonVariantClasses[variant]} font-bold tracking-wide  disabled:bg-Grey-300 flex  items-center justify-center border-2 transition duration-300 ease-in-out ${className}`} // Changed from customClass to className
          onClick={onClick}
        >
          {icon && <span className={label ? "mr-2" : ""}>{icon}</span>}
          {label}
        </button>
      )}
    </div>
  );
};

export default AppButton;
