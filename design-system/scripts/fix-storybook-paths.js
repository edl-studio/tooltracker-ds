const fs = require('fs');
const path = require('path');

const storybookDir = path.join(__dirname, '../dist/storybook');
const indexPath = path.join(storybookDir, 'index.html');

if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // Fix relative paths to be absolute from /storybook/
  content = content.replace(/href="\.\//g, 'href="/storybook/');
  content = content.replace(/src="\.\//g, 'src="/storybook/');
  content = content.replace(/url\(\.\//g, 'url(/storybook/');
  
  // Also fix CSS url() paths that might be in style tags
  content = content.replace(/url\(\.\/sb-common-assets\//g, 'url(/storybook/sb-common-assets/');
  
  fs.writeFileSync(indexPath, content);
  console.log('✅ Fixed Storybook paths for deployment');
} else {
  console.log('❌ Storybook index.html not found');
} 