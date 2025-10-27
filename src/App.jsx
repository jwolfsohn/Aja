import { useState, useEffect } from 'react'
import Header from './components/Header'
import BirthdayGreeting from './components/BirthdayGreeting'
import PhotoGallery from './components/PhotoGallery'
import UploadButton from './components/UploadButton'
import './App.css'

function App() {
  const [photos, setPhotos] = useState([])

  // Load photos from localStorage on component mount
  useEffect(() => {
    const savedPhotos = localStorage.getItem('birthdayPhotos')
    if (savedPhotos) {
      try {
        const parsedPhotos = JSON.parse(savedPhotos)
        setPhotos(parsedPhotos)
      } catch (error) {
        console.error('Error loading photos from localStorage:', error)
      }
    }
  }, [])

  // Save photos to localStorage whenever photos change
  useEffect(() => {
    if (photos.length > 0) {
      localStorage.setItem('birthdayPhotos', JSON.stringify(photos))
    }
  }, [photos])

  const handleAddPhoto = (photoData) => {
    setPhotos(prevPhotos => [...prevPhotos, photoData])
  }

  const handleDeletePhoto = (index) => {
    const newPhotos = photos.filter((_, i) => i !== index)
    setPhotos(newPhotos)
    localStorage.setItem('birthdayPhotos', JSON.stringify(newPhotos))
  }

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
      <UploadButton onAddPhoto={handleAddPhoto} />
      <PhotoGallery photos={photos} onDeletePhoto={handleDeletePhoto} />
      
      <footer className="footer">
        <p>Made with 💜 for a special birthday</p>
      </footer>
    </div>
  )
}

export default App

