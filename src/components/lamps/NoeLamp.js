import React, { useState } from 'react'
import Navbar from '../Navbar'
import '../styles/Styles.css'
import style from '../styles/noe-lamp.module.css'

import img1 from './noe-lamp/noe-lamp-img1.jpg'
import img2 from './noe-lamp/noe-lamp-img2.jpg'
import img3 from './noe-lamp/noe-lamp-img3.jpg'

const images = [img1, img2, img3]

const NoeLamp = () => {
    const [selectedImage, setSelectedImage] = useState(0)
    const [hoveredImage, setHoveredImage] = useState(null)

    const displayedImage = hoveredImage !== null ? hoveredImage : selectedImage

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
                                        className={`${style.thumbnailWrapper} ${selectedImage === idx ? style.thumbnailActive : ''} ${displayedImage === idx ? style.thumbnailDisplayed : ''}`}
                                        onClick={() => setSelectedImage(idx)}
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
                            <img
                                src={images[displayedImage]}
                                alt="Noe Lamp"
                                className={style.mainImage}
                            />
                        </div>

                        {/* Right column - text */}
                        <div className={style.textColumn}>
                            <h1 className={style.title}>Noe Lamp</h1>
                            <p className={style.body}>
                                The Noe Lamp is named after a cute street in San Francisco I used to live on. 
                                <br></br>
                                I designed this lamp as a gift for my Noe Street roommates and to capture what it felt like to live on Noe Street.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NoeLamp
