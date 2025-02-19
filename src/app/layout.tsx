import './globals.css';

import type { Metadata } from "next";
import { Montserrat, Oxanium } from 'next/font/google'; //importa fontes do google

export const metadata: Metadata = {
  title: "devstage", //titulo da pagina
};

const oxanium = Oxanium({
  weight: ['500', '600'], // define os pesos da fonte
  subsets: ['latin'], // define os subconjuntos de caracteres
  variable: '--font-oxanium', // define a variavel css
});

const montserrat = Montserrat({
  weight: ['400', '600'], 
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased bg-[url(/background.png)] bg-no-repeat md:bg-right-top bg-top">
        {children}
      </body>
    </html>
  );
}
