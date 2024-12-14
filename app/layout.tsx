import type { Metadata } from "next";
import "./styles/globals.css";
import { Footer, Navbar } from "./components";


export const metadata: Metadata = {
  title: "CrossWalk",
  description: "A Metaverse Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
