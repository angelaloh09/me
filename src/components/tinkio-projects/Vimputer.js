import React, { useState } from 'react'
import Navbar from '../Navbar'
import '../styles/Styles.css'
import style from '../styles/vimputer.module.css'

import typewriter from './vimputer/typewriter.jpeg'
import img6326 from './vimputer/DSCF6326.jpg'
import desk from './vimputer/desk.jpeg'

const images = [typewriter, img6326, desk]

const Vimputer = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [hoveredImage, setHoveredImage] = useState(null)
  const [shouldAnimateImage, setShouldAnimateImage] = useState(false)

  return (
    <section className={`ideas ${style.vimputerSection}`}>
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
                      alt={`Vimputer view ${idx + 1}`}
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
                    alt="Vimputer"
                    className={`${style.mainImage} ${shouldAnimateImage ? style.mainImageAnimated : ''}`}
                  />
                ) : (
                  <div className={style.mainImagePlaceholder} />
                )}
              </div>
            </div>

            <div className={style.textColumn}>
              <h1 className={style.title}>Vimputer</h1>
              <p className={style.body}>
                A tiny computer built for capturing ideas in Vim.
                <br />
                Months-long battery life and a built-in mechanical keyboard.
                <br />
                <br />
                Designed with my boyfriend, a programmer who loves Vim.
                <br />
                Hand-soldered with love :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vimputer
