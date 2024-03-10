import Header from '@/app/_ui/header/header';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen md:px-20 xl:px-40 px-8 ">
      <Header />
      {children}
    </div>
  );
}
