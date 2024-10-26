import { FooterComponent } from "@/components/Footer";
import { NavbarComponent } from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Management Dashboard",
  description:
    "A modern task management system for organizing your daily activities",
  keywords: ["tasks", "management", "productivity", "organization"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-gray-50 antialiased`}>
        <div className="min-h-screen">
          <NavbarComponent />
          <main className="flex-1">{children}</main>
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
