import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button
      className="w-12 h-12 flex items-center justify-center border border-gray-400"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
