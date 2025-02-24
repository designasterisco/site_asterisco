import type { Metadata } from "next";
import { Sora, Schoolbell, Baloo_2 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const sora = Sora({
  variable: "--font-sora",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const baloo_2 = Baloo_2({
  variable: "--font-baloo-2",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const schoolbell = Schoolbell({
  variable: "--font-schoolbell",
  weight: ['400'],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Asterisco - Agência feita para te destacar",
  description: "Generated by create next app",
  icons: {
    icon: [
      {
        url: '/favico.png',
        href: '/favico.png',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${sora.variable} ${schoolbell.variable} ${baloo_2.variable} antialiased bg-[#0c0d0c]`}
      >
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
