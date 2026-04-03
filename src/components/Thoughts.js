import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './styles/Styles.css'
import style from './styles/thoughts.module.css'

const STATUS_LABEL = {
    written: 'Written',
    in_progress: 'In Progress',
    open_question: 'Open Question',
    notes_only: 'Notes Only',
}

const ENTRIES = [
    {
        title: 'What is capacitive touch? And how does it work?',
        status: 'written',
        to: '/thoughts/capacitive-touch',
        teaser: 'How touchscreens detect your finger without moving parts.',
    },
    {
        title: 'Why do some interfaces feel more intuitive than others?',
        status: 'open_question',
        teaser: 'Affordance, motion, expectation — and why “obvious” is hard to ship.',
    },
    {
        title: 'What makes an object feel “high quality”?',
        status: 'in_progress',
        teaser: 'Materials, weight, and the stories we tell ourselves.',
    },
    {
        title: 'Quick notes on haptic feedback',
        status: 'notes_only',
        teaser: 'Scribbles from a weekend rabbit hole.',
    },
]

const Thoughts = () => {
    return (
        <section className="ideas">
            <Navbar />
            <div className={style.thoughtsPage}>
                <div className="cards title">
                    <h1>Thoughts</h1>
                    <br />
                </div>

                <div className={style.thoughtBody}>
                    <p className={style.thoughtIntro}>
                        A collection of questions I&apos;ve researched, partially explored, or want to return to.
                    </p>

                    <ul className={style.entryList} aria-label="Questions and write-ups">
                        {ENTRIES.map((entry) => {
                            const pillClass = `${style.statusPill} ${style[`status_${entry.status}`]}`
                            const titleRow = (
                                <div className={style.entryTitleRow}>
                                    {entry.status === 'written' && entry.to ? (
                                        <Link to={entry.to} className={style.entryTitleLink}>
                                            {entry.title}
                                        </Link>
                                    ) : (
                                        <span className={style.entryTitleStatic}>{entry.title}</span>
                                    )}
                                    <span className={pillClass}>{STATUS_LABEL[entry.status]}</span>
                                </div>
                            )

                            return (
                                <li key={entry.title} className={style.entryCard}>
                                    {titleRow}
                                    {entry.teaser ? (
                                        <p className={style.entryTeaser}>{entry.teaser}</p>
                                    ) : null}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Thoughts
