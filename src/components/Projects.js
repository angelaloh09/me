import React from 'react'
import Navbar from './Navbar'
import './styles/Styles.css'
import style from './styles/thoughts.module.css'
import { Link } from 'react-router-dom'


const Projects = () => {
    return (
        <section className='ideas'>
            <Navbar/>
            <div className="bookshelf"> 
                <div className="cards title">
                    <h1>Projects</h1>
                    <br></br>
                </div>

                <Link to='/lamps/noe-lamp' className={style.GridContainer}>
                    <span>Noe Lamp</span>
                    <span>Designed for my roommates. Capturing what it felt like to live on the lovely Noe Street.</span>
                </Link>
            </div>

        </section>
    )
}

export default Projects
