import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://mavion-digital.vercel.app"),
  title: {
    default: "MAVION Digital Indonesia | Jasa Pembuatan Website & Sistem Informasi",
    template: "%s | MAVION Digital Indonesia",
  },
  description:
    "Jasa pembuatan website profesional, sistem informasi, aplikasi berbasis web untuk UMKM, bisnis, dan perusahaan. Support Next.js, React, TypeScript.",
  keywords: [
    "jasa pembuatan website",
    "jasa website umkm",
    "jasa web developer indonesia",
    "website murah",
    "sistem informasi perusahaan",
    "Mavion Digital",
    "jasa pembuatan aplikasi",
    "web development"
  ],
  openGraph: {
    title: "MAVION Digital Indonesia",
    description: "Partner teknologi untuk website & sistem bisnis.",
    url: "https://mavion-digital.vercel.app",
    siteName: "MAVION Digital Indonesia",
    locale: "id_ID",
    type: "website",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://mavion-digital.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-linear-to-br from-white via-blue-50 to-purple-50 text-gray-800">
        {children}
      </body>
    </html>
  );
}
