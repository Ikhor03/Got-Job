import "@/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Got Job",
  description: "meet Jobseeker and requiter",
};

export default function RootLayout({ children, feed, detail }: { children: React.ReactNode; feed: React.ReactNode; detail: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
