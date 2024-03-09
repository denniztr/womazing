'use client';

import Link from 'next/link';
import Image from 'next/image';

import clsx from 'clsx';

import useRoutes from '@/app/hooks/use-routes';

function Header() {
  const routes = useRoutes();

  return (
    <div>
      <nav className="flex flex-row gap-10">
        {routes.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              `text-xl`,
              item.active && 'text-green-600 font-semibold'
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Header;
