import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './styles/Styles.css'
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

    const hobbyProjects = [
        {
            text: "3D Printed Lamp (i love aesthetic lamps with warm lighting)",
            subItems: [
                { name: "Noe Lamp", to: "/lamps/noe-lamp" },
                "Bino Lamp"
            ]
        },
        "Vimputer (a digital typewriter with vim interface and infinite battery life)"
    ];

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
        <section className='ideas'>
            <Navbar/>
            <div className={style.PagePadding}>
                <div className="cards title">
                    <h1>About Me</h1>
                    <br></br>
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
                    <br></br>
                    <p>More hobbyist projects:</p>
                    <ul>
                        {hobbyProjects.map((project, idx) => (
                            typeof project === 'string' ? (
                                <li key={idx}>{project}</li>
                            ) : (
                                <li key={idx}>
                                    {project.text}
                                    <ul className={style.subList}>
                                        {project.subItems.map((item, i) => (
                                            <li key={i}>
                                                {typeof item === 'string' ? (
                                                    item
                                                ) : (
                                                    <Link to={item.to} className={style.Link}>
                                                        {item.name}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            )
                        ))}
                    </ul>
                </div>

            </div>

        </section>
    )
}

export default AboutMe

