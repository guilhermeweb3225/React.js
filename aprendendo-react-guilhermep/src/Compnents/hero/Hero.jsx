import {useContext} from 'react'
import Button from "../button/button"
import {Link} from "react-router-dom"
import './Hero.css'
//CONTEXT
import {AppContext} from '../../contexts/Context'
function Hero(){
     const appContext=useContext(AppContext)
        const mudarLiguage=(pais)=>{
            appContext.setLanguages(pais)
        }
    return(
        <div className="hero display-flex align-center">
            <div className="hero-text">
               <h1>{appContext.languages[appContext.language].hero.title}</h1>
               <p>{appContext.languages[appContext.language].hero.subtitle}</p>
               <Link to="/About"><Button buttonStyle="secondary" arrow>{appContext.languages[appContext.language].hero.cta}</Button></Link>
            </div>
        </div>
    )
}
export default Hero