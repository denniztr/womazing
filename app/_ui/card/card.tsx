'use client';

import PrimaryImage from '../image/image';

const Card = () => {
  return (
    <div className="h-[530px] w-[350px]">
      <div className="h-[478px] relative">
        <PrimaryImage src="/itemPic.png" alt="Item" />
      </div>
      <div className="text-center font-[500]">
        <h4 className="text-xl pt-6 pb-2">Футболка USA</h4>
        <p className="text-additional text-base">$129</p>
      </div>
    </div>
  );
};

export default Card;
