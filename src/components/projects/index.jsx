import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare, faCodePullRequest } from '@fortawesome/free-solid-svg-icons'

import Porjects from '../../exports/proyectos'
import './style.css'

function Projects() {



    return(
        <div className=''>
            <h2 className='Title-h2'>Proyectos</h2>
            {
                Porjects.map((project,index)=>(
                    <div className={`${'Projects-card my-5'} ${ index %2 != 0 ? 'Projects-card-right':'Projects-card-left'}`}>
                        <div className="container">
                            <div className={ `${'card-project'}  ${ index %2 != 0 ? 'd-flex flex-row-reverse':'row'}` } >
                                <div className="col-12 col-md-6 col-sm-12">
                                    <h3>Titulo</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi omnis excepturi fuga. Ratione, deleniti! Blanditiis delectus qui placeat dignissimos doloremque dolor quae sint error enim est, sit veritatis nam saepe!
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
                                    <img className='img-project' src={project} alt="" />
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