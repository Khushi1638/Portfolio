import React from 'react'
import "./Home.css"
import myImage from "../../assets/myImage.png"
const Home = () => {
  return (
    // home section
    <section className="hero-section" id="home">
        <div>
            <h1>
                <span className='greeting'>Hi I am</span>
                <span className='name'>Khushi Nagaliya</span>
                <span className='role'>Front End Developer</span>
            </h1>
            <ul className="social-link-list">
                <li>
                    <a href="https://www.linkedin.com/in/khushinagaliya/"><i class="fa-brands fa-linkedin-in linked-in"></i></a>
                </li>
                <li>
                    <a href="https://github.com/Khushi1638"><i class="fa-brands fa-github github"></i></a>
                </li>
                <li>
                    <a href="https://x.com/learnwithkhushi"><i class="fa-brands fa-x-twitter twitter"></i></a>
                </li>
            </ul>
            <button className='resume-btn'>Resume</button>
            <button className='download-resume-btn'>Download Resume</button>
        </div>
        <div className='my-image-container'>
            <img src={myImage} alt="animated version of me " className='my-image'/>
        </div>
    </section>
  )
}

export default Home