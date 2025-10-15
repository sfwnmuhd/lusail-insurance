
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore
import "./globals.css";
import Header from "@/Components/Header";
import Footer3 from "@/Components/Footer";
import DelayedLeadForm from "@/Components/DelayedLeadForm";
import FloatingWhatsApp from "@/Components/FloatingWhatsapp";
import SocialMediaPopup from "@/Components/SocialMediaPopUp";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lusail Insurance",
  description: "Find the best insurance in Qatar with Lusail Insurance. 10+ insurers offering competitive prices. Quick, easy & hassle free insurance solutions.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
          
          <SocialMediaPopup/>
          <FloatingWhatsApp />
         <DelayedLeadForm delayMs={5000} />
        </main>
        
        <Footer3 />
      </body>
    </html>
  );
}
