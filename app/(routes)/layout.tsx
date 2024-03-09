import Header from '@/app/_ui/header/header';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-500 min-h-screen flex flex-col">
      <div className="flex-1 mx-auto px-12 md:px-60 xl:px-80  bg-white">
        main routes layout
        <Header />
        {children}
      </div>
    </div>
  );
}
