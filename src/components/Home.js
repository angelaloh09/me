import React from 'react'
import bookshelf_img from './assets/bookshelf.png'
import TransitionLink from './TransitionLink'
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
                            <li><TransitionLink to='/aboutme'>About Me</TransitionLink></li>
                            <li><TransitionLink to='/bookshelf'>Bookshelf</TransitionLink></li>
                            <li><TransitionLink to='/thoughts'>Thoughts</TransitionLink></li>
                            <li><TransitionLink to='/photography'>Photography</TransitionLink></li>
                            <li><TransitionLink to='/projects'>Projects</TransitionLink></li>
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
