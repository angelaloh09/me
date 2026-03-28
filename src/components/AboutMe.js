import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import bookshelf_img from './assets/bookshelf.png'
import './styles/Home.css'
import style from './styles/aboutme.module.css'

const AboutMe = () => {
    const professionalProjects = [
        {
            text: "at Figure, a humanoid robotics company.",
            linkText: "Robotic hands",
            url: "https://www.youtube.com/watch?v=IlG3X8zRI2I&t=9",
            linkPosition: "start"
        },
        {
            text: "Humane AiPin's",
            linkText: "laser display",
            url: "https://www.youtube.com/watch?v=9lNIwOOMVHk&t=177s",
            linkPosition: "middle"
        },
        {
            text: "Founded a team to create an",
            linkText: "automous beach roomba",
            url: "https://news.cornell.edu/stories/2022/12/students-design-robot-collect-microplastics-beaches",
            additionalText: "that collects macro+microplastics at Cornell.",
            linkPosition: "middle"
        },
        {
            text: "Shipped",
            linkText: "two cube satellites",
            url: "https://www.spacecraftresearch.com/pan",
            additionalText: "to space with the Cornell Space Systems Design Studio.",
            linkPosition: "middle"
        }
    ];

    // const hobbyProjects = [
    //     {
    //         text: "3D Printed Lamps (i love aesthetic lamps with warm lighting)",
    //         subItems: [
    //             { name: "Noe Lamp", to: "/tinkio-projects/noe-lamp" },
    //             "Bino Lamp"
    //         ]
    //     },
    //     "Vimputer (a digital typewriter with vim interface and infinite battery life)"
    // ];

    const renderProjectItem = (project, index) => {
        if (project.linkPosition === "start") {
            return (
                <li key={index}>
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.Link}
                    >
                        {project.linkText}
                    </a>
                    {" "}{project.text}
                </li>
            );
        } else {
            return (
                <li key={index}>
                    {project.text}{" "}
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.Link}
                    >
                        {project.linkText}
                    </a>
                    {project.additionalText && <> {project.additionalText}</>}
                </li>
            );
        }
    };

    return (
        <section className="home">
            <Navbar/>
            <div className={`home__box ${style.aboutHomeBox}`}>
                <div className={`home__content ${style.aboutColumn}`}>
                    <div className="cards title">
                        <h1>About Me</h1>
                        <br />
                    </div>
                    <div className={style.Writing}>
                        <p>Hi there!</p>
                        <p>
                            I'm a hardware engineer who wants to make tinkering on fun projects accessible to all!
                            I have a curiosity for making the world a better place, and I'm always looking for new ways to do so.
                            I love learning about how things work. Here are some of the things I've worked on:
                        </p>
                        <ul>
                            {professionalProjects.map(renderProjectItem)}
                        </ul>
                        <br />
                        <p>
                            More personal projects found{' '}
                            <Link to="/projects" className={style.Link}>here!</Link>
                        </p>
                    </div>
                </div>
                <div className="home__img">
                    <img src={bookshelf_img} alt="Bookshelf illustration" />
                </div>
            </div>
        </section>
    )
}

export default AboutMe

