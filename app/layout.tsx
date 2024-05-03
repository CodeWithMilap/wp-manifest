import type { Metadata } from 'next';
import { Red_Hat_Display, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',

})

const red_hat = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-red-hat',
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
        className={`${red_hat.variable} ${inter.variable} flex min-h-screen flex-col font-inter font-normal text-Grey-700`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
