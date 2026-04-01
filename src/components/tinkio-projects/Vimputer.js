import React, { useState } from 'react'
import Navbar from '../Navbar'
import '../styles/Styles.css'
import style from '../styles/vimputer.module.css'

import highlevel from './vimputer/vimputer-highlevel.jpeg'
import closeup from './vimputer/vimputer-closeup.jpeg'

const images = [highlevel, closeup]

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
              <br></br>
              Months-long battery life (seriously) and a built-in mechanical keyboard.
              <br></br>
              <br></br>
              Designed for my boyfriend - a programmer who loves Vim.
              <br></br>
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
