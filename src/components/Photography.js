import React, { useState, useEffect, useCallback, useRef } from 'react'
import Navbar from './Navbar'
import './styles/Styles.css'
import style from './styles/photography.module.css'

import photo1 from './photos/DSCF2560.jpg'
import photo2 from './photos/DSCF2843.jpg'
import photo3 from './photos/DSCF3635.jpg'
import photo4 from './photos/DSCF3890.jpg'
import photo5 from './photos/DSCF4199.jpg'
import photo6 from './photos/IMG_8878.jpg'
import photo7 from './photos/IMG_mountain.JPG'
import photo8 from './photos/4B4F2FE8-3EF9-40C3-B869-F89F1FB81DDA.jpg'
import photo9 from './photos/E43CBFC1-692C-430E-897D-A92BC655F5B7.JPG'
import photo10 from './photos/EE4E56DC-D417-4D16-8E7B-F598FC816308.jpg'
import photo11 from './photos/canola_field.jpeg'
import photo12 from './photos/IMG_8183.jpg'
import photo13 from './photos/bridge.jpeg'
import photo14 from './photos/field.jpeg'
import photo15 from './photos/house.jpeg'
import photo16 from './photos/night.jpeg'
import photo17 from './photos/xi-hu-lake.jpeg'

const PHOTOS = [
    { src: photo8, alt: 'Photo 8', location: 'Grindelwald, Switzerland', width: 4288, height: 2848 },
    { src: photo5, alt: 'Photo 5', location: 'Shanghai, China', width: 4287, height: 2847 },
    { src: photo3, alt: 'Photo 3', location: 'Page, Arizona', width: 2848, height: 4288 },
    { src: photo2, alt: 'Photo 2', location: 'Grindelwald, Switzerland', width: 2228, height: 3354 },
    { src: photo7, alt: 'Photo 7', location: 'Grindelwald, Switzerland', width: 4288, height: 2848 },
    { src: photo6, alt: 'Photo 6', location: 'The Getty, Los Angeles', width: 841, height: 584 },
    { src: photo4, alt: 'Photo 4', location: 'Point Arena, California', width: 2848, height: 2848 },
    { src: photo12, alt: 'Photo 13', location: 'Sea Ranch, California', width: 3024, height: 3024 },
    { src: photo9, alt: 'Photo 9', location: 'Grindelwald, Switzerland', width: 4288, height: 2848 },
    { src: photo10, alt: 'Photo 10', location: 'Vitra Design Museum - Weil am Rhein, Germany', width: 3748, height: 2502 },
    { src: photo11, alt: 'Photo 11', location: 'Hongcun, China', width: 4032, height: 3024 },
    { src: photo1, alt: 'Photo 1', location: 'Grindelwald, Switzerland', width: 2349, height: 3537 },
    { src: photo13, alt: 'Bridge', location: 'Hangzhou, China', width: 3734, height: 2801 },
    { src: photo14, alt: 'Field', location: 'Hongcun, China', width: 4288, height: 2848 },
    { src: photo15, alt: 'House', location: 'Hangzhou, China', width: 2135, height: 3248 },
    { src: photo16, alt: 'Night', location: 'Hangzhou, China', width: 2680, height: 4035 },
    { src: photo17, alt: 'West Lake', location: 'Hangzhou, China', width: 2306, height: 1463 },
]

const Photography = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null)
    const lightboxImageRef = useRef(null)

    const openLightbox = (photo) => {
        setSelectedPhoto(photo)
    }

    const closeLightbox = useCallback(() => {
        setSelectedPhoto(null)
    }, [])

    const handleLightboxClick = useCallback((e) => {
        const image = lightboxImageRef.current
        if (!image) {
            closeLightbox()
            return
        }

        const rect = image.getBoundingClientRect()
        const clickedInsideImage =
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom

        if (!clickedInsideImage) {
            closeLightbox()
        }
    }, [closeLightbox])

    const goToNextPhoto = useCallback(() => {
        setSelectedPhoto((current) => {
            if (!current) return null
            const i = PHOTOS.findIndex((p) => p.src === current.src)
            return PHOTOS[(i + 1) % PHOTOS.length]
        })
    }, [])

    const goToPreviousPhoto = useCallback(() => {
        setSelectedPhoto((current) => {
            if (!current) return null
            const i = PHOTOS.findIndex((p) => p.src === current.src)
            return PHOTOS[(i - 1 + PHOTOS.length) % PHOTOS.length]
        })
    }, [])

    useEffect(() => {
        document.documentElement.classList.add('photography-dark-room')
        return () => document.documentElement.classList.remove('photography-dark-room')
    }, [])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedPhoto) return

            switch (e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                    e.preventDefault()
                    goToNextPhoto()
                    break
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault()
                    goToPreviousPhoto()
                    break
                case 'Escape':
                    e.preventDefault()
                    closeLightbox()
                    break
                default:
                    break
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedPhoto, goToNextPhoto, goToPreviousPhoto, closeLightbox])

    return (
        <section className={`ideas ${style.darkRoom}`}>
            <Navbar />
            <div className={style.photoPage}>
                <div className={`cards title ${style.photoHeading}`}>
                    <h1>Photography</h1>
                    <br />
                </div>
                <div className={style.photoGallery}>
                    {PHOTOS.map((photo, index) => (
                        <div key={index} className={style.photoItem} onClick={() => openLightbox(photo)}>
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                width={photo.width}
                                height={photo.height}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {selectedPhoto && (
                <div className={style.lightbox} onClick={handleLightboxClick}>
                    <div className={style.lightboxContent}>
                        <img
                            ref={lightboxImageRef}
                            src={selectedPhoto.src}
                            alt={selectedPhoto.alt}
                        />
                        {selectedPhoto.location && (
                            <p className={style.caption}>{selectedPhoto.location}</p>
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}

export default Photography
