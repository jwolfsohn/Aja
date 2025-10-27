# 🎂 Birthday Website

A beautiful, interactive birthday website built with React and Vite! Add your photos directly in the source code and display them in a stunning gallery.

## ✨ Features

- 🎉 Beautiful animated birthday theme
- 📸 Add photos from your source code
- 🖼️ Stunning photo gallery with lightbox view
- 🎈 Animated decorations and effects
- 📱 Fully responsive design
- 🌐 Ready to deploy on GitHub Pages

## 🚀 Getting Started

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 📦 Deployment to GitHub Pages

### First Time Setup

1. Make sure you have `gh-pages` installed:

```bash
npm install -g gh-pages
```

2. Update the `base` in `vite.config.js` to match your repository name

3. Deploy to GitHub Pages:

```bash
npm run deploy
```

This will:

- Build your project
- Create a `gh-pages` branch
- Deploy it to GitHub Pages

### After Initial Deployment

Simply run:

```bash
npm run deploy
```

Your site will be available at: `https://[username].github.io/Aja/`

## 🎨 Customization

### Changing the Title

Edit `index.html` to change the title that appears in the browser tab.

### Adding Photos

1. Place your image files in the `public/photos/` folder
2. Edit `src/config/photos.js` and add the photo paths to the array
3. See `HOW_TO_ADD_PHOTOS.md` for detailed instructions

### Removing Photos

Simply remove the photo path from the array in `src/config/photos.js`

## 📝 Notes

- Photos are stored in the `public/photos/` directory
- Recommended image formats: JPG, PNG
- Optimize image sizes for better performance
- All photos are included in the build and deployed with your site

## 🛠️ Technologies Used

- React 18
- Vite 5
- JavaScript (no TypeScript)
- Pure CSS with animations
- LocalStorage for data persistence

## 📄 License

MIT

---

Made with 💜 for a special birthday!
