// app/layout.tsx
import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'; 
import "./globals.css";
import CustomCursor from "../components/CustomCursor";
import Preloader from "../components/Preloader"; 
import Shield from "../components/Shield";       
import FloatingCall from "../components/FloatingCall"; // <--- ÚJ IMPORT: Lebegő hívás gomb

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
      {/* select-none: Szövegkijelölés letiltása! */}
      <body className={`${spaceGrotesk.variable} ${outfit.variable} font-sans bg-[#030508] text-white antialiased select-none`}>
        
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