# 📸 How to Add Photos to Your Birthday Website

Now you can add photos directly from your source code! Follow these simple steps:

## Step 1: Add Photos to the Public Folder

1. Place your image files (`.jpg`, `.png`, etc.) in the `public/photos/` folder
2. For example: `public/photos/photo1.jpg`

## Step 2: Update the Photo Configuration

1. Open `src/config/photos.js`
2. Add your photo filenames to the array:

```javascript
export const photos = [
  "/photos/photo1.jpg",
  "/photos/photo2.jpg",
  "/photos/photo3.jpg",
  // Add as many as you want!
];
```

That's it! The photos will automatically appear on your website.

## Example

If you have a file called `birthday-cake.jpg` in the `public/photos/` folder:

```javascript
export const photos = ["/photos/birthday-cake.jpg"];
```

## Tips

- Use high-quality images (JPG, PNG formats work best)
- Optimize image sizes for faster loading
- Recommended size: under 2MB per image
- You can add as many photos as you want!

## After Adding Photos

1. Save the files
2. The dev server will automatically reload if running
3. If not running, start it with: `npm run dev`
4. View your photos at: `http://localhost:5173`

## Deploying with Photos

When you run `npm run deploy`, all your photos will be included in the build and deployed to GitHub Pages!

---

Need help? Check the main `README.md` for more information.
