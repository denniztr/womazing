'use client';

import Link from 'next/link';
import Image from 'next/image';

import clsx from 'clsx';

import useRoutes from '@/app/_hooks/use-routes';

import Logo from '../logo/logo';
import Contact from '../contact/contact';

function Header() {
  const routes = useRoutes();

  return (
    <div className="flex items-center justify-between pt-14">
      <Logo />
      <nav className="flex flex-row gap-11">
        {routes.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              `text-sm tracking-wider font-normal`,
              item.active && 'text-primary font-semibold'
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="flex">
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
