import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './styles/Styles.css'
import style from './styles/thoughts.module.css'

const Thoughts = () => {
    return (
        <section className="ideas">
            <Navbar />
            <div className="bookshelf">
                <div className="cards title">
                    <h1>Thoughts</h1>
                    <br />
                </div>

                <Link to="/thoughts/capacitive-touch" className={style.GridContainer}>
                    <span>5.26.24</span>
                    <span>What is capacitive touch? And how does it work?</span>
                </Link>
            </div>
        </section>
    )
}

export default Thoughts
