import type { Metadata } from 'next';
import { Red_Hat_Display, Lato } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const red_hat = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-red-hat',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: 'WP manifest',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${red_hat.variable} ${lato.variable} flex min-h-screen flex-col font-lato font-normal text-Grey-700`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
