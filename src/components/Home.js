import React from 'react'
import bookshelf_img from './assets/bookshelf.png'
import { Link } from 'react-router-dom'
// import React,{useState} from 'react'
import './styles/Home.css'

const Home = () => {
    return (
        // TODO: need to figure out how window dynamic sizing!
        <section className='home'>

            <div className="home__box">
                <div className="home__content">
                    <h1 className='content__header'>angela loh</h1>
                    <nav>
                        <ul>
                            <li><Link to="/aboutme">About Me</Link></li>
                            <li><Link to="/bookshelf">Bookshelf</Link></li>
                            <li><Link to="/thoughts">Thoughts</Link></li>
                            <li><Link to="/photography">Photography</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                        </ul>
                    </nav>
                  
                </div>

                <div className="home__img">
                    <img src={bookshelf_img} alt="bookshelf"/>
                </div>

            </div>


        </section>
    )
}

export default Home
