# Ayush Dubey Portfolio

A single-page portfolio for Ayush Dubey, built with React, TypeScript, TanStack
Start, Vite, Tailwind CSS, and Framer Motion.

## Features

- Responsive single-page portfolio layout
- Hash-based navigation for Home, About, Work, Case Studies, Skills, and Contact
- Active navigation state that follows the current section while scrolling
- Accessible, reusable UI components
- Animated project previews built with React and design tokens
- Reduced-motion support for users who prefer less animation

## Tech stack

- React 19
- TypeScript
- TanStack Start and TanStack Router
- Vite
- Tailwind CSS
- Framer Motion
- Vitest and Testing Library

## Getting started

### Requirements

- Node.js 18 or newer
- npm

### Installation

```bash
git clone <your-repository-url>
cd <repository-folder>
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL printed in the terminal, usually `http://127.0.0.1:8080`.

## Available commands

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run preview   # Preview the production build locally
npm test          # Run the test suite
npm run lint      # Run ESLint
npm run format    # Format the project with Prettier
```

## Project structure

```text
src/
├── components/
│   ├── portfolio/       # Portfolio sections and project previews
│   ├── case-study/      # Reusable case-study presentation components
│   └── ui/              # Reusable interface primitives
├── content/
│   └── portfolio.ts     # Portfolio copy, links, projects, skills, and process
├── hooks/               # Shared React hooks
├── lib/                 # Utilities and error handling
├── routes/
│   ├── index.tsx        # Single portfolio page
│   └── __root.tsx       # Application shell and document metadata
└── styles.css           # Design tokens and global styles
```

Portfolio content is kept in `src/content/portfolio.ts` so copy and project
data can be updated without changing the section layouts.

## Production build

```bash
npm run build
npm run preview
```

Generated build output is ignored by Git and should not be committed.
