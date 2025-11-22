import React from 'react';

const Button = ({ text, onClick, type = 'primary' }) => {
  const baseStyle = "px-4 py-2 rounded font-semibold ";
  const style =
    type === 'primary'
      ? baseStyle + "bg-teal-500 text-white hover:bg-teal-600"
      : baseStyle + "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return <button className={style} onClick={onClick}>{text}</button>;
};

export default Button;
