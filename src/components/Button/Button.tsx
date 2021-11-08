import clsx from 'clsx';
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

const Button = ({ className, type = 'button', text, ...props }: ButtonProps) => (
  <button
    className={clsx(
      'bg-blue-600 text-white py-2 px-6 text-md flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none',
      className
    )}
    type={type} // eslint-disable-line react/button-has-type
    {...props}
  >
    {text}
  </button>
);

export default Button;
