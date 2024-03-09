'use client';

import Link from 'next/link';
import Image from 'next/image';

import clsx from 'clsx';

import useRoutes from '@/app/hooks/use-routes';

import Logo from '../logo/logo';
import Contact from '../contact/contact';

function Header() {
  const routes = useRoutes();

  return (
    <div className="w-full flex items-center justify-between">
      <Logo />
      <nav className="flex flex-row gap-11">
        {routes.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              `text-sm tracking-wider font-normal`,
              item.active && 'text-green-700/60 font-bold'
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="flex flex-row">
        <Contact />
        <div className="w-5 h-5 relative">
          <Link href="/cart">
            <Image src="/icons/shopping.svg" fill alt="Shopping" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
