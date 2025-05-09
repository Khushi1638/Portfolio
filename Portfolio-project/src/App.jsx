import React from 'react'
import Header from "./Component/Header/Header.jsx"
import Home from './Component/Home/Home.jsx'
import Skill from './Component/Skills/Skill.jsx'
import About from './Component/About/About.jsx'
import Project from './Component/Project/Project.jsx'
import Contact_me from './Component/Contact/Contact_me.jsx'
import Footer from './Component/Footer/Footer.jsx'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home/>
        <Skill/>
        <About />
        <Project />
        <Contact_me />
      </main>
      <Footer />
    </>
    
  )
}

export default App