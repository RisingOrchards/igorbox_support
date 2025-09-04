# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `yarn start` - Start local development server on port 4000 with hot reloading
- `yarn build` - Build the static website for production

### Other Available Commands  
- `yarn serve` - Serve the production build locally
- `yarn clear` - Clear the cache (can fix build issues)
- `yarn deploy` - Deploy to production (automated via Vercel on merge to main)

## Recent Updates

### Documentation Reorganization (September 2024)
- Restructured documentation to support multiple product versions:
  - LabRat split into G1 (original) and G2 (new) folders
  - IgorBox renamed to "IgorBox (Original)" with placeholder for MKII
- Added interactive LabRat G2 Configurator tool for generating config.json files
- Implemented Mantine-style design system for interactive components

## Architecture

### Technology Stack
This is a Docusaurus v3 documentation site with:
- React 18 for custom components
- MDX for documentation content
- Docusaurus theme system for styling
- Lunr for search functionality

### Project Structure
- `/docs/` - Main documentation markdown files organized by product and version:
  - `/igorbox/` - IgorBox MKI documentation (current version)
  - `/igorbox-mkii/` - IgorBox MKII documentation (placeholder for future release)
  - `/labrat/g1/` - LabRat G1 (original) documentation
  - `/labrat/g2/` - LabRat G2 documentation (new redesigned version)
- `/blog/` - Blog posts in markdown format
- `/src/pages/` - Custom React pages (home page)
- `/src/components/` - React components for custom functionality
- `/src/theme/` - Theme overrides for Docusaurus components
- `/static/` - Static assets (images, files)
- `docusaurus.config.js` - Main configuration including navigation, footer, and plugins
- `sidebars.js` - Documentation sidebar configuration

### Product Versioning Strategy
Documentation is organized by product line and generation/version:
- Each product has its own top-level folder
- Different versions/generations are organized as subfolders
- This approach keeps documentation simple while supporting multiple product versions
- No complex Docusaurus versioning is used to avoid build time overhead

### Interactive Tools
- **LabRat G2 Configurator** (`/src/components/LabRatConfigurator/`): React component that generates config.json files for LabRat G2 devices
  - Located at `/docs/labrat/g2/configurator`
  - Mantine-style UI design for consistency with main website
  - Features: mode selection, timing configuration, audio settings, live preview, and download/copy functionality
  - Component uses MDX to embed interactive React components in documentation

### Key URLs
- Production: https://help.igorbox.com
- GitHub Repo: https://github.com/RisingOrchards/igorbox_support
- Store: https://store.igorbox.com
- Main Site: https://www.igorbox.com

### Deployment
- Automatic deployment to Vercel on merge to main branch
- Preview deployments created for each pull request
- No manual deployment needed for production