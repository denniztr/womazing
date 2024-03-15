import PrimaryImage from '@/app/_ui/image/image';

const EmptyState = () => {
  return (
    <div className="w-[50%] h-[700px] bg-primaryBg absolute z-[-1] top-0 right-0">
      <div className="absolute bottom-9 left-9">
        <PrimaryImage
          className="w-[370px] h-[550px] relative"
          alt="Picture"
          src="/mainPic.png"
        />
      </div>
      <div className="absolute left-80 top-72">
        <PrimaryImage
          className="w-40 h-40 relative "
          alt="Picture"
          src="/2ndPic.png"
        />
      </div>
      <div className="absolute bottom-0 left-[-100px]">
        <PrimaryImage
          className="w-48 h-80 relative"
          alt="Picture"
          src="/3rdPic.png"
        />
      </div>
    </div>
  );
};

export default EmptyState;
