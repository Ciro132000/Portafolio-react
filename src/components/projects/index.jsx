import React from "react";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpRightFromSquare
} from "@fortawesome/free-solid-svg-icons";
import { getFirestore, getDoc, getDocs, collection } from "firebase/firestore";

import GiHub from "../../assets/github"
import "./style.css";

function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "projects");
    getDocs(queryCollection).then((res) => {
      const dataResponse = res.docs.map((element) => element.data());
      setData(dataResponse.reverse());
    });
  }, []);

  const filterObjetc = (obj) => {
    let valores = Object.values(obj);
    const newArray = [];
    for (let i = 0; i < valores.length; i++) {
      newArray.push(...valores[i]);
    }

    return newArray;
  };

  return (
    <div className="projetc-container">
      <h2 className="Title-h2" data-aos="flip-up">
        Proyectos
      </h2>
      {data.map((project, index) => (
        <div
          className={`${"Projects-card my-5 py-5"} ${
            index % 2 != 0 ? "Projects-card-right" : "Projects-card-left"
          }`}
          data-aos={`${index % 2 != 0 ? "fade-right" : "fade-left"}`}
        >
          <div className="container">
            <div
              className={`${"card-project"}  ${
                index % 2 != 0 ? "d-flex flex-row-reverse" : "row"
              }`}
            >
              <div className="col-12 col-md-6 col-sm-12">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="row-technologies">
                  {
                    filterObjetc(project.technologies).map((technologie) => (
                      <div className="technologies"> {technologie} </div>
                    ))
                  }
                </div>
                
              </div>
              <div className="col-12 col-md-6 col-sm-12">
                <img className="img-project" src={project.picture} alt="" />
                <div className="Projetc-iconos d-flex">
                  {project.links.deploy ? (
                    <div>
                        <a className="link-project" href={project.links.deploy} target="_blank">
                            <FontAwesomeIcon icon={faUpRightFromSquare} />
                            <span>Ir a la web</span>
                        </a>
                    </div>
                  ) : (
                    ""
                  )}
                  {project.links.back ? (
                    <div>
                        <a  className="link-project" href={project.links.back}>
                        <i className="fab fa-github"></i>
                            <span>Back End</span>
                        </a>
                    </div>
                  ) : (
                    ""
                  )}
                  {project.links.front ? (
                    <div>
                        <a  className="link-project" href={project.links.back}>
                        <i className="fab fa-github"></i>
                            <span>Front End</span>
                        </a>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
