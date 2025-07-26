# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `bun dev` - Start development server with hot reload
- `bun check` - Run Biome linter/formatter checks
- `bun check:fix` - Fix Biome linting/formatting issues automatically
- `bun create` - Run the article creation script
- `bun build` - Build the application (client and server)
- `bun preview` - Build and preview locally with Cloudflare Pages (requires KV binding)
- `bun deploy` - TypeScript check, build, and deploy to Cloudflare Pages

## Architecture Overview

This is a blog built with **HonoX** (full-stack framework) and deployed on **Cloudflare Pages**.

### Key Technologies
- **HonoX**: Full-stack React-like framework with SSG
- **Vite**: Build tool with dual-mode configuration
- **MDX**: Article content with frontmatter support
- **Tailwind CSS**: Styling with custom design system
- **Cloudflare Pages**: Hosting with KV storage for likes
- **Biome**: Linting and formatting

### Project Structure
- `app/articles/` - MDX blog posts organized by year/month
- `app/routes/` - Page routes including dynamic article pages
- `app/components/` - Reusable UI components and islands
- `app/lib/useMDXComponents/` - Custom MDX component providers
- `app/constants/` - Site configuration and icon mappings
- `app/functions/` - Utility functions for articles and assets
- `scripts/` - Build-time scripts including article creation

### Build System
The Vite config uses a dual-mode setup:
- **Client mode**: Bundles client-side assets (CSS, JS, theme)
- **Server mode**: Handles SSG with HonoX, MDX processing, and sitemap generation

### Content Management
- Articles are MDX files with frontmatter metadata
- Organized in year/month directory structure
- Custom MDX components for enhanced content (links, images, messages)
- OG image generation for social sharing
- RSS feed generation

### Styling Architecture
- Tailwind CSS with custom color system
- Radix UI colors integration
- Dark/light theme support with system preference detection
- Component styling with tailwind-variants