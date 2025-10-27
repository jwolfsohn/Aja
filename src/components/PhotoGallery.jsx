import './PhotoGallery.css'
import { useState } from 'react'

function PhotoGallery({ photos }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  if (photos.length === 0) {
    return (
      <section className="photo-gallery">
        <div className="empty-gallery">
          <div className="empty-icon">🖼️</div>
          <p className="empty-text">No photos yet! Add photos to public/photos/ and configure them in src/config/photos.js</p>
        </div>
      </section>
    )
  }

  const openModal = (photo) => {
    setSelectedPhoto(photo)
  }

  const closeModal = () => {
    setSelectedPhoto(null)
  }

  return (
    <>
      <section className="photo-gallery">
        <div className="gallery-container">
          <h2 className="gallery-title">Memory Gallery 🎉</h2>
          <div className="gallery-grid">
            {photos.map((photo, index) => (
              <div
                key={photo.id || index}
                className="photo-card"
                onClick={() => openModal(photo)}
              >
                <div className="photo-wrapper">
                  <img
                    src={photo.url}
                    alt={photo.alt || `Photo ${index + 1}`}
                    className="photo-image"
                    loading="lazy"
                  />
                  <div className="photo-overlay">
                    <div className="overlay-buttons">
                      <span className="view-button">👁️ Click to view</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedPhoto && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.alt || "Full size"}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default PhotoGallery

