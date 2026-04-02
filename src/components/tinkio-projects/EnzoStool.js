import React, { useState } from 'react'
import Navbar from '../Navbar'
import '../styles/Styles.css'
import style from '../styles/enzo-stool.module.css'

import img6369 from './enzo-stool/DSCF6369.jpg'
import img6350 from './enzo-stool/DSCF6350.jpg'
import img6358 from './enzo-stool/DSCF6358.jpg'

const images = [img6369, img6350, img6358]

const EnzoStool = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [hoveredImage, setHoveredImage] = useState(null)
  const [shouldAnimateImage, setShouldAnimateImage] = useState(false)

  return (
    <section className={`ideas ${style.enzoStoolSection}`}>
      <Navbar />
      <div className={style.contentWrapper}>
        <div className={style.container}>
          <div className={style.layout}>
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

            <div className={style.textColumn}>
              <h1 className={style.title}>Enzo Stool</h1>
              <p className={style.body}>
                Original design by architect Italian architect Enzo Mari. His goal was to make furniture design accessible and recreatable by all. 
                <br></br><br></br>
                I saw it in the Västerås Library. This is my prototype recreation of it!
                <br></br> 
                Real wood version is coming soon :) 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnzoStool
