import React, { useState } from 'react'
import Navbar from '../Navbar'
import '../styles/Styles.css'
import style from '../styles/enzo-stool.module.css'

const images = []

const EnzoStool = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [hoveredImage, setHoveredImage] = useState(null)
  const [shouldAnimateImage, setShouldAnimateImage] = useState(false)
  const hasImages = images.length > 0

  return (
    <section className={`ideas ${style.enzoStoolSection}`}>
      <Navbar />
      <div className={style.contentWrapper}>
        <div className={style.container}>
          <div
            className={`${style.layout} ${!hasImages ? style.layoutTextOnly : ''}`}
          >
            {hasImages && (
              <div className={style.imageColumn}>
                <div className={style.thumbnailGrid}>
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`${style.thumbnailWrapper} ${selectedImage === idx ? style.thumbnailActive : ''} ${(selectedImage === idx || hoveredImage === idx) ? style.thumbnailDisplayed : ''}`}
                      onClick={() => {
                        if (idx !== selectedImage) {
                          setShouldAnimateImage(true)
                          setSelectedImage(idx)
                        }
                      }}
                      onMouseEnter={() => setHoveredImage(idx)}
                      onMouseLeave={() => setHoveredImage(null)}
                    >
                      <img
                        src={img}
                        alt={`Enzo Stool view ${idx + 1}`}
                        className={style.thumbnail}
                      />
                      <div className={style.thumbnailOverlay} />
                    </div>
                  ))}
                </div>
                <div className={style.mainImageWrapper}>
                  {selectedImage !== null ? (
                    <img
                      key={selectedImage}
                      src={images[selectedImage]}
                      alt="Enzo Stool"
                      className={`${style.mainImage} ${shouldAnimateImage ? style.mainImageAnimated : ''}`}
                    />
                  ) : (
                    <div className={style.mainImagePlaceholder} />
                  )}
                </div>
              </div>
            )}

            <div className={style.textColumn}>
              <h1 className={style.title}>Enzo Stool</h1>
              <p className={style.body}>Details coming soon.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnzoStool
