# NgMailbox — Angular Email Client

A clean, modern mailbox-style web application built with **Angular 16**, **SCSS**, and zero external CSS frameworks.

## ✨ Features

- **4 Folders** — Inbox, Sent, Drafts, Trash
- **Card-based email list** with sender avatar, preview, timestamp, tags, attachment indicator
- **Full email preview panel** with HTML body rendering and attachment list
- **Auto-selects** first email on folder change
- **Search/filter** emails per folder
- **Star** emails from list or preview
- **Delete** emails (moves to Trash, then permanently deletes)
- **Unread indicators** — badge count on sidebar, dot on card
- **Relative timestamps** ("2h ago", "Yesterday") via custom pipe
- **Dark mode toggle** with localStorage persistence + `prefers-color-scheme` detection
- **Skeleton loaders** while emails "load"
- **Fully responsive** — works on desktop, tablet, and mobile
- **Custom SCSS** — CSS variables for theming, no Bootstrap/Tailwind

## 🏗️ Project Structure

```
src/app/
├── core/
│   ├── models/       email.model.ts
│   └── services/     email.service.ts, theme.service.ts
├── shared/
│   ├── pipes/        relative-time.pipe.ts
│   └── shared.module.ts
├── features/
│   └── mailbox/
│       ├── components/
│       │   ├── email-card/
│       │   ├── email-list/
│       │   └── email-preview/
│       └── mailbox-page.component.ts
└── layout/
    └── sidebar/
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+
- Angular CLI 16+

### Install & Run

```bash
# 1. Install Angular CLI globally (if not already installed)
npm install -g @angular/cli@16

# 2. Navigate into the project
cd ng-mailbox

# 3. Install dependencies
npm install

# 4. Start the dev server
ng serve

# 5. Open your browser
# http://localhost:4200
```

### Build for Production

```bash
ng build --configuration production
# Output: dist/ng-mailbox/
```

## 🎨 Design Decisions

- **DM Sans** for body text (clean, modern), **Playfair Display** for headings (editorial feel)
- **CSS custom properties** (`:root` variables) for all colors — single-file dark mode switch
- **BEM-style SCSS** naming convention for clarity and scoping
- **BehaviorSubject** in `EmailService` for reactive state across components
- **Mock data** hardcoded in `EmailService` — swap for HTTP calls easily

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
ng build --configuration production
vercel dist/ng-mailbox
```
