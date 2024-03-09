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
      {
        label: 'Корзина',
        href: '/cart',
        icon: '/public/icons/shopping.svg',
        active: pathname === '/cart',
      },
    ],
    [pathname]
  );

  return routes;
};

export default useRoutes;
