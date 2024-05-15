import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/layouts/header";
import { ChakraProvider } from "@chakra-ui/react";
import ReactQueryProvider from "@/hooks/ReactQueryProvider";
import Footer from "@/components/layouts/footer";
import FixedMenu from "@/components/fixed-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alif shop uz",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        <ChakraProvider>
          <ReactQueryProvider>
            <Header />
            {children}
            <FixedMenu />
            <Footer />
          </ReactQueryProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
