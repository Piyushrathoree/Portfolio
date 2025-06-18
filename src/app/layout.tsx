import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { NavDock } from "@/components/NavDock";
import Footer from "@/components/Footer";

// import { HomeIcon, Mail, Pen, User } from "lucide-react";

const raleway = Raleway({
  variable: "--font-Raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Full Stack Portfolio Of Piyush Rathore",
  keywords: ["portfolio", "full stack", "developer", "Piyush Rathore"],
  authors: [
    {
      name: "Piyush Rathore",
      url: "https://piyushrathore.vercel.com",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} bg-black/92 antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">
          <div className="w-full h-full sm:px-[26%] font-custom">
            {children}
            <NavDock />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
