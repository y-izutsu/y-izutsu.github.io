---
title: "🚀AstroWind [3] /ja /en 分離（ナビ・レイアウト・Canonical）"
date: 2026-03-01
tags: ["Astro", "AstroWind", "PochomLab", "Log"]
summary: "/ja /en の2言語ルーティングに分離し、言語別ナビ・言語別レイアウト、Headerの切替、Layoutのcanonical/hreflang対応を追加。"
draft: false
---

## ■ 目的

AstroWindベースのサイトで、日本語/英語を `/ja/` `/en/` のフォルダで分離し、以下を言語ごとに整理できる状態にする。

- ナビゲーション（ヘッダー / フッター）
- レイアウト（読み込むナビ・文章）
- SEO（canonical / hreflang / html lang）

---

## ■ 前提

- `/ja/` `/en/` でフォルダを分け、ページ自体を言語別に持つ構成。
- ナビゲーションは `navigation-ja.ts` / `navigation-en.ts` に分割。
- ページレイアウトは `PageLayout_Ja.astro` / `PageLayout_En.astro` に分割し、読み込むナビゲーションを切り替える。

---

## ■ Pull Request
https://github.com/pochomlab/pochomlab-astrowind-lab/pull/3

---

## ■ 実施内容

- `/ja` `/en` でページを分離。
- `navigation-ja.ts` / `navigation-en.ts` を追加。
- `PageLayout_Ja.astro` / `PageLayout_En.astro` を分離し、読み込むナビを切替。
- `Header.astro` に言語切替（JA/EN）を追加。
- `Layout.astro` に canonical / hreflang を追加。
- `<html lang>` をURLベースで切替。
