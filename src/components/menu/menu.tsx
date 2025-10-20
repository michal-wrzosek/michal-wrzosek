"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  text: string;
  href: string;
}

const menuItems = [
  { text: "Home", href: "/" },
  { text: "Posts", href: "/posts" },
  { text: "Projects", href: "/projects" },
  { text: "CV", href: "/cv" },
] satisfies MenuItemProps[];

function DesktopMenuItem({ text, href }: MenuItemProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <li
      className={clsx(
        "rounded-full h-8 inline-flex items-center px-4 transition-colors duration-150 cursor-pointer hover:bg-foreground hover:text-background",
        isActive && "bg-foreground text-background"
      )}
    >
      <Link href={href}>{text}</Link>
    </li>
  );
}

export function DesktopMenu() {
  return (
    <nav className="absolute bottom-0 md:static hidden md:block">
      <ul className="flex gap-4 items-center">
        {menuItems.map((item) => (
          <DesktopMenuItem key={item.href} {...item} />
        ))}
      </ul>
    </nav>
  );
}

function MobileMenuItem({ text, href }: MenuItemProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <li className="py-2 text-center">
      <Link
        href={href}
        className={clsx("text-background", isActive && "font-bold")}
      >
        {text}
      </Link>
    </li>
  );
}

export function MobileMenu() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-foreground md:hidden">
      <ul className="w-full inline-grid grid-flow-col auto-cols-fr divide-x py-2">
        {menuItems.map((item) => (
          <MobileMenuItem key={item.href} {...item} />
        ))}
      </ul>
    </nav>
  );
}
