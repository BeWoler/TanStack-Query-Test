import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/index';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TanStack Query',
  description: 'TanStack Query Practice',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="px-24">{children}</div>
      </body>
    </html>
  );
}
