---
title: "🎫 Event Registration Sample"
date: 2026-02-27
tags: ["Log", "Events", "PochomLab"]
summary: "Organized the frontmatter specification and writing rules for event posts. Clarified type classifications and display behavior, and prepared navigation to the Events page."
draft: false
---

- You can write the content using Markdown format.
- When omitting fields, either remove the entire item label or comment it out using (#).

```yaml
---
title: "Event sample"
type: other # Values: zine | online | release | talk | other
date: 2026-02-26
startDate: 2026-02-26
#endDate: 2026-02-27
timezone: "Asia/Tokyo"
location: "online"
venue: "Booth A-12"
#cover: "/images/events/2026-02-26-230627.webp"
lineup:
  - "Lineup 1"
  - "Lineup 2"
tags:
  - "KDP"
  - "Release"
  - "Egaki-sho"
links:
  - label: "KDP (Chapter 3)"
    url: "https://www.amazon.co.jp/dp/B0GMGP1GPV/"
draft: false # Values: true | false
---
Body text...
```

## ■ title (Required)

- Enter the title of the event.

## ■ type (Required)

- Select the event type from the list below.
- If the cover image is omitted, a default image corresponding to this type will be used.

| type | Description | Notes |
|-|-|-| 
| zine    | ZINE festivals, literary fairs, exhibitions, creator markets| 👉 Offline-oriented distribution or exhibition of creative works |
| online  | Booth sales launch, KDP release, web publication, site launch  | 👉 Online publication or sales start |
| release | Book releases, new chapter announcements, new character reveals, trademark registration reports | 👉 The moment something is officially released |
| talk | Talk events, Spaces, interviews, presentations | 👉 Communication-focused events |
| other | Anniversaries, collaborations, uncategorized events, special projects | 👉 Buffer category |

### Difference between release and online

- online = The location of the event or publication is online.
- release = Focuses on the action of releasing a work.

## ■ date (Required)

- Enter the date when the event card is registered.
- Latest updates and RSS feeds are processed based on this date.

## ■ startDate (Required)

- Enter the event date.
- The event status **(Upcoming / Past)** is automatically determined using `startDate` and `endDate`.

## ■ endDate (Optional)

- Enter this when the event spans multiple days.

## ■ timezone / location / venue (Optional)

- Displayed on the event card and the detail page.

## ■ cover (Optional)

- Provide the link to the image (16:9 recommended) displayed on the card and detail page.
- If omitted, a default image corresponding to the type will be used for the card.
- The detail page will not display a fallback image.

## ■ lineup / tags (Optional)

- Displayed on the event card and detail page.
- Multiple entries are allowed.

## ■ links (Optional)

- Links to external sites will be displayed on the detail page.

## ■ draft (Required)

- If set to true (draft), the event card will not appear on the event page.
- If false, the event will be published.

## ■ How to link to the English section

If you include an English introduction within the article, write it as follows.

## 1. Create a heading for the English section

```Markdown
## English
```

## 2. Add a link at the beginning of the article

```Markdown
[English below ↓](#english)
```

This will allow readers to scroll to the English section within the page.

*The heading must be written exactly as ## English.*