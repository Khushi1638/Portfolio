import React from 'react'
import about_me_img from "../../assets/about_me_img.png"
import "./About.css"

const About = () => {
  return (
    // About section
    <section className="about-section" id="about">
        <h2>About Me</h2>
        <div className="about-img-txt-sec">
            <div className="about-me-img">
                <img src={about_me_img} alt="animated charater of me" />
            </div>
            <div className="about-me-txt">
                <p>Hello! I'm Khushi Nagaliya, an aspiring Front-End Developer based in Delhi. I enjoy building clean, responsive, and user-friendly websites using HTML, CSS, JavaScript, and React. I'm currently focused on sharpening my skills through real-world projects as I prepare for a career in tech.

                    I hold a degree in Computer Applications (BCA) and have a strong interest in creating meaningful digital experiences. I'm passionate about continuous learning, improving my problem-solving abilities, and becoming a confident, job-ready developer.

                    When I’m not coding, you’ll probably find me enjoying a good romance novel or exploring something new to learn.
                </p>
                <button className='download-resume-btn'>Download Resume</button>
            </div>
        </div>
        
    </section>
  )
}

export default About