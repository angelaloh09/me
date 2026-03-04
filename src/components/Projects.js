import React from 'react'
import Navbar from './Navbar'
import './styles/Styles.css'
import style from './styles/projects.module.css'
import { Link } from 'react-router-dom'
import noeLampImg from './tinkio-projects/noe-lamp/noe-lamp-img1.jpg'
import cloudVaseImg from './tinkio-projects/cloud-vase/img1.jpg'


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
]

const Projects = () => {
    return (
        <section className={`ideas ${style.projectsPage}`}>
            <Navbar/>
            <div className="bookshelf"> 
                <div className="cards title">
                    <h1>Projects</h1>
                    <br></br>
                </div>

                <div className={style.gallery}>
                  {projects.map((project, idx) => (
                    <Link key={idx} to={project.path} className={style.card}>
                      <div className={style.cardImageWrapper}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className={style.cardImage}
                        />
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
