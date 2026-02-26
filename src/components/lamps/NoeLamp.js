import React from 'react'
import Navbar from '../Navbar'
import '../styles/Styles.css'
import style from '../styles/aboutme.module.css'

const NoeLamp = () => {
    return (
        <section className='ideas'>
            <Navbar/>
            <div className={style.PagePadding}>
                <div className="cards title">
                    <h1>Noe Lamp</h1>
                    <br></br>
                </div>
                
                <div className={style.Writing}>
                    <p>
                        A 3D printed lamp with warm, aesthetic lighting.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default NoeLamp
