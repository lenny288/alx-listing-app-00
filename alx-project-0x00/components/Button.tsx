import React from "react";

interface ButtonProps {
  title: string;
  styles?: string; // extra Tailwind classes passed as props
}

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;

