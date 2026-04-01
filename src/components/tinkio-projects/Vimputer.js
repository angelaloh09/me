import React, { useState } from 'react'
import Navbar from '../Navbar'
import '../styles/Styles.css'
import style from '../styles/vimputer.module.css'

import cover from './vimputer/DSCF6326.jpg'
import img6306 from './vimputer/DSCF6306.jpg'
import img6323 from './vimputer/DSCF6323_2.jpeg'
import desk from './vimputer/desk.jpeg'

const images = [img6306, cover, img6323, desk]

const Vimputer = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [hoveredImage, setHoveredImage] = useState(null)
  const displayedImage = selectedImage

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
                    className={`${style.thumbnailWrapper} ${selectedImage === idx ? style.thumbnailActive : ''} ${(displayedImage === idx || hoveredImage === idx) ? style.thumbnailDisplayed : ''}`}
                    onClick={() => setSelectedImage(idx)}
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
                {displayedImage !== null ? (
                  <img
                    key={displayedImage}
                    src={images[displayedImage]}
                    alt="Vimputer"
                    className={style.mainImage}
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
                Months-long battery life (seriously) and a built-in mechanical keyboard.
                <br />
                <br />
                Designed for my boyfriend - a programmer who loves Vim.
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
