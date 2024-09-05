import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School Sync",
  description:
    "SchoolSync is a powerful school management web app that unifies student records, attendance, scheduling, and communication in one easy-to-use platform. Designed to streamline school operations, SchoolSync keeps educators, administrators, and parents connected, ensuring a smooth and efficient educational experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
