

import { Slideshow, Slide } from '../slider';
import SVGS from '../../exports/conocimientos'
import './style.css'
import useScreenSize from '../../helpers/SizedScreen';

function Skills(){

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

		for (let i = 0; i < SVGS.length; i += tamanoMaximo) {
			subarrays.push(SVGS.slice(i, i + tamanoMaximo));
		}
		
		return subarrays;
	}

    const { width, height } = useScreenSize();

    return(
        <div className="Skills-div">
            <div className="container">
                <h2 className='Title-h2'>Conocimientos</h2>
				<div className='slider-skills'>
					<Slideshow controles={true} >
					{
						Items().map((imagen, index) => (
							<Slide>
								<div className='row'>
									{imagen.map((item, indeX) => (
										<div className='col-12 col-md-4 col-sm-6 col-xl-3 d-flex justify-content-center' >									
												<img className='Icon-Skill' src={item} alt=""/>
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