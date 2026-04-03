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
    },
    {
        title: 'How does the electric grid work?',
        status: 'open_question',
    },
    {
        title: 'How does Ikea create its furniture at the scale & price it does?',
        status: 'open_question',
    },
    {
        title: 'Weather modification & cloud seeding?!',
        status: 'open_question',
    },
    {
        title: "How does a zipper work? What's the history behind the design?",
        status: 'open_question',
    },
    {
        title: 'Vacuum chambers are so cool…',
        status: 'open_question',
    },
    {
        title: 'Why do humans have fingerprints?',
        status: 'open_question',
    },
    {
        title: "What's the optimization strategy for traffic lights across a dense city like NYC?",
        status: 'open_question',
    },
    {
        title: 'How do companies like Amazon optimize warehouses to ship millions of items daily?',
        status: 'open_question',
    },
    {
        title:
            'Noise-cancelling headphones are a super cool technology. Need to learn more about beam-forming.',
        status: 'open_question',
    },
    {
        title:
            'What different additive manufacturing processes exist today? What is the most ground-breaking 3D printing material possible?',
        status: 'open_question',
    },
    {
        title:
            'Always really fascinated by the Gates Foundation\'s "Reinvent the Toilet Challenge". How do you actually develop a waterless, off-grid toilet that sanitizes human waste in an efficient + sustainable manner? How would I design this toilet?',
        status: 'open_question',
    },
    {
        title:
            "Look into advanced geothermal drilling technologies & how these technologies tap into the earth's heat to generate renewable energy.",
        status: 'open_question',
    },
]

const Thoughts = () => {
    return (
        <section className="ideas">
            <Navbar />
            <div className="bookshelf">
                <div className="cards title">
                    <h1>Thoughts</h1>
                    <br />
                </div>

                <div className={style.thoughtBody}>
                    <p className={style.thoughtIntro}>
                    A living index of questions I’ve explored, am exploring, or want to return to.
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
