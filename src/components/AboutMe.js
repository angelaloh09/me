import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './styles/Styles.css'
import style from './styles/aboutme.module.css'

import figureHumanoid from './aboutme/figure/figure-3-humanoid-inc.webp'
import figureHands from './aboutme/figure/07tGpPe3i4F68L0tyXv3myR-1.fit_lim.v1760032080.png'
import humanePin from './aboutme/aipin/humane-ai-pin-2.jpg'
import humaneAvif from './aboutme/aipin/3149228a35d0163499562fd248fe0605.avif'
import nexusDesign from './aboutme/cornell-nexus/nexus-design.png'
import nexusTeam from './aboutme/cornell-nexus/team.jpg'
import panSatellite from './aboutme/cornell-pan/pan-2a_0.jpg'
import panPhoto from './aboutme/cornell-pan/1711343033964.jpg'

const figurePhotos = [
  { src: figureHumanoid, alt: 'Figure humanoid robot' },
  { src: figureHands, alt: 'Figure robotic hands' },
]

const humanePhotos = [
  { src: humanePin, alt: 'Humane Ai Pin' },
  { src: humaneAvif, alt: 'Humane Ai Pin product' },
]

const nexusPhotos = [
  { src: nexusDesign, alt: 'Cornell Nexus design' },
  { src: nexusTeam, alt: 'Cornell Nexus team' },
]

const panPhotos = [
  { src: panSatellite, alt: 'PAN cube satellite' },
  { src: panPhoto, alt: 'PAN project' },
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
                                <h3 className={style.mediaHeading}>Figure</h3>
                                <p className={style.mediaCaption}> Figure Ai is designing a human-like robot that's mission is to help people.
                                    <br></br> <br></br>
                                    I was one of two electrical engineers who designed & engineered all of the electronics for the Figure 3 & 4&nbsp;
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
                                <h3 className={style.mediaHeading}>Humane</h3>
                                <p className={style.mediaCaption}>
                                    {"Humane AiPin's "}
                                    <a
                                        href="https://www.youtube.com/watch?v=9lNIwOOMVHk&t=177s"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={style.Link}
                                    >
                                        laser display
                                    </a>
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
                                    Founded a team to create an{" "}
                                    <a
                                        href="https://news.cornell.edu/stories/2022/12/students-design-robot-collect-microplastics-beaches"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={style.Link}
                                    >
                                        autonomous beach roomba
                                    </a>
                                    {" "}
                                    that collects macro+microplastics at Cornell.
                                </p>
                            </div>
                            <div className={style.mediaRow}>
                                {nexusPhotos.map(({ src, alt }, i) => (
                                    <img
                                        key={`nexus-${i}`}
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
                                <h3 className={style.mediaHeading}>Pathfinding Autonomous Navigation</h3>
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
                                    to space with the Cornell Space Systems Design Studio.
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
                        More personal projects found&nbsp;
                        <Link to="/projects" className={style.Link}>here!</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
