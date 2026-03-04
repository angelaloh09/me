import React, { useState } from 'react'
import Navbar from '../Navbar'
import '../styles/Styles.css'
import style from '../styles/cloud-vase.module.css'

import img1 from './cloud-vase/img1.jpg'
import img2 from './cloud-vase/img2.jpg'
import img3 from './cloud-vase/img3.jpg'

const images = [img1, img2, img3]

const CloudVase = () => {
    const [selectedImage, setSelectedImage] = useState(0)
    const [hoveredImage, setHoveredImage] = useState(null)

    const displayedImage = selectedImage

    return (
        <section className={`ideas ${style.cloudVaseSection}`}>
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
                                        className={`${style.thumbnailWrapper} ${selectedImage === idx ? style.thumbnailActive : ''} ${(displayedImage === idx || hoveredImage === idx) ? style.thumbnailDisplayed : ''}`}
                                        onClick={() => setSelectedImage(idx)}
                                        onMouseEnter={() => setHoveredImage(idx)}
                                        onMouseLeave={() => setHoveredImage(null)}
                                    >
                                        <img
                                            src={img}
                                            alt={`Cloud Vase view ${idx + 1}`}
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
                                        alt="Cloud Vase"
                                        className={style.mainImage}
                                    />
                                ) : (
                                    <div className={style.mainImagePlaceholder} />
                                )}
                            </div>
                        </div>

                        {/* Right column - text */}
                        <div className={style.textColumn}>
                            <h1 className={style.title}>Cloud Vase</h1>
                            <p className={style.body}>
                            Designed for Allison. Her bubbly, cheerful personality reminds me of summer clouds!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CloudVase
