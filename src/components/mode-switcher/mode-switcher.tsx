"use client";

import { SunIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

const LOCAL_STORAGE_DARK_OR_LIGHT_MODE_KEY = "dark-or-light-mode";

function toggleMode() {
  const body = document.querySelector("body");
  body?.classList.toggle("dark");

  localStorage.setItem(
    LOCAL_STORAGE_DARK_OR_LIGHT_MODE_KEY,
    body?.classList.contains("dark") ? "dark" : "light"
  );
}

function getSavedMode() {
  switch (localStorage.getItem(LOCAL_STORAGE_DARK_OR_LIGHT_MODE_KEY)) {
    case "dark":
      return "dark";
    case "light":
      return "light";
    default:
      return "system";
  }
}

function getSystemMode() {
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getMode() {
  const systemMode = getSystemMode();
  const savedMode = getSavedMode();

  return savedMode === "system" ? systemMode : savedMode;
}

export function ModeSwitcher() {
  useEffect(() => {
    if (getMode() === "dark") {
      document.querySelector("body")?.classList.add("dark");
    }
  }, []);

  return (
    <div
      onClick={toggleMode}
      className="size-8 inline-flex justify-center items-center cursor-pointer hover:bg-foreground hover:text-background rounded-full transition-colors duration-150"
    >
      <SunIcon className="size-5" />
    </div>
  );
}
