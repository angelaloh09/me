import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import './styles/Styles.css'
import style from './styles/photography.module.css'

// Import photos
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

const Photography = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null)

    const photos = [
        { src: photo8, alt: 'Photo 8', location: 'Grindelwald, Switzerland' },
        { src: photo5, alt: 'Photo 5', location: 'Shanghai, China' },
        { src: photo3, alt: 'Photo 3', location: 'Page, Arizona' },
        { src: photo2, alt: 'Photo 2', location: 'Grindelwald, Switzerland' },
        { src: photo7, alt: 'Photo 7', location: 'Grindelwald, Switzerland' },
        { src: photo6, alt: 'Photo 6', location: 'The Getty, Los Angeles' },
        { src: photo4, alt: 'Photo 4', location: 'Point Arena, California' },
        { src: photo12, alt: 'Photo 13', location: 'Sea Ranch, California' },
        { src: photo9, alt: 'Photo 9', location: 'Grindelwald, Switzerland' },
        { src: photo10, alt: 'Photo 10', location: 'Vitra Design Museum - Weil am Rhein, Germany' },
        { src: photo11, alt: 'Photo 11', location: 'Hongcun, China' },
        { src: photo1, alt: 'Photo 1', location: 'Grindelwald, Switzerland' },
        { src: photo13, alt: 'Bridge', location: 'Hangzhou, China'},
        { src: photo14, alt: 'Field', location: 'Hongcun, China'},
        { src: photo15, alt: 'House', location: 'Hangzhou, China'},
        { src: photo16, alt: 'Night', location: 'Hangzhou, China'},
        { src: photo17, alt: 'West Lake', location: 'Hangzhou, China' },
    ]

    const openLightbox = (photo) => {
        setSelectedPhoto(photo)
    }

    const closeLightbox = () => {
        setSelectedPhoto(null)
    }

    const goToNextPhoto = () => {
        if (!selectedPhoto) return
        const currentIndex = photos.findIndex(photo => photo.src === selectedPhoto.src)
        const nextIndex = (currentIndex + 1) % photos.length
        setSelectedPhoto(photos[nextIndex])
    }

    const goToPreviousPhoto = () => {
        if (!selectedPhoto) return
        const currentIndex = photos.findIndex(photo => photo.src === selectedPhoto.src)
        const previousIndex = (currentIndex - 1 + photos.length) % photos.length
        setSelectedPhoto(photos[previousIndex])
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedPhoto) return

            switch(e.key) {
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
    }, [selectedPhoto])

    return (
        <section className='ideas'>
            <Navbar/>
            <div className={style.photoPage}>
                <div className={`cards title ${style.photoHeading}`}>
                    <h1>Photography</h1>
                    <br></br>
                </div>
                <div className={style.photoGallery}>
                    {photos.map((photo, index) => (
                        <div key={index} className={style.photoItem} onClick={() => openLightbox(photo)}>
                            <img src={photo.src} alt={photo.alt} />
                        </div>
                    ))}
                </div>
            </div>

            {selectedPhoto && (
                <div className={style.lightbox} onClick={closeLightbox}>
                    <div className={style.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
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

