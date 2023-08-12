import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
import './style.css'

import { getFirestore, doc, getDoc, getDocs, collection } from 'firebase/firestore'

function AboutMe(){

    const [data, setData] = useState({});


    const downloadFile = (fileUrl) => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = true;
        link.target = '_blank';
        link.click();
    };

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
                <div className="col-md-5 col-sm-12 About-img" data-aos="zoom-in">
                    <img src={data.profile_picture} alt="" />
                </div>
                <div className="col-md-7 col-sm-12" data-aos="zoom-in-up">
                    <h2 className='Title-h2'>Sobre mí</h2>
                    <p>
                    { data.description }
                    </p>

                    <button className='About-button' onClick={() => downloadFile('https://res.cloudinary.com/dwpmiqt1p/image/upload/v1691800742/Portafolio/cv/CV_CANDIOTTI_CIRO.pdf')}>
                        <FontAwesomeIcon icon={faCloudArrowDown} className='About-FontAwesomeIcon'/>
                        Descargar mi CV
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;