# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is JP Silva's personal website - a static GitHub Pages site showcasing his profile as a General Practitioner Physician with interests in programming and fitness. The site is a modern, responsive single-page application with multilingual support (English/Spanish).

## Architecture

- **Static Site**: Pure HTML/CSS/JavaScript with no build process or package manager
- **Multilingual**: Custom translation system supporting English and Spanish
- **Progressive Web App**: Includes manifest.json for PWA capabilities
- **Responsive Design**: Mobile-first approach with accessible navigation

### Key Files

- `index.html` - Main landing page with hero section and navigation
- `js/translate.js` - Custom translation management system (TranslationManager class)
- `css/style.css` - Modern CSS with gradients, backdrop filters, and responsive design
- `manifest.json` - PWA configuration
- `README.md` - Site navigation links

### Translation System

The site uses a custom `TranslationManager` class that:

- Detects browser language preferences
- Stores language choice in localStorage
- Provides smooth transitions between languages
- Uses `data-translate-key` attributes for translatable content
- Supports keyboard shortcuts (Ctrl/Cmd + L) for language switching

## Development

Since this is a static site with no build process:

- No package.json, npm scripts, or build commands
- Direct file editing for all changes
- Simple local development via browser file:// or local server
- Deployment via git push to GitHub Pages

## File Structure

```
├── index.html          # Main page
├── css/
│   └── style.css      # Styling
├── js/
│   └── translate.js   # Translation system
├── manifest.json      # PWA config
├── README.md          # Navigation links
└── CNAME             # Custom domain config
```

## (AI Development Engine Markdown)

This document outlines the strategy and technical requirements for migrating this project from a static HTML/CSS/JS website to a modern, component-based application using the Next.js framework. It should be used as the primary source of truth for any AI-assisted development.

### Primary Goal

The objective is to refactor the existing static personal portfolio website into a high-performance, maintainable, and scalable application using Next.js (with the App Router). This migration will improve the developer experience, enhance performance through Static Site Generation (SSG), and establish a modern foundation for future features.

### Project Overview

This is JP Silva's personal website—a portfolio showcasing his profile as a General Practitioner Physician with interests in programming and fitness. The site must remain a modern, responsive, single-page-style application with robust multilingual support (English/Spanish).

### Architecture Comparison

- Current Architecture (Legacy)
  Framework: None (Vanilla HTML/CSS/JavaScript).
  Build Process: None. Direct file editing.
  Styling: A single global style.css file.
  Internationalization (i18n): A custom TranslationManager class in js/translate.js using data-translate-key attributes.
  Deployment: Direct push to a gh-pages branch on GitHub.
- Target Architecture (Future State)
  Framework: Next.js 14+ with the App Router.
  Language: TypeScript. All new code must be type-safe.
  Styling: Tailwind CSS. For utility-first, responsive, and maintainable styling. We will migrate away from the global style.css file.
  Internationalization (i18n): next-intl. A robust, type-safe library that integrates seamlessly with the Next.js App Router for routing and translations.
  State Management: Primarily React Server Components for data fetching and React Context API for simple, global client-side state (e.g., the active language, theme). Avoid complex state management libraries like Redux unless absolutely necessary.
  Deployment: Vercel or GitHub Pages with a GitHub Actions workflow for building and deploying the Next.js application.

### Migration Strategy & Phased Plan

The migration will be executed in a component-driven manner. The AI should focus on one discrete task at a time.

Phase 1: Project Setup

Initialize a new Next.js (App Router, TypeScript, Tailwind CSS) project.
Set up next-intl for English and Spanish, including routing (/en, /es).
Configure eslint and prettier for code quality.
Phase 2: Componentization

Break down the existing index.html into reusable React components. For each component, the task is to: a. Create the component file (e.g., src/components/Navbar.tsx). b. Write the JSX structure based on the legacy HTML. c. Apply styling using Tailwind CSS to match the original design. d. Implement i18n using next-intl's useTranslations hook instead of data-translate-key.
Component List:
Header/Navbar
HeroSection
AboutSection
SkillsSection
ProjectsSection
ContactSection
Footer
LanguageSwitcher (Client Component)
Phase 3: Core Functionality & SEO

Re-implement the language switching logic within the LanguageSwitcher component using next-intl's features.
Implement PWA capabilities using a package like next-pwa.
Leverage Next.js's metadata API in layout.tsx and page.tsx to replicate and improve upon existing SEO meta tags and structured data.
Phase 4: Finalization & Deployment

Set up a GitHub Actions workflow to build the Next.js app and deploy it to the chosen platform (Vercel recommended).
Ensure all original features (accessibility, performance, SEO) are preserved or enhanced.

### Core Principles & Requirements

TypeScript by Default: All components, functions, and types must be written in TypeScript.
Component-Based Architecture: The UI must be broken down into small, single-responsibility, reusable components.
Accessibility First: All components must be built with semantic HTML and appropriate ARIA attributes. Interactive elements must be keyboard-navigable.
Performance as a Feature: Leverage Next.js SSG. Use Server Components wherever possible. Client Components ('use client') should only be used when interactivity is required. Optimize images using next/image.
Type-Safe i18n: Replace the custom translation system entirely with next-intl for compile-time safety on translation keys.
Responsive Design: All components must be fully responsive, adhering to a mobile-first approach using Tailwind CSS's responsive variants.

### AI Collaboration Guidelines

Focus on One Task: Address one component or one step of the migration plan at a time.
Provide Complete Code: When generating code, provide complete, copy-pasteable blocks for files (.tsx, .css, .ts), including necessary imports.
Explain Your Choices: Briefly justify technical decisions, especially when choosing between different implementations (e.g., "Using a Server Component here because it doesn't require interactivity, which improves performance").
Assume Modern Tooling: Assume a development environment with Node.js, pnpm (or npm/yarn), and Git.

### Target File Structure (Example)

```
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx       # Root layout with <html>, <body>
│   │   │   └── page.tsx         # Main page, assembles components
│   │   ├── layout.tsx           # Main layout for i18n provider
│   │   └── global.css         # Tailwind directives
│   ├── components/
│   │   ├── ui/                  # Generic UI elements (buttons, cards)
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   └── About.tsx
│   │   ├── Navbar.tsx
│   │   └── LanguageSwitcher.tsx
│   └── i18n.ts                # Configuration for next-intl
├── locales/
│   ├── en.json
│   └── es.json
├── public/
│   ├── images/
│   └── manifest.json
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```
