import React, { useState } from 'react'
import Navbar from '../Navbar'
import '../styles/Styles.css'
import style from '../styles/noe-lamp.module.css'

import img1 from './noe-lamp/noe-lamp-img1.jpg'
import img2 from './noe-lamp/noe-lamp-img2.jpg'
import img3 from './noe-lamp/noe-lamp-img3.jpg'

const images = [img2, img1, img3]

const NoeLamp = () => {
    const [selectedImage, setSelectedImage] = useState(0)
    const [hoveredImage, setHoveredImage] = useState(null)
    const [shouldAnimateImage, setShouldAnimateImage] = useState(false)

    return (
        <section className={`ideas ${style.noeLampSection}`}>
            <Navbar/>
            <div className={style.contentWrapper}>
                <div className={style.container}>
                    <div className={style.layout}>
                        {/* Left column - images */}
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
                                            alt={`Noe Lamp view ${idx + 1}`}
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
                                        alt="Noe Lamp"
                                        className={`${style.mainImage} ${shouldAnimateImage ? style.mainImageAnimated : ''}`}
                                    />
                                ) : (
                                    <div className={style.mainImagePlaceholder} />
                                )}
                            </div>
                        </div>

                        {/* Right column - text */}
                        <div className={style.textColumn}>
                            <h1 className={style.title}>Noe Lamp</h1>
                            <p className={style.body}>
                                Designed for my roommates. Capturing what it felt like to live on the lovely Noe Street.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NoeLamp
