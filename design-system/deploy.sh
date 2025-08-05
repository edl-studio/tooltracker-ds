#!/bin/bash

# Deployment script for Vercel
echo "🚀 Deploying to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Vercel
    echo "🚀 Deploying to Vercel..."
    vercel --prod
    
    echo "🎉 Deployment complete!"
    echo "📱 Your app will be available at:"
    echo "   - Main app: https://your-domain.vercel.app/"
    echo "   - Tools page: https://your-domain.vercel.app/tools"
    echo "   - Storybook: https://your-domain.vercel.app/storybook"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi 