import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

// import { HomeIcon, Mail, Pen, User } from "lucide-react";

const raleway = Raleway({
  variable: "--font-Raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Full Stack Portfolio Of Piyush Rathore",
};


// const navItems = [
//   {
//     title: "Home",
//     href: "/",
//     icon: <HomeIcon className="h-4 w-4  " />,
//     key: "home",
//   },
//   {
//     title: "Projects",
//     href: "/projects",
//     icon: <Pen className="h-4 w-4  " />,
//     key: "projects",
//   },
//   {
//     title: "Contact",
//     href: "/contact",
//     icon: <Mail className="h-4 w-4 " />,
//     key: "contact",
//   },
//   {
//     title: "About",
//     href: "/about",
//     icon: <User className="h-4 w-4 " />,
//     key: "about",
//   },
// ];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} bg-black/92 antialiased `}>
        {<div className="w-full h-full sm:px-[26%] font-custom">{children}</div>}
        
      </body>
    </html>
  );
}
