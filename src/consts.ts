// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "pruefportal.ai - KI-Systeme nach dem MISSION KI Qualitätsstandard prüfen";
export const SITE_DESCRIPTION =
  "pruefportal.ai - KI-Systeme nach dem MISSION KI Qualitätsstandard prüfen.";

export const GITHUB_URL =
  "https://github.com/mission-KI/pruefportal-app";

export const SITE_METADATA = {
  title: {
    default: "pruefportal.ai - KI-Systeme nach dem MISSION KI Qualitätsstandard prüfen",
    template: "%s | Prüfportal",
  },
  description:
    "Web-App für die Prüfung von KI-Systemen nach dem MISSION KI Qualitätsstandard.",
  keywords: [
    "MISSION KI",
    "KI-Qualität",
    "KI-Prüfung",
    "Qualitätsstandard"
  ],
  authors: [{ name: "github.com/phihes" }],
  creator: "github.com/phihes",
  publisher: "github.com/phihes",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "pruefportal.ai - KI-Systeme nach dem MISSION KI Qualitätsstandard prüfen",
    description:
      "pruefportal.ai - KI-Systeme nach dem MISSION KI Qualitätsstandard prüfen.",
    siteName: "pruefportal.ai",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "pruefportal.ai - KI-Systeme nach dem MISSION KI Qualitätsstandard prüfen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "pruefportal.ai - KI-Systeme nach dem MISSION KI Qualitätsstandard prüfen",
    description:
      "pruefportal.ai - KI-Systeme nach dem MISSION KI Qualitätsstandard prüfen.",
    images: ["/og-image.jpg"],
    creator: "@ausrobdev",
  },
};
