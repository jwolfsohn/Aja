import { useRef } from 'react'
import './UploadButton.css'

function UploadButton({ onAddPhoto }) {
  const fileInputRef = useRef(null)
  const hiddenFileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const photoData = {
          id: Date.now(),
          data: event.target.result,
          name: file.name,
          addedAt: new Date().toISOString()
        }
        onAddPhoto(photoData)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <section className="upload-section">
      <div className="upload-container">
        <input
          type="file"
          ref={fileInputRef}
          hidden
          accept="image/*"
          onChange={handleFileChange}
        />
        <input
          type="file"
          ref={hiddenFileInputRef}
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleFileChange}
        />
        <button className="upload-button" onClick={handleClick}>
          <span className="upload-icon">📸</span>
          <span className="upload-text">Add a Photo</span>
        </button>
        <p className="upload-hint">Click to add memories to the gallery</p>
      </div>
    </section>
  )
}

export default UploadButton

