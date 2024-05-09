import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yichelo Landing Page",
  description: "All Gadgets Closest to you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <div className=" overflow-x-hidden w-full rad object-cover bg-no-repeat bg-center">
           {children}
         </div>
      </body>
    </html>
  );
}
