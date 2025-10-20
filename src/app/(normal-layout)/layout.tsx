import type { Metadata } from "next";
import { DesktopMenu, MobileMenu } from "@/components/menu/menu";
import { ModeSwitcher } from "@/components/mode-switcher/mode-switcher";
import "./globals.css";
import { GitHubIcon } from "@/components/icons/github-icon";
import { TwitterIcon } from "@/components/icons/twitter-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Michał Wrzosek",
  description:
    "As a web developer, I'm passionate about creating high-performance applications, open-source contributions, and building innovative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <div className="w-full md:w-320 mx-auto p-6 relative">
            <div className="font-semibold text-2xl md:text-6xl">
              <Link href="/" className="hover:underline">
                Michał Wrzosek
                <br />
                Web Developer
              </Link>
            </div>
            <div className="font-semibold mt-4 text-xs">
              (Rotterdam, The Netherlands)
            </div>
            <div className="absolute top-0 right-0 mt-6 mr-6 flex gap-4 items-center">
              <ModeSwitcher />
              <DesktopMenu />
            </div>
          </div>
          {children}
          <footer className="w-full mb-14 md:mb-0 md:w-320 mx-auto border-t-2 p-6 flex flex-col items-center gap-2 text-sm">
            <div className="font-semibold">
              © {new Date().getFullYear()} Michał Wrzosek. All rights reserved.
            </div>
            <div>
              Contact:{" "}
              <a
                href="mailto:michal@wrzosek.pl"
                className="underline hover:text-gray-300"
              >
                michal@wrzosek.pl
              </a>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/michal-wrzosek"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <GitHubIcon className="size-5 hover:text-gray-300" />
              </a>
              <a
                href="https://x.com/xforartworks"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <TwitterIcon className="size-5 hover:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/michal-wrzosek-cv/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <LinkedinIcon className="size-4 hover:text-gray-300" />
              </a>
            </div>
          </footer>
        </div>
        <MobileMenu />
      </body>
    </html>
  );
}
