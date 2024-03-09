import Header from '@/app/_ui/header/header';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" min-h-screen flex flex-col">
      <div className="flex-1 mx-auto w-full">
        <div className="px-12 md:px-32 xl:px-40">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}
