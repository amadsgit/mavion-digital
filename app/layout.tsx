import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-gradient-to-br from-white via-blue-50 to-purple-50 text-gray-800">
        {children}
      </body>
    </html>
  );
}
