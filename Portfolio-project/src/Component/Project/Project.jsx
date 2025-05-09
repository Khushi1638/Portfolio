import React from 'react'
import "./Project.css"
import List_of_project from '../List_of_project/List_of_project'
import avni_page from "../../assets/avni-clone-page.png"
import coursera_clone_page from "../../assets/coursera-page.png"

const Project = () => {
  return (
    <section className="project-section" id="project">
        <h2>Projects</h2>
        <ul className="projects-list">
            <List_of_project 
            img = {avni_page}
            heading = {"Avni Page Clone With Personal Touch"}
            description= {"A beginner-friendly, responsive web page inspired by the Avni Project. Built using HTML and CSS to practice UI/UX principles and responsive design. This is not a full clone, but a simplified version created as a learning exercise."}
            />
            <List_of_project 
            img = {coursera_clone_page}
            heading = {"Coursera Clone Page"}
            description = {"Coursera Clone – Web Page A simple static clone of the Coursera homepage built using HTML and CSS. This project replicates the layout and design of the original Coursera landing page for practice and learning purposes. No backend or interactivity included."}/>
        </ul>
    </section>
  )
}

export default Project