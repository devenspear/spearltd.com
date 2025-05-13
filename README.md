# SpearLTD Website

This is the official website for Spear Consultants LTD, a consulting firm specializing in funding solutions and feasibility reports for various sectors including golf & recreation, healthcare, and community development.

## Project Overview

The SpearLTD website is built with [Next.js](https://nextjs.org) and features:

- Modern, responsive design optimized for all devices
- Interactive image carousel in the hero section
- Detailed information about funding solutions (USDA and SBA loans)
- Comprehensive feasibility report services
- Sector-specific consulting information
- Recent projects showcase

## Content Structure

The website is organized into several key sections:

- **Home**: Features a hero carousel and overview of services
- **Funding Solutions**: Details on USDA and SBA loan programs
- **Feasibility Reports**: Information about feasibility studies and their importance
- **Sectors We Serve**: Breakdown of industries served (Golf & Recreation, Healthcare, etc.)
- **Recent Projects**: Showcase of successfully funded projects
- **Articles**: Educational content about funding procedures and feasibility reports

## Technical Implementation

- Built with Next.js 15.3.2
- Uses TypeScript for type safety
- Content management through structured Markdown files
- Responsive design with Tailwind CSS
- Image optimization with Next.js Image component
- Custom carousel component for the hero section

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content Management

Content is managed through Markdown files located in the `src/content` directory. The content is organized by section:

- `src/content/home` - Home page content
- `src/content/funding` - Funding solutions content
- `src/content/feasibility` - Feasibility reports content
- `src/content/sectors` - Sectors we serve content
- `src/content/projects` - Recent projects content

The content is loaded and processed by utility functions in `src/lib/content.ts`.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run start
```

## Deployment

The website is configured for deployment on Vercel. Push to the main branch to trigger an automatic deployment.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
