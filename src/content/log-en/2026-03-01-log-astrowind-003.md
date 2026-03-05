---
title: "🚀 AstroWind [3] /ja /en Separation (Navigation, Layout, Canonical)"
date: 2026-03-01
tags: ["Astro", "AstroWind", "PochomLab", "Log"]
summary: "Separated routing for /ja and /en, added language-specific navigation and layouts, implemented header language switching, and added canonical/hreflang handling in Layout."
draft: false
---

## ■ Purpose

In an AstroWind-based site, separate Japanese and English using the `/ja/` and `/en/` directories, allowing the following elements to be managed independently for each language:

- Navigation (Header / Footer)
- Layout (loaded navigation and text)
- SEO (canonical / hreflang / html lang)

---

## ■ Background

- Pages are separated by language using `/ja/` and `/en/` directories.
- Navigation is split into `navigation-ja.ts` and `navigation-en.ts`.
- Page layouts are separated into `PageLayout_Ja.astro` and `PageLayout_En.astro`, switching which navigation file is loaded.

---

## ■ Pull Request

https://github.com/pochomlab/pochomlab-astrowind-lab/pull/3

---

## ■ Implementation

- Separated pages under `/ja` and `/en`.
- Added `navigation-ja.ts` and `navigation-en.ts`.
- Split layouts into `PageLayout_Ja.astro` and `PageLayout_En.astro`, switching the navigation source.
- Added a language switch (JA / EN) in `Header.astro`.
- Added canonical and hreflang handling to `Layout.astro`.
- Switched `<html lang>` dynamically based on the URL.
- 