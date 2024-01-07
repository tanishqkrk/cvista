import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Navbar from "~/components/Navbar";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Cvista",
  description: "Generate PDFs in real-time",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-black" lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Navbar />
        <div className="flex -translate-y-24 justify-center">{children}</div>
      </body>
    </html>
  );
}
