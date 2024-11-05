import React from 'react';

const Card = ({ emoji, heading }) => {
  return (
    <div className="relative flex flex-col items-center gap-4 w-40 h-32 p-4 text-center border-7 border-orange-500 rounded-2xl">
      <img src={emoji} alt="" className="transform mb-[-1rem]" />
      <span className="font-medium">{heading}</span>
    </div>
  );
};

export default Card;
