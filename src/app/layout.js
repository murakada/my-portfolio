import "../app/assets/css/tailwind.css"
import '../app/assets/css/materialdesignicons.min.css';
import { Poppins } from 'next/font/google'
import Head from 'next/head';

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400','500','600', '700'],
 })

export const metadata = {
  title: 'Vijay - Next Js Personal Portfolio Template',
  description: 'Vijay - Next Js Personal Portfolio Template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta name="description" content="A skilled web developer specializing in ReactJS, JavaScript, NextJS, GatsbyJS, and Tailwind CSS. Explore my projects and reach out for collaboration!" />
            <meta name="msvalidate.01" content="2E176C20A1F47B9D9DE02E1D93B71853" />
            <meta charSet="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon-32x32.png" />
            <meta name="keywords" content="web developer, ReactJS, NextJS, TypeScript, JavaScript, Tailwind CSS, portfolio, frontend developer, Vijay Kumar Murakada, UI/UX, Gatsby JS" />
            <link rel="canonical" href="https://vijaykumarmurakada.in" />
            <meta property="og:title" content="Vijay Kumar Murakada - Web Developer Portfolio" />
            <meta property="og:description" content="A skilled web developer specializing in ReactJS, JavaScript, NextJS, GatsbyJS, and Tailwind CSS. Explore my projects and reach out for collaboration!" />
            {/* <meta property="og:image" content="https://www.yourdomain.com/path-to-image.jpg"> */}
            <meta property="og:url" content="https://www.vijaykumarmurakada.in" />
            <meta property="og:type" content="website" />
            <meta name="robots" content="index, follow" />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <title>Vijay Kumar Murakada - Frontend Developer</title>
      </Head>
      <body className={`${poppins.variable} font-poppins text-base text-black dark:text-white dark:bg-slate-900 `}>{children}</body>
    </html>
  )
}
