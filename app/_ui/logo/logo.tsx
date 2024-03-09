import Image from 'next/image';

function Logo() {
  return (
    <div className="flex flex-row gap-1">
      <div className="w-5 h-5 relative">
        <Image src="/icons/dress.svg" alt="Dress" fill />
      </div>
      <div>
        <h2 className="font-base font-semibold tracking-widest">WOMAZING</h2>
      </div>
    </div>
  );
}

export default Logo;
