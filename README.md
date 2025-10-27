# 🎂 Birthday Website

A beautiful, interactive birthday website built with React and Vite! Upload and display photos without any backend - everything is stored locally in your browser.

## ✨ Features

- 🎉 Beautiful animated birthday theme
- 📸 Upload photos directly from your device
- 🖼️ Stunning photo gallery with lightbox view
- 💾 Photos saved locally in browser storage
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

### Uploading Photos

Click the "Add a Photo" button to upload images. Photos are automatically saved to your browser's local storage and will persist between sessions.

### Deleting Photos

Hover over any photo in the gallery and click the 🗑️ button to delete it.

## 📝 Notes

- Photos are stored in the browser's localStorage as base64 data
- Each photo can be up to several megabytes (browser dependent)
- Photos are specific to the browser where they were uploaded
- To share photos across devices, download and upload them on each device

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
