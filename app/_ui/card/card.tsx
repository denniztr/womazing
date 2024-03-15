'use client';

import PrimaryImage from '../image/image';

const Card = ({ src, title }) => {
  return (
    <div className="h-[450px] w-[315px]">
      <div className="h-[478px] relative">
        <PrimaryImage src={src} alt="Item" />
      </div>
      <div className="text-center font-[500]">
        <h4 className="text-xl pt-6 pb-2">{title}</h4>
        <p className="text-additional text-base">$129</p>
      </div>
    </div>
  );
};

export default Card;
