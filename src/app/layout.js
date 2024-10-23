"use client";
import { Montserrat } from "next/font/google";
import Navbar from "./navbar";
import { useEffect } from "react";
import Lanyard from "../hooks/lanyard";
import { NavProvider } from "../context/navbar";

import Head from "./head";

import settings from "../data/discord";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  variable: "--montserrat",
  display: "swap",
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
});

import "../styles/globals.css";

export default function RootLayout({ children }) {
  if (settings.lanyard.syncSiteSkin) {
    const [isValidating, data] = Lanyard();

    const status = !isValidating && data;

    const statusColors = {
      online: "green",
      offline: "gray",
      idle: "yellow",
      dnd: "pink",
    };

    !isValidating &&
      status &&
      import(`../styles/skins/${statusColors[status.discord_status]}.css`);
  }

  useEffect(() => {
    document.querySelector(".preloader").classList.add("opacity-0");
    document.querySelector(".preloader").style.display = "none";
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.classList.add("dark");
      document.documentElement.style = "background-color: #151515;";
    } else {
      document.body.classList.remove("dark");
      document.documentElement.style = "background-color: #f2f2fc;";
    }
  });
  return (
    <html lang="en">
      <Head />
      <body className={montserrat.className}>
        <div className="preloader">
          <div className="loader"></div>
        </div>
        <svg
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "0",
            height: "0",
            overflow: "hidden",
          }}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <symbol id="icon-home" viewBox="0 0 32 32">
              <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
            </symbol>
            <symbol id="icon-calendar" viewBox="0 0 32 32">
              <path d="M10 12h4v4h-4zM16 12h4v4h-4zM22 12h4v4h-4zM4 24h4v4h-4zM10 24h4v4h-4zM16 24h4v4h-4zM10 18h4v4h-4zM16 18h4v4h-4zM22 18h4v4h-4zM4 18h4v4h-4zM26 0v2h-4v-2h-14v2h-4v-2h-4v32h30v-32h-4zM28 30h-26v-22h26v22z"></path>
            </symbol>
            <symbol id="icon-bubbles2" viewBox="0 0 36 32">
              <path d="M15 0v0c8.284 0 15 5.435 15 12.139s-6.716 12.139-15 12.139c-0.796 0-1.576-0.051-2.339-0.147-3.222 3.209-6.943 3.785-10.661 3.869v-0.785c2.008-0.98 3.625-2.765 3.625-4.804 0-0.285-0.022-0.564-0.063-0.837-3.392-2.225-5.562-5.625-5.562-9.434 0-6.704 6.716-12.139 15-12.139zM31.125 27.209c0 1.748 1.135 3.278 2.875 4.118v0.673c-3.223-0.072-6.181-0.566-8.973-3.316-0.661 0.083-1.337 0.126-2.027 0.126-2.983 0-5.732-0.805-7.925-2.157 4.521-0.016 8.789-1.464 12.026-4.084 1.631-1.32 2.919-2.87 3.825-4.605 0.961-1.84 1.449-3.799 1.449-5.825 0-0.326-0.014-0.651-0.039-0.974 2.268 1.873 3.664 4.426 3.664 7.24 0 3.265-1.88 6.179-4.82 8.086-0.036 0.234-0.055 0.474-0.055 0.718z"></path>
            </symbol>
            <symbol id="icon-user" viewBox="0 0 32 32">
              <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
            </symbol>
            <symbol id="icon-github" viewBox="0 0 32 32">
              <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
            </symbol>
          </defs>
        </svg>

        <NavProvider>
          <Navbar />
          {children}
        </NavProvider>
      </body>
    </html>
  );
}
