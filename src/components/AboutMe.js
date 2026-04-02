import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './styles/Styles.css'
import style from './styles/aboutme.module.css'

import figureHumanoid from './aboutme/figure/figure-3-humanoid-inc.webp'
import figureHands from './aboutme/figure/07tGpPe3i4F68L0tyXv3myR-1.fit_lim.v1760032080.png'
import humaneHero from './aboutme/aipin/hero-image.webp'
import humaneBusiness from './aboutme/aipin/Humane-Ai-Pin-Business.webp'
import nexusDesign from './aboutme/cornell-nexus/nexus-design.png'
import nexusTeam from './aboutme/cornell-nexus/team.jpg'
import panCubeSat from './aboutme/cornell-pan/cube-sat.jpeg'
import panPhoto from './aboutme/cornell-pan/1711343033964.jpg'

const figurePhotos = [
  { src: figureHumanoid, alt: 'Figure humanoid robot' },
  { src: figureHands, alt: 'Figure robotic hands' },
]

const humanePhotos = [
  { src: humaneHero, alt: 'Humane Ai Pin' },
  { src: humaneBusiness, alt: 'Humane Ai Pin business' },
]

const nexusPhotos = [
  { src: nexusDesign, alt: 'Cornell Nexus design', zoomCrop: true },
  { src: nexusTeam, alt: 'Cornell Nexus team' },
]

const panPhotos = [
  { src: panPhoto, alt: 'PAN project' },
  { src: panCubeSat, alt: 'PAN cube satellite' },
]

const AboutMe = () => {
    return (
        <section className="ideas">
            <Navbar />
            <div className={style.PagePadding}>
                <div className="cards title">
                    <h1>About Me</h1>
                    <br />
                </div>

                <div className={style.Writing}>
                    <p>Hi there!</p>
                    <p className={style.introBeforeGallery}>
                        I'm a hardware engineer who wants to make tinkering on fun projects accessible to all!
                        <br></br><br></br>
                        I have a curiosity for making the world a better place, and I'm always looking for new ways to do so.
                        I love learning about how things work. Today, I&apos;m currently building my own company called{" "}
                        <a
                            href="https://tinkio.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={style.Link}
                        >
                            Tinkio
                        </a>
                        .
                        <br></br><br></br>
                        Below are some of the teams & projects I've been lucky to be a part of. 
                    </p>

                    <section className={style.mediaGallery} aria-label="Work photos">
                        <div className={style.mediaCompanyBlock}>
                            <div className={style.mediaCompanyText}>
                                <h3 className={style.mediaHeading}>Figure Ai</h3>
                                <p className={style.mediaCaption}> Figure AI is developing advanced human-like robots designed to support people by taking on dangerous and undesirable tasks.
                                    <br></br> <br></br>
                                    I was one of two electrical engineers who designed, built, and tested all of the electronics for the Figure 3 & 4&nbsp;
                                    <a
                                        href="https://www.youtube.com/watch?v=IlG3X8zRI2I&t=9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={style.Link}
                                    >
                                        robotic hands
                                    </a>
                                    .
                                </p>
                            </div>
                            <div className={style.mediaRow}>
                                {figurePhotos.map(({ src, alt }, i) => (
                                    <img
                                        key={`figure-${i}`}
                                        src={src}
                                        alt={alt}
                                        className={style.mediaImage}
                                        loading="lazy"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={style.mediaCompanyBlock}>
                            <div className={style.mediaCompanyText}>
                                <h3 className={style.mediaHeading}>Humane Ai Pin</h3>
                                <p className={style.mediaCaption}>
                                    The Ai Pin is a mini wearable computer that serves as an intelligent assisant to help people experience the world without a screen.
                                    <br></br><br></br>
                                    I personally helped design & ship the&nbsp;
                                    <a
                                        href="https://www.youtube.com/watch?v=9lNIwOOMVHk&t=177s"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={style.Link}
                                    >
                                        laser display
                                    </a>
                                    &nbsp;that projects the Ai Pin's interface onto the user's hand. 
                                </p>
                            </div>
                            <div className={style.mediaRow}>
                                {humanePhotos.map(({ src, alt }, i) => (
                                    <img
                                        key={`humane-${i}`}
                                        src={src}
                                        alt={alt}
                                        className={style.mediaImage}
                                        loading="lazy"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={style.mediaCompanyBlock}>
                            <div className={style.mediaCompanyText}>
                                <h3 className={style.mediaHeading}>Cornell Nexus</h3>
                                <p className={style.mediaCaption}>
                                    I co-founded a team of 30+ students to create an{" "}
                                    <a
                                        href="https://news.cornell.edu/stories/2022/12/students-design-robot-collect-microplastics-beaches"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={style.Link}
                                    >
                                        autonomous beach roomba
                                    </a>
                                    {" "}
                                    that filters out macro+microplastics from beach sand at Cornell University! 

                                    <br></br> 
                                    <br></br>
                                    I've always deeply cared about the environment, and creating this project team was my way of making a difference during my time at school.
                                </p>
                            </div>
                            <div className={style.mediaRow}>
                                {nexusPhotos.map(({ src, alt, zoomCrop }, i) =>
                                    zoomCrop ? (
                                        <div key={`nexus-${i}`} className={style.mediaImageCrop}>
                                            <img
                                                src={src}
                                                alt={alt}
                                                className={style.mediaImageZoomNexus}
                                                loading="lazy"
                                            />
                                        </div>
                                    ) : (
                                        <img
                                            key={`nexus-${i}`}
                                            src={src}
                                            alt={alt}
                                            className={style.mediaImage}
                                            loading="lazy"
                                        />
                                    )
                                )}
                            </div>
                        </div>
                        <div className={style.mediaCompanyBlock}>
                            <div className={style.mediaCompanyText}>
                                <h3 className={style.mediaHeading}>Space Systems Design Studio</h3>
                                <p className={style.mediaCaption}>
                                    Shipped{" "}
                                    <a
                                        href="https://www.spacecraftresearch.com/pan"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={style.Link}
                                    >
                                        two cube satellites
                                    </a>
                                    {" "}
                                    to space with the Cornell Space Systems Design Studio's Pathfinder Autonomous Navigation (PAN) project team.
                                    <br></br>
                                    <br></br>
                                    Launched with NASA&apos;s CubeSat Launch Initiative (CSLI). Nasa's article about us{" "}
                                    <a
                                        href="https://www.nasa.gov/blogs/smallsatellites/2022/01/13/nasa-satellites-launch-aboard-virgin-orbits-launcherone/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={style.Link}
                                    >
                                        here
                                    </a>
                                    !
                                </p>
                            </div>
                            <div className={style.mediaRow}>
                                {panPhotos.map(({ src, alt }, i) => (
                                    <img
                                        key={`pan-${i}`}
                                        src={src}
                                        alt={alt}
                                        className={style.mediaImage}
                                        loading="lazy"
                                    />
                                ))}
                            </div>
                        </div>
                    </section>

                    <br />
                    <p>
                        More of my hobbyist/personal projects can befound&nbsp;
                        <Link to="/projects" className={style.Link}>here :)</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
