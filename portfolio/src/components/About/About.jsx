import "./About.css"
import headshot from "./img/linkedin_picture.png"
import html from "./img/html.png"
import css from "./img/css.png"
import react_png from "./img/react.png"
import javascript from "./img/javascript.png"
import c from "./img/c.png"
import git from "./img/git.png"
import python from "./img/python.png"
import express from "./img/express.png"
import nodejs from "./img/nodejs.png"
import sql from "./img/sql.png"

function About() {
    return (
        <section id="about" className="about">
          <h1>About</h1>
          <img src={headshot} alt="linkedin image" className="image"/>
          <p className="text">
            Hi hi! I&#39;m Ignacio, a computer engineer who loves software development. 
            I am fully committed to embark on the lifelong learning journey that programming presents, excited to learn and hone the 
            skills necessary to find a balance between professional success as well as creative satisfaction. The realization 
            that coding strikes the perfect combination of technical knowledge, critical thinking, and collaboration while leaving 
            the door open for personal expression is something truly magical that keeps me motivated to learn and experiment as 
            much as I can. When I am not clacking keys, I try to stay fit, spend time with my friends, and play video games.
          </p>
          <div className="skills">
            <div className="skillsRow left">
                <div className="skillItem">
                    <img src={html} alt="html logo" className="htmlSize"/>
                </div>
                <div className="skillItem">
                    <img src={css} alt="css logo" className="cssSize"/>
                </div>
                <div className="skillItem">
                    <img src={react_png} alt="react.js logo" className="reactSize"/>
                </div>
            </div>
            <div className="skillsRow left">
                <div className="skillItem">
                    <img src={c} alt="c logo" className="cSize"/>
                </div>
                <div className="skillItem">
                    <img src={python} alt="python logo" className="pythonSize"/>
                </div>
                <div className="skillItem">
                    <img src={git} alt="git logo" className="gitSize"/>
                </div>
                <div className="skillItem">
                    <img src={javascript} alt="javascript logo" className="jsSize"/>
                </div>
            </div>
            <div className="skillsRow">
                <div className="skillItem">
                    <img src={nodejs} alt="node.js logo" className="nodeSize"/>
                </div>
                <div className="skillItem">
                    <img src={express} alt="express.js logo" className="expSize"/>
                </div>
                <div className="skillItem">
                    <img src={sql} alt="sql logo" className="sqlSize"/>
                </div>
            </div>
          </div>
        </section>
    )
}

export default About