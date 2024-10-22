import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans'})
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: "Mon Portfolio | Léandro Da Silva",
  description: "Bienvenue sur mon portfolio ! Découvrez mes projets, mes compétences en développement web, et mon expérience professionnelle.",
  keywords: "portfolio, développement web, compétences, projets, Nom Prénom",
  authors: [{ name: "Léandro Da Silva", url: "https://mon-site.com" }],
  openGraph: {
    title: "Mon Portfolio | Da SilVA Léandro",
    description: "Bienvenue sur mon portfolio ! Découvrez mes projets, mes compétences en développement web, et mon expérience professionnelle.",
    url: "https://mon-site.com",
    siteName: "Mon Portfolio",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="grow">{children}</main>
            <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}
