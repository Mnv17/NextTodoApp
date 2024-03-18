import "./globals.css";
import { Inter, Lexend } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata = {
  title: "Todo App ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lexend.variable} font-sans bg-slate-900 text-white min-h-screen flex flex-col justify-center`}
      >
        <Navbar />
        <main className="container flex-1 flex flex-col justify-center max-w-screen-sm">
          {children}
        </main>
      </body>
    </html>
  );
}
