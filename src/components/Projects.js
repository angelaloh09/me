import React from 'react'
import Navbar from './Navbar'
import './styles/Styles.css'
import style from './styles/projects.module.css'
import { Link } from 'react-router-dom'
import noeLampImg from './tinkio-projects/noe-lamp/noe-lamp-img1.jpg'
import cloudVaseImg from './tinkio-projects/cloud-vase/DSCF4753.jpg'
import vimputerImg from './tinkio-projects/vimputer/DSCF6306.jpg'

const projects = [
  {
    title: 'Noe Lamp',
    path: '/tinkio-projects/noe-lamp',
    image: noeLampImg,
  },
  {
    title: 'Cloud Vase',
    path: '/tinkio-projects/cloud-vase',
    image: cloudVaseImg,
  },
  {
    title: 'Vimputer',
    path: '/tinkio-projects/vimputer',
    image: vimputerImg,
    objectPosition: 'center top',
  },
]

const Projects = () => {
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
                  <img
                    src={project.image}
                    alt={project.title}
                    className={style.cardImage}
                    style={project.objectPosition ? { objectPosition: project.objectPosition } : undefined}
                  />
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
