import React from 'react'
import "./Contact_me.css"

const Contact_me = () => {
  return (
    // contact section
    <section className="contact-me" id="contact">
        <h2>Contact me</h2>
        <p className="contact-heading-para">Get in touch with me via social media.</p>
        <ul className="contact-social-list">
                <li className="social-link">
                    <a href="https://www.linkedin.com/in/khushinagaliya/">
                        <i class="fa-brands fa-linkedin-in linked-in"></i>
                        <p>LinkedIn</p>
                    </a>
                </li>
                <li className="social-link">
                    <a href="https://x.com/learnwithkhushi">
                        <i class="fa-brands fa-x-twitter twitter"></i>
                        <p>Twitter</p>
                    </a>
                </li>
                <li className="social-link">
                    <a href="mailto:nagaliyakhushi@gmail.com">
                        <i class="fa-solid fa-envelope"></i>
                        <p>Email</p>
                    </a>
                </li>
            </ul>
    </section>
  )
}

export default Contact_me