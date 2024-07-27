import type { Metadata } from 'next';
import { Red_Hat_Display, Inter } from 'next/font/google';
import './globals.css';
import './style.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { storyblokInit, apiPlugin, ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc"
import StoryblokProvider from "@/components/storyblok/StoryblokProvider"
import { ThemeProvider } from 'next-themes';
import GoogleAnalytics from '@/components/GoogleAnalytics';

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

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await fetchData();

  return (
    <StoryblokProvider>
      <html lang='en'>
        <GoogleAnalytics />
        <body
          className={`${inter.variable} flex min-h-screen flex-col font-inter font-normal dark:bg-background text-black dark:text-Grey-300`}
        >

          <ThemeProvider attribute="class">
            <Header blok={data?.story?.content} />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </StoryblokProvider>
  );
}


export async function fetchData() {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/config`, sbParams);
}
