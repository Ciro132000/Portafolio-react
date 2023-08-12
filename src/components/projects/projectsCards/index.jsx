import React from 'react'
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare, faCodePullRequest } from '@fortawesome/free-solid-svg-icons'
import { getFirestore, getDoc, getDocs, collection } from 'firebase/firestore'

import './style.css'

function ProjectsCards() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'projects');
        getDocs(queryCollection ).then( (res)=>{
            const dataResponse =  res.docs.map((element) => element.data() )
            setData(dataResponse.reverse())
        })
    }, [])

    return(
        <div className='container'>
            
            <h2 className='Title-h2'>Proyectos</h2>
            <div className="row ">
                {
                    data.map((project,index)=>(
                            <div className="col-12 col-sm-6 col-md-4 my-3">
                                <div className="card cards-projects">
                                <img className="card-img-top" src={project.picture} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <div className='links'>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>

                                    </div>
                                </div>
                                </div>
                            </div>
                    ))
                }

            </div>
        </div>
    )
}

export default ProjectsCards;