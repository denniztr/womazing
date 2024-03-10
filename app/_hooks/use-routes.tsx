'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

const useRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: 'Главная',
        href: '/',
        active: pathname === '/',
      },
      {
        label: 'Магазин',
        href: '/shop',
        active: pathname === '/shop',
      },
      {
        label: 'О Бренде',
        href: '/brand',
        active: pathname === '/brand',
      },
      {
        label: 'Контакты',
        href: '/contacts',
        active: pathname === '/contacts',
      },
    ],
    [pathname]
  );

  return routes;
};

export default useRoutes;
