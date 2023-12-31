
import './style.css'

function Jobs(){


    return(
        <div className="Jobs-container container">
            <h2 className='Title-h2' data-aos="flip-up">Experiencia</h2>
            <div className='Jobs-experience my-5'>
                <div className="row Job-item">
                    <div className="col-5 col-company" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                        <div className='Company'>
                            <h3>
                                Promolider org
                            </h3>
                            <span>Enero 2022 - Mayo 2022</span>
                        </div>
                    </div>
                    <div className="col-2 pointer-line d-flex justify-content-center" data-aos="zoom-in">
                        <span>
                            <div className='circle'></div>
                        </span>
                    </div>
                    <div className="col-5" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                        <div className='Job-title'>
                            <h3>
                                Front End Developer
                            </h3>
                            <ul>
                                <li>Construcción de aula virtual</li>
                                <li>Consumo de API´s</li>
                                <li>Manejo de VUEJS</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )


}

export default Jobs;