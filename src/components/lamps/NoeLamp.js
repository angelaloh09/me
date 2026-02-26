import React from 'react'
import Navbar from '../Navbar'
import '../styles/Styles.css'
import style from '../styles/noe-lamp.module.css'

import img1 from './noe-lamp/IMG_2088.jpg'
import img2 from './noe-lamp/DSCF4702.jpg'
import img3 from './noe-lamp/DSCF4680.jpg'

const images = [img2, img3, img1]

const NoeLamp = () => {
    return (
        <section className={`ideas ${style.noeLampSection}`}>
            <Navbar/>
            <div className={style.contentWrapper}>
            <div className={style.container}>
                <div className={style.layout}>
                    {/* Left column - images */}
                    <div className={style.imageColumn}>
                        {images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Noe Lamp view ${idx + 1}`}
                                className={idx < 2 ? style.largeImage : style.bottomImage}
                            />
                        ))}
                    </div>

                    {/* Right column - text */}
                    <div className={style.textColumn}>
                        <h1 className={style.title}>Noe Lamp</h1>
                        <div className={style.description}>
                            <p>
                                A 3D printed lamp with warm, aesthetic lighting. Designed for cozy corners.
                            </p>
                            <p>
                                The Noe Lamp is named after a cute street in San Francisco I used to live on. 
                                This lamp should feel cozy, warm, and inviting - just like Noe Street! 
                                I designed this lamp as a gift for my Noe Street roommates and to capture what it felt like to live on Noe Street.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default NoeLamp
