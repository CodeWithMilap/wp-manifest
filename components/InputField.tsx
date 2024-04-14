import React from 'react';

interface InputProps {
  type: string;
  label: string;
  placeholder?: string;
  className?: string;
}

const InputField: React.FC<InputProps> = ({ type, label, placeholder, className }) => {
  return (
    <div className={`${className} flex flex-col gap-1`}>
      <label htmlFor={label} className='text-Grey-700'>{label}</label>
      <input type={type} id={label} className='w-full border-b-2 placeholder-Grey-300 py-1 border-Grey-500 focus:outline-none focus:border-Grey-900' placeholder={placeholder} />
    </div>
  );
};

export default InputField;
