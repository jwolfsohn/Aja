import { useState } from 'react'
import Header from './components/Header'
import BirthdayGreeting from './components/BirthdayGreeting'
import PhotoGallery from './components/PhotoGallery'
import './App.css'
import { photos as configuredPhotos } from './config/photos.js'

function App() {
  // Load photos from source code configuration
  const [photos] = useState(() => {
    return configuredPhotos.map((photoUrl, index) => ({
      id: index,
      url: photoUrl,
      alt: `Birthday Memory ${index + 1}`
    }))
  })

  return (
    <div className="app">
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <Header />
      <BirthdayGreeting />
      <PhotoGallery photos={photos} />
      
      <footer className="footer">
        <p>Made with 💜 for a special birthday</p>
      </footer>
    </div>
  )
}

export default App

