import React from 'react'
import Navbar from '../Navbar'
import '../styles/Styles.css'
import style from '../styles/tinkio.module.css'

import coverImg from './tinkio/tinkio-cover.jpg'

const Tinkio = () => {
  return (
    <section className={`ideas ${style.tinkioSection}`}>
      <div className={style.heroPageBg} aria-hidden="true">
        <div className={style.bgGrid}>
          <div className={style.bgGridFill}>
            <span className={`${style.bgShape} ${style.bgShape1}`} />
            <span className={`${style.bgShape} ${style.bgShape2} ${style.bgShapeCircle}`} />
            <span className={`${style.bgShape} ${style.bgShape3}`} />
            <span className={`${style.bgShape} ${style.bgShape4} ${style.bgShapeCircle}`} />
            <span className={`${style.bgShape} ${style.bgShape5}`} />
          </div>
        </div>
        <div className={style.bgContentGlow} />
      </div>

      <Navbar />
      <div className={style.contentWrapper}>
        <div className={style.container}>
          <div className={style.layout}>
            <div className={style.imageColumn}>
              <div className={style.mainImageWrapper}>
                <img
                  src={coverImg}
                  alt="Tinkio"
                  className={style.mainImage}
                />
              </div>
            </div>

            <div className={style.textColumn}>
              <h1 className={style.title}>Tinkio</h1>
              <p className={style.body}>
                Visit{' '}
                <a
                  href="https://tinkio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.bodyLink}
                >
                  tinkio.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tinkio
