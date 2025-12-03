import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MAVION Digital Indonesia | Web & System Development",
  description:
    "Layanan profesional pembuatan website dan sistem informasi untuk UMKM, personal brand, bisnis, dan perusahaan.",
  keywords: [
    "mavion",
    "mavion digital",
    "jasa pembuatan website",
    "jasa website profesional",
    "web developer indonesia",
    "website UMKM",
    "sistem informasi",
    "company profile website",
    "web system development"
  ],
  openGraph: {
    title: "MAVION Digital Indonesia",
    description: "Partner teknologi untuk website & sistem bisnis.",
    url: "https://mavion-digital.vercel.app",
    siteName: "MAVION Digital",
    locale: "id_ID",
    type: "website",
  },
  robots: "index, follow",
  authors: [{ name: "MAVION Digital Indonesia" }],
  creator: "MAVION Digital Indonesia",
  publisher: "MAVION Digital Indonesia",
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
