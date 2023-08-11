import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
import './style.css'

import { getFirestore, doc, getDoc, getDocs, collection } from 'firebase/firestore'

function AboutMe(){

    const [data, setData] = useState({});

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'perfil');
        getDocs(queryCollection ).then(res=>{
            setData(res.docs[0].data())
        })
    }, [])


    return(
        <div className="container About-container my-5">
            <div className="row">
                <div className="col-md-5 col-sm-12 About-img">
                    <img src={data.profile_picture} alt="" />
                </div>
                <div className="col-md-7 col-sm-12">
                    <h2 className='Title-h2'>Sobre mí</h2>
                    <p>
                    { data.description }
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