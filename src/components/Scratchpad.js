import React from 'react'
import Navbar from './Navbar'
import './styles/Styles.css'
import styles from './styles/Scratchpad.module.css';


// import styles from './Scratchpad.module.css'; // Import as a module

const Scratchpad = () => {
    return (        
        <section className='ideas'>
            <Navbar/>
            <div className="bookshelf">
                <div className="cards title">
                    <h1>Scratchpad</h1>
                    <br></br>
                </div>


                <div>
                    <ul>
                        <li className={styles.GridContainer}>
                            <span>Podcast</span>
                            <a className={styles.Link} href= "https://open.spotify.com/episode/3sGqz3YYftu19SnVoBUUKd?si=_zFI0H_oSgmMjWeVKD62ww" target= "_blank" rel="noopener noreferrer"> Building Pyramids by 99% Invisible </a>
                        </li>

                        <li className={styles.GridContainer}>
                            <span>Podcast</span>
                            <a className={styles.Link} href= "https://open.spotify.com/episode/6rw9PjHgZ3RWOrTmWIumOS?si=WJxO8F3uREuk198ezDb5dg" target= "_blank" rel="noopener noreferrer"> La Sagrada Familia by 99% Invisible </a>
                        </li>
                        
                        <li className={styles.GridContainer}>
                            <span>Music</span>
                            <a className={styles.Link} href= "https://open.spotify.com/album/02PXepuNHYKvGnXYy03oCp?autoplay=true" target= "_blank" rel="noopener noreferrer"> Bloom by Beach House </a>
                        </li>
                        <li className={styles.GridContainer}>
                            <span>Painting</span>
                            <a className={styles.Link} href="https://www.per-adolfsen.com/works/lava" target="_blank" rel="noopener noreferrer"> Lava by Per Adolfsen</a>
                        </li>
                        <li className={styles.GridContainer}>
                            <span>Painting</span>
                            <a className={styles.Link} href="http://www.magipuig.es/" target="_blank"rel="noopener noreferrer" > Magí Puig Artwork</a>
                            </li>
                        <li className={styles.GridContainer}>
                            <span>Music</span>
                            <a className={styles.Link} href="https://www.vanityfair.com/video/watch/how-hans-zimmer-created-the-score-for-dune-part-two" target="_blank" rel= "noopener noreferrer"> Hans Zimmer Creating Dune 2 Score</a>
                        </li>
                    </ul>
                </div>

            </div>

        </section>
    )
}

export default Scratchpad
