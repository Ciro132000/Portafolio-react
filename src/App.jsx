import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar/NavBar'
import AboutMe from './components/about_me'
import Contact from './components/contact'
import Jobs from './components/jobs'
import Projects from './components/projects'
import Skills from './components/skills'

function App() {
  
  return (
    <>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Jobs/>
      <Projects/>

      <Contact/>
    </>
  )
}

export default App
