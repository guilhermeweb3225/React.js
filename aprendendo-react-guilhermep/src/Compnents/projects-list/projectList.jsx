import {useContext} from 'react'
import { useState, useEffect } from 'react';
import './ProjectList.css'
import likeWhite from "../../assets/like-white.svg"
import likeBlack from "../../assets/like-black.svg"
//chamando APIs
import { APIsService } from "../../APIs/APIsService"
//CONTEXT
import { AppContext } from '../../contexts/Context';
function ProjectList() {
  const appContext=useContext(AppContext)
  const mudarLiguage=(pais)=>{
      appContext.setLanguages(pais)
  }
  const [projects, setProjects] = useState([]); // Inicializa com um array vazio

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respostaProject = await APIsService('projects');
        setProjects(respostaProject);
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
        setProjects([]);
      }
    };

    fetchData(); // Chama a função fetchData
  }, []); // O array vazio garante que o useEffect será executado apenas uma vez

  return (
    <div className="projectsList display-flex align-center flex-direction-column justify-center">
      <div className="projectsTest">
        <div className="textP">
          <h2> {appContext.languages[appContext.language].projects.title}</h2>
          <p>{appContext.languages[appContext.language].projects.subtitle}</p>
        </div>
      </div>
      <div className="cardsProject">
        {
          projects ?
            projects.map((project) => (
              <div key={project.id} className="cardsProject">
                <div className="cards">
                  <div className="imgsCards" style={{ backgroundImage: `url(${project.thumb})` }}
                  ></div>
                  <div className="text">
                    <h3>{project.title}</h3>
                    <p>{project.subtitle}</p>
                  </div>
                  <img
                    src={likeWhite}
                    height="20px"
                    alt="likes"
                    className="likes"
                  />
                </div>
              </div>
            )) :null
         }
      </div>
    </div>
  );
}

export default ProjectList