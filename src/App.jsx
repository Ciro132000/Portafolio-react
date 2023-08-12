import React, {Suspense} from 'react'

import { QuerySnapshot } from 'firebase/firestore'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar/NavBar'
import AboutMe from './components/about_me'
import Contact from './components/contact'
import Jobs from './components/jobs'
import Projects from './components/projects'
import Skills from './components/skills'
import Cetificates from './components/certificates'
import ProjectsCards from './components/projects/projectsCards'
import Footer from './components/Footer'
//import { useFirebaseApp } from 'reactfire'


function App() {

  const Preloader = () => <div>Cargando...</div>;
  
  return (
    <div className='App-div'>
      <Suspense fallback={<Preloader />}>
        <Header/>
        <AboutMe/>
        <Skills/>
        <Jobs/>
        <Projects/> 
        {/* <ProjectsCards/> */}
        <Cetificates/>
        <Contact/>
        <Footer/>
      </Suspense>
    </div>
  )
}

export default App
