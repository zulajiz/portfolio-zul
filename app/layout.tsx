import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zul Ajiz | Electrical Technician",
  description:
    "Portfolio Zul Ajiz - Electrical Technician berfokus pada instalasi, inspeksi, troubleshooting, dan pemeliharaan sistem kelistrikan.",
  keywords: [
    "Electrical Technician",
    "Zul Ajiz",
    "Instalasi Listrik",
    "Panel Listrik",
    "Troubleshooting",
    "Bogor",
  ],
  openGraph: {
    title: "Zul Ajiz | Electrical Technician",
    description:
      "Portfolio Zul Ajiz - Electrical Technician berfokus pada keandalan, keselamatan, dan efisiensi sistem kelistrikan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body suppressHydrationWarning className="font-sans antialiased text-slate-800 bg-white">
        {children}
      </body>
    </html>
  );
}
