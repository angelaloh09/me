import React from 'react'
import Navbar from '../Navbar'
import '../styles/Styles.css'
import style from '../styles/vimputer.module.css'

const Vimputer = () => {
  return (
    <section className="ideas">
      <Navbar />
      <div className="bookshelf">
        <div className="cards title">
          <h1>Vimputer</h1>
          <br />
        </div>
        <div className="cards">
          <p className={style.placeholderCopy}>
            Details and photos coming soon.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Vimputer
