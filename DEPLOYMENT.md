# 🚀 Deployment Guide for GitHub Pages

## Quick Start

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Test Locally

```bash
npm run dev
```

Visit `http://localhost:5173` to see your site.

### Step 3: Configure Repository Name

**IMPORTANT:** Update the `base` property in `vite.config.js` to match your GitHub repository name:

```javascript
// If your repo is "my-birthday-site"
base: '/my-birthday-site/',

// If your repo is "Aja" (current)
base: '/Aja/',
```

### Step 4: Deploy

#### Option A: Using npm script (Recommended)

```bash
npm run deploy
```

This will:

- Build your project
- Install `gh-pages` if not already installed
- Push the `dist` folder to the `gh-pages` branch
- Make your site live!

#### Option B: Manual deployment

```bash
# Build the project
npm run build

# Deploy using gh-pages
npx gh-pages -d dist
```

### Step 5: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select **gh-pages** branch and **/ (root)**
5. Click **Save**

Your site will be available at: `https://[your-username].github.io/Aja/`

## Automatic Deployment (GitHub Actions)

This project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys your site whenever you push to the `main` or `master` branch.

### To Use GitHub Actions:

1. **Make sure your repository has Pages enabled** (see Step 5 above)
2. Push to the `main` or `master` branch:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```
3. The workflow will automatically build and deploy your site!
4. Check the **Actions** tab in your GitHub repository to see the deployment progress

## Troubleshooting

### Site shows "404 Not Found"

- Double-check the `base` path in `vite.config.js` matches your repository name
- Make sure there's no leading or trailing slash in the repo name
- Wait a few minutes for GitHub Pages to propagate changes

### Photos not loading after deployment

- Clear your browser's localStorage and re-upload photos
- Photos are stored locally in each browser

### Build fails

- Make sure all dependencies are installed: `npm install`
- Try deleting `node_modules` and `.vite` folders, then run `npm install` again

### Want to update the site?

Just run `npm run deploy` again after making changes!

## Need Help?

Check the [GitHub Pages documentation](https://docs.github.com/en/pages) or the [Vite documentation](https://vitejs.dev/).
