import Image from 'next/image';

interface PrimaryImageProps {
  src: string;
  alt: string;
  className: string;
}

const PrimaryImage: React.FC<PrimaryImageProps> = ({ src, alt, className }) => {
  return (
    <div className={className}>
      <Image src={src} alt={alt} fill />
    </div>
  );
};

export default PrimaryImage;
