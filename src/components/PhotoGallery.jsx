import './PhotoGallery.css'
import { useState } from 'react'

function PhotoGallery({ photos, onDeletePhoto }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  if (photos.length === 0) {
    return (
      <section className="photo-gallery">
        <div className="empty-gallery">
          <div className="empty-icon">🖼️</div>
          <p className="empty-text">No photos yet! Add your first memory above.</p>
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

  const handleDelete = (index, e) => {
    e.stopPropagation()
    if (window.confirm('Are you sure you want to delete this photo?')) {
      onDeletePhoto(index)
    }
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
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openModal(photo)}
              >
                <div className="photo-wrapper">
                  <img
                    src={photo.data}
                    alt={`Photo ${index + 1}`}
                    className="photo-image"
                  />
                  <div className={`photo-overlay ${hoveredIndex === index ? 'active' : ''}`}>
                    <div className="overlay-buttons">
                      <button
                        className="delete-button"
                        onClick={(e) => handleDelete(index, e)}
                        aria-label="Delete photo"
                      >
                        🗑️
                      </button>
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
              src={selectedPhoto.data}
              alt="Full size"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default PhotoGallery

