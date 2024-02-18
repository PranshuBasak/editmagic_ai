import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400','500','600','700'],
  variable: '--font-ibm-plex',
});

export const metadata: Metadata = {
  title: "EditMagic AI",
  description: "EditMagic AI revolutionizes image editing with its intuitive interface and powerful AI algorithms. Offering a seamless blend of creativity and efficiency, this innovative app simplifies the editing process while delivering stunning results. With automatic color correction, intelligent object removal, and advanced enhancement tools, EditMagic AI transforms ordinary photos into extraordinary works of art. Whether you're a professional photographer or a casual enthusiast, EditMagic AI empowers you to unleash your creativity and produce captivating visuals with ease. Experience the magic of AI-driven editing and elevate your photography to new heights with EditMagic AI, the ultimate tool for enhancing your images effortlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>{children}</body>
    </html>
  );
}
