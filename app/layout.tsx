// app/layout.tsx
import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'; 
import "./globals.css";
import CustomCursor from "../components/CustomCursor";
import Preloader from "../components/Preloader"; 
import Shield from "../components/Shield";       
import FloatingCall from "../components/FloatingCall"; 

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space" 
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit" 
});

export const metadata: Metadata = {
  title: "FreeLab | A Jövő Digitális Laboratóriuma",
  description: "Precíziós tervezés és kompromisszummentes teljesítmény.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="scroll-smooth">
      {/* BUMM! Itt a javítás: a legvégére bekerült az overflow-x-hidden! */}
      <body className={`${spaceGrotesk.variable} ${outfit.variable} font-sans bg-[#030508] text-white antialiased select-none overflow-x-hidden`}>
        
        <Shield />         {/* A láthatatlan páncél */}
        <Preloader />      {/* A betöltőképernyő */}
        <CustomCursor />   {/* Az egyedi egér */}
        <FloatingCall />   {/* Az új, lüktető hívás gomb */}
        
        {children}

        {/* A láthatatlan GA4 nyomkövető */}
        <GoogleAnalytics gaId="G-BJ358J2S3D" />
      </body>
    </html>
  );
}