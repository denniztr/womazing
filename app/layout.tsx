import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';

const raleway = Raleway({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'WOMAZING',
  description: 'Explore the latest in women fashion at our online store. From timeless classics to contemporary trends, find your perfect look for any occasion. Shop confidently with our curated selection of high-quality apparel. Enjoy free shipping on qualifying orders. Visit us now!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
