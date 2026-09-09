import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "custom software development",
    "web app development",
    "mobile app development",
    "staff augmentation",
    "dedicated development team",
    "AI and machine learning",
    "DevOps",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: "/img/hero.webp", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/img/hero.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0e15",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        {/* Runs before the page below it paints. The class it sets is what
            hides the animated elements, so it also schedules its own removal:
            if the motion bundle never arrives, the content appears anyway. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'var d=document.documentElement;d.classList.add("js");' +
              'window.__motionFallback=setTimeout(function(){d.classList.remove("js")},2500)',
          }}
        />
        <a
          href="#main"
          className="btn btn-ink sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
