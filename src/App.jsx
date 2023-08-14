import React, {Suspense, useContext} from 'react'

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
import Footer from './components/Footer'
//import { useFirebaseApp } from 'reactfire'


import { DataContext } from './context/DataProvider'
import Loading from './components/loading/index'



function App() {

  const {loading} = useContext(DataContext)
  console.log(loading)

  if(loading){
    return(
      <Loading/>
    )
  }else{
    return (
        <div className='App-div'>
            <Header/>
            <AboutMe/>
            <Skills/>
            <Jobs/>
            <Projects/>
            <Cetificates/>
            <Contact/>
            <Footer/>
        </div>
    )
  }
}

export default App
