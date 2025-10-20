import { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: "Michał Wrzosek",
  description:
    "As a web developer, I'm passionate about creating high-performance applications, open-source contributions, and building innovative solutions.",
  appleWebApp: {
    title: "Michal",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [{ url: "/site.webmanifest", rel: "manifest" }],
  },
};
