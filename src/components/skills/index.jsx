
import { useEffect, useState } from 'react';

import { getFirestore, doc, getDoc, getDocs, collection } from 'firebase/firestore'
import { Slideshow, Slide } from '../slider';
import SVGS from '../../exports/conocimientos'
import './style.css'
import useScreenSize from '../../helpers/SizedScreen';

function Skills(){


	const [data, setData] = useState([]);

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = doc(querydb, 'skills', '4pPJ2DE4EoSUGzUT2Nok');
        getDoc(queryCollection ).then( async (res)=>{
			const resData = res.data()
			const sendData = filterObjetc(resData)
			const d = filterArray(sendData)
            setData(d)
        })
    }, [])

	const filterObjetc = (obj) =>{
		let valores = Object.values(obj);
		const newArray =[]
		for(let i=0; i< valores.length; i++){
			newArray.push(...valores[i])
		}

		return newArray;
	}

	const filterArray = (arr) => {
		return arr.filter((e) => e.picture != "" )
	}


    // Agrupando Items
    const Items = () => {
		const subarrays = [];
  
		let tamanoMaximo=0

		if(width>1200){
			tamanoMaximo = 4
		}else if(width>768){
			tamanoMaximo = 3
		}
		else if(width>576){
			tamanoMaximo = 2
		}else{
			tamanoMaximo = 1
		}

		for (let i = 0; i < data.length; i += tamanoMaximo) {
			subarrays.push(data.slice(i, i + tamanoMaximo));
		}
		
		return subarrays;
	}
	

    const { width, height } = useScreenSize();

    return(
        <div className="Skills-div">
            <div className="container">
                <h2 className='Title-h2'>Conocimientos</h2>
				<div className='slider-skills'>
					<Slideshow controles={false} autoplay={true} velocidad="2500" intervalo="5000" >
					{
						Items().map(imagen => (
							<Slide>
								<div key={imagen.id} className='row row-slider'>
									{imagen.map(item => (
										<div key={item.id} className='col-12 col-md-4 col-sm-6 col-xl-3 d-flex justify-content-center
										item-skill aling-items-center' >									
												<img className='Icon-Skill' src={item.picture} alt=""/>
										</div>
									))}
								</div>
							</Slide>
						))
					}
					</Slideshow>
				</div>
            </div>
        </div>
    )
}

export default Skills;