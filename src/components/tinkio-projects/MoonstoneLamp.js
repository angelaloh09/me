import React, { useState } from 'react'
import Navbar from '../Navbar'
import '../styles/Styles.css'
import style from '../styles/moonstone-lamp.module.css'

import img1 from './moonstone-lamp/moonstone-lamp-img1.jpg'
import img2 from './moonstone-lamp/moonstone-lamp-img2.jpg'

const images = [img1, img2]

const MoonstoneLamp = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [hoveredImage, setHoveredImage] = useState(null)
  const [shouldAnimateImage, setShouldAnimateImage] = useState(false)

  return (
    <section className={`ideas ${style.moonstoneLampSection}`}>
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
                      alt={`Moonstone Lamp view ${idx + 1}`}
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
                    alt="Moonstone Lamp"
                    className={`${style.mainImage} ${shouldAnimateImage ? style.mainImageAnimated : ''}`}
                  />
                ) : (
                  <div className={style.mainImagePlaceholder} />
                )}
              </div>
            </div>

            <div className={style.textColumn}>
              <h1 className={style.title}>Moonstone Lamp</h1>
              <p className={style.body}>
                Coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MoonstoneLamp
