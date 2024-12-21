import {useContext} from 'react'
import {Link} from 'react-router-dom'
//assets
import './footer.css'
import logo from '../../assets/dnc-logo.svg'
import usa from '../../assets/usa-icon.svg'
import brasil from '../../assets/brasil-icon.svg'
import face from '../../assets/face-icon.svg'
import insta from '../../assets/insta.svg'
import linke from '../../assets/linke.svg'
import twiter from '../../assets/twiter.svg'
//CONTEXT
import { AppContext } from "../../contexts/Context"
function footer(){
    const appContext= useContext(AppContext)
    const mudarLingua=(pais)=>{
        appContext.setLanguage(pais)
    }
    return(
        <footer>
            <div className="conteiner element-pai-footer grid-template-colum justify-space-between">
                <div className="element-pai-media">
                    <Link to="/"><img src={logo}/></Link>
                    <p>{appContext.languages[appContext.language].general.footerLogoText}</p>
                    <div className="display-flex align-center justify-space-between social-media">
                        <a href="#" target="_blank"><img src={face} /></a>
                        <a href="#" target="_blank"><img src={insta} /></a>
                        <a href="#" target="_blank"><img src={linke} /></a>
                        <a href="#" target="_blank"><img src={twiter} /></a>
                    </div>
                </div>
                <div className="Pages-footer">
                    <h2>{appContext.languages[appContext.language].general.pages}</h2>
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/Projects">Projects</Link>
                </div>
                <div className="conatato">
                    <h2>{appContext.languages[appContext.language].general.contact}</h2>
                    <p>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 
                    </p>
                    <p>suporte@escoladnc.com.br</p>
                    <p>(19) 99187-4342</p>
                </div>
            </div>
            <div className="copy">
                <p>Copyright © DNC - 2024</p>
                <Link ><img src={brasil} onClick={()=>mudarLingua('br')}/></Link>
                <Link ><img src={usa} onClick={()=>mudarLingua('en')}/></Link>
            </div>
        </footer>
    )
}
export default footer