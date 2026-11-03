import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "SVS Films And Photography — Capturing Moments. Creating Stories.",
  description:
    "Premium photography, cinematography, traditional Maharashtrian wada studio, academy and reel production. Where Maharashtrian heritage meets modern creativity.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#242020",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Gotu&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Rozha+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-charcoal text-cream font-sans antialiased">
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#641E32",
              color: "#FFF7EB",
              border: "1px solid rgba(198,161,91,0.4)",
            },
          }}
        />
      </body>
    </html>
  );
}
