import type { Metadata } from "next";
import localFont from "next/font/local";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { Bounce, ToastContainer } from "react-toastify";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TaskMan",
  description: "Monitize Your Opinions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 antialiased relative`}
      >
        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="light"
          hideProgressBar={false}
          pauseOnHover
          transition={Bounce}
        />

        {children}
      </body>
    </html>
  );
}
