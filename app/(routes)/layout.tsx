import Header from '@/app/_ui/header/header';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen">
      <div className="md:px-60 px-20">
          <Header />
          {children}
      </div>
    </div>
  );
}
