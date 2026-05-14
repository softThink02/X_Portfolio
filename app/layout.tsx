import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./provider";
import ClientLayout from "@/components/clientLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "David_X | Software Engineer Portfolio",
  description:
    "Software Engineer specializing in React, Next.js, and TypeScript. Building scalable full-stack applications with Node.js, modern UI systems, authentication flows, API design, and production-grade frontend architectures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dugi9xncx/image/upload/v1778795082/myEmoji_uu5v2x.jpg"
          sizes="any"
        />
      </head>
      <body className={poppins.className}>
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
