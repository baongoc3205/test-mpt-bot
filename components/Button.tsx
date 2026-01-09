import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-2 rounded-full font-medium transition-colors duration-200 flex items-center justify-center";
  
  const variants = {
    primary: "bg-mpt-yellow text-mpt-blue hover:bg-yellow-400 border border-transparent",
    secondary: "bg-mpt-blue text-white hover:bg-blue-800 border border-transparent",
    outline: "bg-transparent border border-white text-white hover:bg-white/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;