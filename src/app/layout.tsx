import Header from "@/components/Header";
import "./styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog | Borja Muñoz",
  description: "Contenido sobre frontend y tecnología",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta property="og:image" content="/brmd.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <meta
          name="google-site-verification"
          content="issl8zKpEt-ec_pZukX8VRBZeJyn-vPtqmePOBzqiCY"
        />
      </head>
      <body>
        <Providers>
          <main
            className={cn(
              inter.className,
              "antialiased min-h-screen transition-colors ease-in-out duration-5000 text-neutral-800  dark:text-slate-100 bg-gradient-to-br from-slate-100 from-60% via-cyan-300 via to-white to-100%  dark:from-black dark:to-[#111111] w-full"
            )}
          >
            <Header />
            <div className="dpNFuT lg:max-h-full flex items-center justify-center w-full">
              <div className="container max-w-5xl p-5 lg:px-10">{children}</div>
            </div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
