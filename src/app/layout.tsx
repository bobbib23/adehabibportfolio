import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/shared/ui/Navbar";
import { Footer } from "@/shared/ui/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://dirja.web.id'),

  title: {
    default: "Ade Habib Dirja Portfolio | Fullstack Developer",
    template: "%s | Ade Habib Dirja Portfolio",
  },
  description:
    "Portfolio of a passionate Web Developer specializing in JavaScript, React, Next.js, HTML, CSS, Spring Boot, and Golang. Building modern, scalable web applications.",
  keywords: [
    "ade habib dirja",
    "web developer",
    "fullstack developer",
    "frontend developer",
    "react developer",
    "next.js",
    "javascript",
    "typescript",
    "spring boot",
    "golang",
    "portfolio",
  ],
  authors: [{ name: 'Ade Habib Dirja', url: 'https://dirja.web.id' }],
  creator: "Ade Habib Dirja",
  publisher: 'Ade Habib Dirja',
  applicationName: 'Ade Habib Dirja Portfolio',

  alternates: {
    canonical: 'https://dirja.web.id',
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://dirja.web.id",
    siteName: "Ade Habib Dirja Portfolio",
    title: "Ade Habib Dirja Portfolio | Fullstack Developer",
    description:
      "Portfolio of Ade Habib Dirja, a Fullstack Web Developer specializing in React, Next.js, Spring Boot, and Golang.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ade Habib Dirja Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ade Habib Dirja Portfolio | Fullstack Developer",
    description:
      "Portfolio of Ade Habib Dirja, a Fullstack Web Developer specializing in React, Next.js, Spring Boot, and Golang.",
    images: ["/og-image.png"],
    creator: '@bobbib238',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
