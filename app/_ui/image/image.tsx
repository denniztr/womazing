import Image from 'next/image';

function PrimaryImage() {
  return (
    <div className="w-72 h-80 relative">
      <Image src="/testPicMin.png" alt="Picture" fill />
    </div>
  );
}

export default PrimaryImage;
