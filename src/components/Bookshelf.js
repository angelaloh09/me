import React from 'react'
import Navbar from './Navbar'
import './styles/Styles.css'
import style from './styles/bookshelf.module.css'

const Bookshelf = () => {
    return (
        <section className='ideas'>
            <Navbar/>
            <div className="bookshelf bookshelf--narrow">
                <div className="cards title">
                    <h1>Bookshelf</h1>
                    <br></br>
                </div>
                <div className={`cards title ${style.yearSection}`}>
                    <h2>2026</h2>
                </div>
                {[
                    {title: "Death On The Nile", author: "Agatha Christie"},
                    {title: "Super Nintendo", author: "Keza MacDonald"},
                    {title: "Where the Crawdads Sing", author: "Delia Owens"},
                    {title: "Poor Charlie's Almanack", author: "Charlie Munger"},
                    {title: "Song of Achilles", author: "Madeline Miller"},
                    {title: "Circe", author: "Madeline Miller"},
                    {title: "Breakneck: China's Quest to Engineer the Future", author: "Dan Wang"},
                ].map((book, idx) => (
                    <div key={idx} className={style.GridContainer}>
                        <span>{book.title}</span>
                        <span>{book.author}</span>
                    </div>
                ))}
                <div className={`cards title ${style.yearSection}`}>
                    <h2>2025</h2>
                </div>
                {[
                    {title: "The Alchemist", author: "Paulo Coelho"},
                    {title: "Open", author: "Andre Agassi"},
                    {title: "Chip War", author: "Chris Miller"},
                    {title: "Ultra-processed People", author: "Chris van Tulleken"},
                    {title: "The Art of Running", author: "Andrea Marcolongo"},
                    {title: "Galapagos", author: "Kurt Vonnegut"},
                    {title: "Elon Musk", author: "Walter Isaacson"},
                    {title: "Norwegian Wood", author: "Haruki Murakami" },
                    {title: "The Book Thief", author: "Markus Zusak"},
                ].map((book, idx) => (
                    <div key={idx} className={style.GridContainer}>
                        <span>{book.title}</span>
                        <span>{book.author}</span>
                    </div>
                ))}
                <div className={`cards title ${style.yearSection}`}>
                    <h2>2024</h2>
                </div>
                {[
                    { title: "How to Avoid a Climate Disaster", author: "Bill Gates" },
                    { title: "Tesla: Inventor of the Electrical Age", author: "W. Bernard Carlson"},
                    { title: "Born a Crime", author: "Trevor Noah"},
                    { title: "Principles", author: "Ray Dalio"},
                    { title: "What You Are Looking For Is in the Library", author: "Michiko Aoyama" },
                    { title: "Three Body Problem", author: "Liu Cixin" },
                    { title: "Dark Forest", author: "Liu Cixin"},
                    { title: "Death's End", author: "Liu Cixin"},
                    { title: "The Idea Factory", author: "Jon Gertner" },
                    { title: "Lean In", author: "Sheryl Sandberg" },
                    { title: "Bad Blood", author: "John Carreyrou" }
                ].map((book, idx) => (
                    <div key={idx} className={style.GridContainer}>
                        <span>{book.title}</span>
                        <span>{book.author}</span>
                    </div>
                ))}

            </div>

        </section>
    )
}

export default Bookshelf
