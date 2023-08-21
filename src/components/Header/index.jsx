import { useEffect, useState, useContext} from "react";
import Programador from "../../assets/svg/programador.svg";
import Balon from "../../assets/svg/Balon";
import "./style.css";
import { useSpring, animated } from 'react-spring';

import { DataContext } from '../../context/DataProvider'


import { getFirestore, getDoc, getDocs, collection } from "firebase/firestore";

function Header() {

  const data = useContext(DataContext).dataResponse[0]

  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  


  const [text, setText] = useState('');
  const content = data.names.concat(' '+data.lastName) ;
  const delay = 30; // Tiempo de espera entre cada letra (en milisegundos)

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < content.length) {
        currentText += content[currentIndex];
        setText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, []);



  // const [data, setData] = useState({});

  // useEffect(() => {
  //   const querydb = getFirestore();
  //   const queryCollection = collection(querydb, "perfil");
  //   getDocs(queryCollection).then((res) => {
  //     setData(res.docs[0].data());
  //   });

  // }, []);

  const animationProps = useSpring({
    
  });
  

  if(data != undefined)
  return (
    <div className={`${isAtTop? 'full-screen': 'container-header'}`} >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <h1
              data-aos="fade-right"
              data-aos-offset="600"
              data-aos-easing="ease-in-sine"
            >
              {text}
            </h1>
            <h2
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="1400"
              data-aos-easing="ease-in-sine"
              className="Header-h2"
            >
              {data.profession}
            </h2>

            <a className="btn btn-header" data-aos="zoom-out-down" data-aos-offset="300" data-aos-delay="1800" href="#contactame">
              Contáctame
            </a>
          </div>

          <div className="col-md-4 col-sm-12 balon">
            <Balon />
            <div className="shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Header;
