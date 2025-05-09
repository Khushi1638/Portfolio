import React from 'react'
import HTML5_img from "../../assets/HTML5.png"
import CSS_img from "../../assets/CSS-img.png"
import JS_img from "../../assets/JS.webp"
import React_img from "../../assets/React.png"
import Git_img from "../../assets/git-logo.png"
import Python_img from "../../assets/Python-img.webp"
import "./Skill.css"

const Skill = () => {
  return (
    <section className="skill-section" id="skill">
        <h2>Skills</h2>
        <ul className="skill-lists">
            <li>
                <img src={HTML5_img} alt="HTML5 Logo" />
                <p>HTML 5</p>
            </li>
            <li>
                <img src={CSS_img} alt="Css logo" className='css-img'/>
                <p>CSS</p>
            </li>
            <li>
                <img src={JS_img} alt="JavaScript logo" />
                <p>JavaScript</p>
            </li>
            <li>
                <img src={React_img} alt="react logo" />
                <p>React</p>
            </li>
            <li>
                <img src={Git_img} alt="git logo" className='git-img'/>
                <p>Git</p>
            </li>
            <li>
                <img src={Python_img} alt="Python logo" className='python-img'/>
                <p>Python</p>
            </li>
        </ul>   
    </section>
  )
}

export default Skill