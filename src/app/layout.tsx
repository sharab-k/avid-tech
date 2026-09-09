import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/content/site";
import "./globals.css";

/**
 * Google Sans — the size-optimised derivative of Product Sans that Google
 * released under the SIL Open Font License on 2025-12-10. Product Sans itself
 * stays proprietary, so this is the authentic form of that design we can
 * actually ship.
 *
 * Self-hosted rather than pulled from next/font/google: the font list bundled
 * with Next 15.5 predates the release and has no entry for the family. Latin
 * subset only, variable across 400-700. OFL.txt sits beside the file because
 * the licence requires the notice to travel with the font.
 */
const googleSans = localFont({
  src: "./fonts/GoogleSans-Variable.woff2",
  weight: "400 700",
  style: "normal",
  variable: "--font-google-sans",
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
    <html lang="en" className={googleSans.variable}>
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
