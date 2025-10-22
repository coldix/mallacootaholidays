/*
# Project:     Mallacoota Holidays ~ mallacootaholidays.com.au
# Author:      Colin Dixon BSc, DipEd, Cert IV TAE
# Contact:     crdixon@gmail.com
# Timestamp:   22/10/2025 01:48 PM AEDT (Mallacoota)
# Version:     [25.10.037]
# File Name:   script.js
# Description: Handles theme switching, background image, and footer info. Updated version info.
*/
document.addEventListener("DOMContentLoaded", () => {
  // --- Version Info ---
  const FILE_VERSION = "25.10.037";
  const FILE_DATE = "22 Oct 2025";

  // --- Theme Toggler ---
  const themeToggleButton = document.getElementById("theme-toggle");
  const themeLabel = document.getElementById("theme-label");
  const themeIcon = document.getElementById("theme-icon");
  const htmlElement = document.documentElement;
  const icons = {
    moon: '<svg viewBox="0 0 24 24"><path d="M11.2 2.01c.14-.04.28-.06.42-.06 2.06 0 3.92.83 5.28 2.19.14.13.26.28.37.43.49.68.86 1.45 1.1 2.28.24.83.33 1.7.28 2.56-.05.86-.25 1.71-.58 2.5-.33.79-.8 1.51-1.39 2.14-.59.63-1.3 1.16-2.11 1.56-.81.4-1.7.67-2.63.79-1.57.19-3.13-.15-4.47-.92-1.33-.77-2.42-2-3.1-3.46-.68-1.46-.94-3.08-.75-4.65.19-1.58.85-3.07 1.88-4.29C8.38 3.01 9.72 2.2 11.2 2.01m0-2.01C4.9 0 0 4.9 0 11.2s4.9 11.2 11.2 11.2c5.29 0 9.7-3.71 10.96-8.62.06-.23.1-.46.15-.69-.02.16-.04.32-.06.49-.49 4.34-4.14 7.7-8.59 7.7-4.97 0-9-4.03-9-9s4.03-9 9-9c.34 0 .67.02.99.06C11.53.02 11.37 0 11.2 0z"/></svg>',
    sun: '<svg viewBox="0 0 24 24"><path d="M12 5c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm7.78-.22c.39-.39 1.02-.39 1.41 0l1.41 1.41c.39.39.39 1.02 0 1.41-.39.39-1.02-.39-1.41 0l-1.41-1.41c-.39-.39-.39-1.02 0-1.41zm-1.41 15.18c.39.39.39 1.02 0 1.41l-1.41 1.41c-.39.39-1.02-.39-1.41 0-.39-.39-.39-1.02 0-1.41l1.41-1.41c.39-.39 1.03-.39 1.41 0zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM19 12c0-.55.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1zM3 12c0-.55.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1zm2.22 6.78c-.39.39-1.02-.39-1.41 0-.39-.39-.39-1.02 0-1.41l1.41-1.41c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-1.41 1.41zM12 19c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1z"/></svg>',
  };

  const applyTheme = (theme) => {
    htmlElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (themeLabel && themeIcon) {
      // Check if elements exist
      if (theme === "dark") {
        themeLabel.textContent = "Dark";
        themeIcon.innerHTML = icons.moon;
      } else {
        themeLabel.textContent = "Light";
        themeIcon.innerHTML = icons.sun;
      }
    }
  };

  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
      const newTheme =
        htmlElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(newTheme);
    });
  }

  const initialTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  applyTheme(initialTheme);

  // --- Background Image ---
  const setRandomBackground = () => {
    const backgrounds = Array.from(
      { length: 6 },
      (_, i) => `images/background-0${i + 1}.webp`
    );
    document.body.style.backgroundImage = `url('${
      backgrounds[Math.floor(Math.random() * backgrounds.length)]
    }')`;
  };
  setRandomBackground();

  // --- Footer Info ---
  const setFooterInfo = () => {
    const yearEl = document.getElementById("copyright-year");
    const versionEl = document.getElementById("footer-version-info");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
    if (versionEl) {
      versionEl.textContent = `V: ${FILE_VERSION} • ${FILE_DATE}`;
    }
  };
  setFooterInfo();
});
