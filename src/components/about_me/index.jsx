import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
import foto from '../../assets/images/foto (1).png'
import './style.css'

function AboutMe(){
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 col-sm-12">
                    <img className='About-img' src={foto} alt="" />
                </div>
                <div className="col-md-7 col-sm-12">
                    <h2 className='Title-h2'>Sobre mí</h2>
                    <p>
                    Soy egresado de la carrera de Ingeniería de sistemas e informática en la Universidad Tecnológica del Perú de la ciudad de Lima. Me apasiona el desarrollo web por la parte del Front End y también estoy comenzando con el desarrollo Back End. Soy una persona autodidacta, honesta, tranquila y que busca superarse cada día.
                    </p>

                    <button className='About-button'>
                        <FontAwesomeIcon icon={faCloudArrowDown} className='About-FontAwesomeIcon'/>
                        Descargar mi CV
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;