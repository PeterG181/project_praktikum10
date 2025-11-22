import type { Metadata } from "next";
import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import NavbarComponent from "../components/navbar";
import FooterComponent from "../components/footer"; 

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
  title: "AuraFashion | Digital Agency",
  description: "Professional Fashion Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Navbar di sini agar muncul di semua halaman */}
        <NavbarComponent /> 
        
        {/* Konten halaman akan di-render di dalam children */}
        {children}

        {/* Footer di sini agar muncul di semua halaman */}
        <FooterComponent />
      </body>
    </html>
  );
}