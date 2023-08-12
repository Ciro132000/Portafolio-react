import { useEffect, useState } from "react";

import Carousel from "react-bootstrap/Carousel";

import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { Slideshow, Slide, TextoSlide } from "../slider";
import "./style.css";
import useScreenSize from "../../helpers/SizedScreen";

function Cetificates() {
  const [data, setData] = useState([]);


  const redirectToExternalLink = (externalLink) => {
    window.open(externalLink, '_blank');
  };


  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "Certificates");
    getDocs(queryCollection).then((res) => {
      const response = res.docs;
      const sendData = response.map((elemento, index) => {
        return elemento.data();
      });
      setData(sendData);
    });
  }, []);

  console.log(data);

  // Agrupando Items
  const Items = () => {
    const subarrays = [];

    let tamanoMaximo = 0;

    if (width > 1200) {
      tamanoMaximo = 4;
    } else if (width > 768) {
      tamanoMaximo = 3;
    } else if (width > 576) {
      tamanoMaximo = 3;
    } else {
      tamanoMaximo = 3;
    }

    for (let i = 0; i < data.length; i += tamanoMaximo) {
      subarrays.push(data.slice(i, i + tamanoMaximo));
    }

    return subarrays;
  };

  const { width, height } = useScreenSize();

  return (
    <div className="certificate-div">
      <h2 className="Title-h2">Certificaciones</h2>
	  <div className="container">
      <Carousel interval={2000}>
        {Items().map((certificateGroup) => (
          <Carousel.Item>
            <div key={certificateGroup.id} className="row row-slider-certicate">
              {certificateGroup.map((item) => (
                <div
                  key={item.id}
                  className="col-4 col-md-4 col-sm-4 col-xl-3 d-flex justify-content-center
		 								item-certificate aling-items-center"  onClick={() => redirectToExternalLink(item.certificateUrl)}
                >
                  <img
                    className="Icon-certificate"
                    src={item.certifier.logo}
                    alt=""
                  />

                  <div className="title-certificate">
					<p>
						{item.title}
					</p> 
				 </div>

                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

	  </div>
    </div>

    // <div className="Skills-div">
    //     <div className="container">
    //         <h2 className='Title-h2'>Certificaciones</h2>
    // 		<div className='slider-certificate'>
    // 			<Slideshow controles={false} >
    // 			{
    // 				Items().map(certificateGroup => (
    // 					<Slide>
    // 						<div key={certificateGroup.id} className='row row-slider'>
    // 							{certificateGroup.map(item => (
    // 								<div key={item.id} className='col-4 col-md-3 col-sm-4 col-xl-2 d-flex justify-content-center
    // 								item-certificate aling-items-center' >
    // 										<img className='Icon-certificate' src={item.certifier.logo} alt=""/>

    //                                         {/* <p className='title-certificate'>
    //                                         {item.title}
    //                                         </p> */}

    //                                         {/* <TextoSlide>
    //                                         <p>{item.title} </p>
    //                                         </TextoSlide> */}

    // 								</div>
    // 							))}
    // 						</div>
    // 					</Slide>
    // 				))
    // 			}
    // 			</Slideshow>
    // 		</div>
    //     </div>
    // </div>
  );
}

export default Cetificates;
