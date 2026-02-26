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

    return (
        <section className={`ideas ${style.noeLampSection}`}>
            <Navbar/>
            <div className={style.contentWrapper}>
                <div className={style.container}>
                    <div className={style.layout}>
                        {/* Left column - images */}
                        <div className={style.imageColumn}>
                            <img
                                src={images[selectedImage]}
                                alt="Noe Lamp"
                                className={style.mainImage}
                            />
                            <div className={style.thumbnailGrid}>
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Noe Lamp view ${idx + 1}`}
                                        className={`${style.thumbnail} ${selectedImage === idx ? style.thumbnailActive : ''}`}
                                        onClick={() => setSelectedImage(idx)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right column - text */}
                        <div className={style.textColumn}>
                            <h1 className={style.title}>Noe Lamp</h1>
                            <p className={style.lead}>
                                A 3D printed lamp with warm, aesthetic lighting. Designed for cozy corners.
                            </p>
                            <p className={style.body}>
                                The Noe Lamp is named after a cute street in San Francisco I used to live on. 
                                This lamp should feel cozy, warm, and inviting—just like Noe Street! 
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
