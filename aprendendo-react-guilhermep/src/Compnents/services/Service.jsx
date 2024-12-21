import {useContext} from 'react'
import "./Service.css"
//CONTEXT
import { AppContext } from '../../contexts/Context'
function Services(){
    const appContext=useContext(AppContext)
    const mudarLiguage=(pais)=>{
        appContext.setLanguages(pais)
    }
    return(
        <>
            <div className="dv-service">
                <div className="hText">
                    <h2>{appContext.languages[appContext.language].about.title}</h2>
                </div>
                <div className="paragrafosServices">
                    <p className="p-blue">{appContext.languages[appContext.language].about.p3}</p>
                <p className="p-black">{appContext.languages[appContext.language].about.p2}{appContext.languages[appContext.language].about.p3}</p>
                    <p className="p-black">{appContext.languages[appContext.language].about.p1}</p>
                </div>
            </div>
        </>
    )
}
export default Services