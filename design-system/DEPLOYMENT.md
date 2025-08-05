# Deployment Guide

## Vercel Deployment

This project is configured to deploy both the main application and Storybook to Vercel.

### What gets deployed:

1. **Main Application** (`/`)
   - The main React app with the Tools page
   - Built with Vite
   - Available at the root URL

2. **Storybook** (`/storybook`)
   - Component documentation and examples
   - Built with Storybook
   - Available at `/storybook` URL

### Build Process:

The deployment uses a custom build command that:
1. Builds the main Vite application (`npm run build`)
2. Builds Storybook (`npm run build-storybook`)
3. Outputs both to the `dist` directory

### Vercel Configuration:

- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### URL Structure:

- Main app: `https://your-domain.vercel.app/`
- Tools page: `https://your-domain.vercel.app/tools`
- Storybook: `https://your-domain.vercel.app/storybook`

### Deployment Steps:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the configuration
3. Deploy with the default settings
4. Both the main app and Storybook will be available

### Local Testing:

To test the build locally:

```bash
npm run build
npm run preview
```

This will build both the main app and Storybook, then serve them locally for testing. 