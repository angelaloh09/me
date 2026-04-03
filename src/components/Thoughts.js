import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './styles/Styles.css'
import bookshelfStyle from './styles/bookshelf.module.css'
import style from './styles/thoughts.module.css'

/** Only items with `to` link to a written page. */
const THOUGHT_SECTIONS = [
    {
        category: 'Systems',
        items: [
            { title: 'How does the electric grid actually work?' },
            {
                title:
                    "What's the optimization strategy for traffic lights in a dense city?",
            },
            {
                title:
                    'How do companies like Amazon and Alibaba optimize warehouses to ship millions of items daily?',
            },
        ],
    },
    {
        category: 'Manufacturing',
        items: [
            {
                title:
                    'How does IKEA produce furniture at such scale and low cost?',
            },
            {
                title: 
                    'How are cardboard and plastics recycled and reprocessed at industrial scale?',
            },
            {
                title:
                    'Why is it difficult to 3D print with pure wood or sawdust, and what limits wood-based filaments today?',
            },
        ],
    },
    {
        category: 'Engineering',
        items: [
            {
                title: 'What is capacitive touch? And how does it work?',
                to: '/thoughts/capacitive-touch',
            },
            {
                title:
                    "How does a zipper work, and what's the history behind its design?",
            },
            {
                title:
                    'What is the history behind vacuum chambers. How have they been refined over time?',
            },
            {
                title:
                    'How do noise-canceling headphones work, especially techniques like beamforming?',
            },
        ],
    },
    {
        category: 'Energy & Bio',
        items: [
            {
                title:
                    'How does weather modification (e.g., cloud seeding) actually work?',
            },
            {
                title:
                    "How do advanced geothermal drilling technologies tap into the earth's heat for energy?",
            },
            { title: 'Why do humans have fingerprints?' },
            {
                title:
                    'How do you design a waterless, off-grid toilet that safely processes human waste?',
            }
        ],
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

                <div className={style.categoryWrap} aria-label="Questions by category">
                    {THOUGHT_SECTIONS.map((section, idx) => (
                        <section
                            key={section.category}
                            className={style.categorySection}
                            aria-labelledby={`thoughts-heading-${idx}`}
                        >
                            <div className={`cards title ${bookshelfStyle.yearSection}`}>
                                <h2 id={`thoughts-heading-${idx}`}>{section.category}</h2>
                            </div>
                            <ul className={style.entryList}>
                                {section.items.map((item) => (
                                    <li key={item.title} className={style.entryCard}>
                                        {item.to ? (
                                            <Link
                                                to={item.to}
                                                className={style.entryTitleLink}
                                            >
                                                {item.title}
                                            </Link>
                                        ) : (
                                            <span className={style.entryTitleStatic}>
                                                {item.title}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Thoughts
