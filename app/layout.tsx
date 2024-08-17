import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "@/styles/globals.css";
import "@/styles/style.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Israk",
    template: `%s | Israk`,
  },
  description:
    "MD Yaser arafat israk, digital artist of Chittagong, Bangladesh",
  robots: {
    follow: true,
    index: true,
  },
  verification: {
    google: "fmDb5LvLMBphFnbLxy0twqLiHhx4sOWt_ie3fZKiGwk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
