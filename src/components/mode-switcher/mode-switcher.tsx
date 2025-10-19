"use client";

import { SunIcon } from "@heroicons/react/24/outline";

function toggleMode() {
  const body = document.querySelector("body");
  body?.classList.toggle("dark");
}

export function ModeSwitcher() {
  return (
    <div
      onClick={toggleMode}
      className="size-8 inline-flex justify-center items-center cursor-pointer"
    >
      <SunIcon className="size-5" />
    </div>
  );
}
