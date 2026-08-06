import React, { useEffect } from 'react'
import Navbar from './Navbar'
import './styles/Styles.css'
import style from './styles/projects.module.css'
import { Link } from 'react-router-dom'
import noeLampImg from './tinkio-projects/noe-lamp/noe-lamp-img2.jpg'
import noeLampHoverImg from './tinkio-projects/noe-lamp/noe-lamp-img1.jpg'
import cloudVaseImg from './tinkio-projects/cloud-vase/DSCF4753.jpg'
import cloudVaseHoverImg from './tinkio-projects/cloud-vase/img1.jpg'
import vimputerImg from './tinkio-projects/vimputer/DSCF6306.jpg'
import vimputerHoverImg from './tinkio-projects/vimputer/typewriter.jpeg'
import enzoStoolImg from './tinkio-projects/enzo-stool/DSCF6350.jpg'
import enzoStoolHoverImg from './tinkio-projects/enzo-stool/DSCF6358.jpg'
import moonstoneLampImg from './tinkio-projects/moonstone-lamp/moonstone-lamp-img1.jpg'
import moonstoneLampHoverImg from './tinkio-projects/moonstone-lamp/moonstone-lamp-img2.jpg'
import tinkioImg from './tinkio-projects/tinkio/tinkio-cover.jpg'

const projects = [
  {
    title: 'Tinkio',
    path: '/tinkio-projects/tinkio',
    image: tinkioImg,
  },
  {
    title: 'Vimputer',
    path: '/tinkio-projects/vimputer',
    image: vimputerImg,
    hoverImage: vimputerHoverImg,
    objectPosition: 'center top',
  },
  {
    title: 'Moonstone Lamp',
    path: '/tinkio-projects/moonstone-lamp',
    image: moonstoneLampImg,
    hoverImage: moonstoneLampHoverImg,
  },
  {
    title: 'Cloud Vase',
    path: '/tinkio-projects/cloud-vase',
    image: cloudVaseImg,
    hoverImage: cloudVaseHoverImg,
  },
  {
    title: 'Enzo Stool',
    path: '/tinkio-projects/enzo-stool',
    image: enzoStoolImg,
    hoverImage: enzoStoolHoverImg,
  },
  {
    title: 'Noe Lamp',
    path: '/tinkio-projects/noe-lamp',
    image: noeLampImg,
    hoverImage: noeLampHoverImg,
  },
]

const Projects = () => {
  useEffect(() => {
    document.documentElement.classList.add('projects-page-root')
    return () => document.documentElement.classList.remove('projects-page-root')
  }, [])

  return (
    <section className={`ideas ${style.projectsPage}`}>
      <Navbar />
      <div className={style.page}>
        <div className={`cards title ${style.heading}`}>
          <h1>Projects</h1>
          <br />
        </div>
        <div className={style.gallery}>
          {projects.map((project) => (
            <Link key={project.path} to={project.path} className={style.card}>
              <div className={style.cardImageWrapper}>
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={style.cardImage}
                      style={project.objectPosition ? { objectPosition: project.objectPosition } : undefined}
                    />
                    {project.hoverImage ? (
                      <img
                        src={project.hoverImage}
                        alt=""
                        aria-hidden="true"
                        className={`${style.cardImage} ${style.cardImageHover}`}
                      />
                    ) : null}
                  </>
                ) : (
                  <div
                    className={style.cardImagePlaceholder}
                    aria-label={`${project.title} (image coming soon)`}
                    role="img"
                  />
                )}
              </div>
              <h3 className={style.cardTitle}>{project.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
