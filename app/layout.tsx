import React from "react";
import { Inter } from "next/font/google";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Search, Menu } from "lucide-react";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clone",
  description: "A clone of the IMDb website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-[#121212] text-white`}
      >
        <header className="bg-[#121212] border-b border-gray-700 p-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
              <Link href="/" className="text-2xl font-bold text-[#F5C518]">
                IMDb Clone
              </Link>
            </div>
            <div className="hidden md:flex flex-1 max-w-xl mx-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search IMDb"
                  className="w-full pl-10 bg-[#2A2A2A] border-gray-700 text-white"
                />
              </div>
            </div>
            <div>
              <Button variant="ghost">Sign In</Button>
            </div>
          </div>
        </header>
        <div className="flex flex-1">
          <nav className="bg-[#1A1A1A] w-64 p-4 space-y-4 hidden md:block">
            <Link
              href="/"
              className="block py-2 hover:bg-[#2A2A2A] rounded px-2"
            >
              Home
            </Link>
            <Link
              href="/profile"
              className="block py-2 hover:bg-[#2A2A2A] rounded px-2"
            >
              Profile
            </Link>
            <Link
              href="/bookmarks"
              className="block py-2 hover:bg-[#2A2A2A] rounded px-2"
            >
              Bookmarks
            </Link>
          </nav>
          <main className="flex-1 p-4 md:p-8">{children}</main>
        </div>
        <footer className="bg-[#121212] text-white py-8">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-2">IMDb</h4>
              <ul className="text-sm space-y-1">
                <li>Help</li>
                <li>Site Index</li>
                <li>IMDbPro</li>
                <li>Box Office Mojo</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Legal</h4>
              <ul className="text-sm space-y-1">
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Advertising</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Social</h4>
              <ul className="text-sm space-y-1">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>YouTube</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Company</h4>
              <ul className="text-sm space-y-1">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press Room</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto mt-8 text-center text-sm">
            <p>&copy; 2023 IMDb Clone. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
