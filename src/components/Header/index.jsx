import { useEffect, useState } from "react";
import Programador from "../../assets/programador.svg";
import Balon from "../../assets/svg/Balon";
import "./style.css";

import { getFirestore, getDoc, getDocs, collection } from "firebase/firestore";

function Header() {

  const [data, setData] = useState({});

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "perfil");
    getDocs(queryCollection).then((res) => {
      setData(res.docs[0].data());
    });

  }, []);

  return (
    <div className="fd">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <h1
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              {data.names} {data.lastName}
            </h1>
            <h2
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="Header-h2"
            >
              {data.profession}
            </h2>

            <button className="btn btn-header" data-aos="zoom-out-down">
              Contáctame
            </button>
          </div>

          <div className="col-md-4 col-sm-12 balon">
            <Balon />
            <div className="shadow"></div>
          </div>

          {/* <div className="col-md-4 col-sm-12 programador">
                        <img src={Programador} />
                    </div> */}
        </div>
      </div>
    </div>
  );
}



export default Header;
