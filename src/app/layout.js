import "../app/assets/css/tailwind.css";
import '../app/assets/css/materialdesignicons.min.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Vijay Kumar Murakada - Frontend Developer',
  description: 'A skilled web developer specializing in ReactJS, JavaScript, NextJS, MicroFrontEnd, and Tailwind CSS. Explore my projects and reach out for collaboration!',
  keywords: 'web developer, ReactJS, NextJS, TypeScript, JavaScript, Tailwind CSS, portfolio, frontend developer, Vijay Kumar Murakada, UI/UX, Stencil JS, MicroFrontEnd, AEM , Storybook',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
  robots: 'index, follow',
  canonical: 'https://www.vijaykumarmurakada.in',
  icons: [
    { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
  ],
  openGraph: {
    title: 'Vijay Kumar Murakada - Web Developer Portfolio',
    description: 'A skilled web developer specializing in ReactJS, JavaScript, NextJS, GatsbyJS, and Tailwind CSS. Explore my projects and reach out for collaboration!',
    url: 'https://www.vijaykumarmurakada.in',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} font-poppins`}>
      <body className="text-base text-black dark:text-white dark:bg-slate-900">
        {children}
      </body>
    </html>
  );
}
