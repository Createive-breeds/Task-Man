import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { Bounce, ToastContainer } from "react-toastify";

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
      <body className={` bg-gray-50 antialiased relative`}>
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
