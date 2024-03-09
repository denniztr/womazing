import Image from 'next/image';

function Contact() {
  return (
    <div className="flex flex-row gap-1">
      <div className="w-6 h-6 relative">
        <Image src="/icons/call.svg" alt="Call" fill />
      </div>
      <div className="pr-14">
        <p className="text-sm">+7 (495) 823-54-12</p>
      </div>
    </div>
  );
}

export default Contact;
