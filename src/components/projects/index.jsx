import React from 'react'
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare, faCodePullRequest } from '@fortawesome/free-solid-svg-icons'
import { getFirestore, getDoc, getDocs, collection } from 'firebase/firestore'

import Porjects from '../../exports/proyectos'
import './style.css'

function Projects() {

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
        <div className=''>
            
            <h2 className='Title-h2'>Proyectos</h2>
            {
                data.map((project,index)=>(
                    <div className={`${'Projects-card my-5'} ${ index %2 != 0 ? 'Projects-card-right':'Projects-card-left'}`}>
                        <div className="container">
                            <div className={ `${'card-project'}  ${ index %2 != 0 ? 'd-flex flex-row-reverse':'row'}` } >
                                <div className="col-12 col-md-6 col-sm-12">
                                    <h3>{project.title}</h3>
                                    <p>
                                        {project.description}
                                    </p>
                                    <div className='Projetc-iconos d-flex'>
                                        <div>
                                            <FontAwesomeIcon icon={faUpRightFromSquare} />
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faCodePullRequest} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-sm-12">
                                    <img className='img-project' src={project.picture} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Projects;