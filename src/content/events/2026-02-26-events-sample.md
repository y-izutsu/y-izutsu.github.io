---
title: "イベントサンプル / Event sample"
type: other # Values: zine | online | release | talk | other
date: 2026-02-26
#endDate: 2026-02-27
timezone: "Asia/Tokyo"
location: "online"
venue: "ブースA-12"
#cover:
lineup:
  - "ラインナップ1"
  - "ラインナップ2" 
tags:
  - "KDP"
  - "Release"
  - "Egaki-sho"
links:
  - label: "KDP（第3章）"
    url: "https://www.amazon.co.jp/dp/B0GMGP1GPV/"
draft: false # Values: true | false
---

# イベントのサンプルです 

- マークダウン形式で記述することが出来ます
- 省略する際は項目ラベルごと削除または(#)でコメントアウトします

```yaml
---
title: "イベントサンプル / Event sample"
type: other # Values: zine | online | release | talk | other
date: 2026-02-26
#endDate: 2026-02-27
timezone: "Asia/Tokyo"
location: "online"
venue: "ブースA-12"
#cover:
lineup:
  - "ラインナップ1"
  - "ラインナップ2" 
tags:
  - "KDP"
  - "Release"
  - "Egaki-sho"
links:
  - label: "KDP（第3章）"
    url: "https://www.amazon.co.jp/dp/B0GMGP1GPV/"
draft: false # Values: true | false
---
本文…
```

## ■ title (必須)

- イベントのタイトルを記載します。

## ■ type (必須)

- イベントのタイプを以下から選択します。
- カバー画像を省略した場合、このタイプに応じてデフォルト画像が選択されます。

|type|説明|補足|
|-|-|-| 
|zine|ZINEフェス、文学フリマ、即売会、展示参加|👉 オフライン寄りの「創作物の頒布・出展」|
|online|Booth販売開始、KDP発売、Web公開、サイトリリース|👉 オンライン上の公開・販売開始|
|release|書籍リリース、新章公開、新キャラ発表、商標登録完了報告|👉 「何かが正式に世に出た瞬間」|
|talk|トークイベント、スペース、インタビュー、登壇|👉 言葉を届ける系|
|other|記念日、コラボ、未分類イベント、特別企画|👉 バッファ|

### release と online の違い

- online = 開催・公開の「場所」がオンライン。
- release = 作品公開という「アクション」に焦点。

## ■ date  (必須)

- イベントの日付を入力します。
- date と endDate により Upcoming / Past が自動で切り替わります。

## ■ endDate (省略可)

- 開催期間が複数日の場合に入力します。

## ■ timezone / location / venue(省略可)

- イベントカードおよび詳細ページに表示されます。

## ■ cover (省略可)

- カードおよび詳細ページに表示される画像（16:9推奨）のリンクを記述します。
- 省略した場合、カード画像は type に応じたデフォルト画像が選択されます。
- 詳細ページでは画像表示は省略されます。

## ■ lineup / tags (省略可)

- イベントカードおよび詳細ページに表示されます。
- 複数入力できます。

## ■ links (省略可)

- 外部サイトへのリンクが詳細ページに表示されます。

## ■ draft (必須)

- true（ドラフト中）の場合、イベントページにカードは表示されません。
- false の場合、公開されます。

