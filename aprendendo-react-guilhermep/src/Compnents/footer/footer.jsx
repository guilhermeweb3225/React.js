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
function footer(){
    return(
        <footer>
            <div className="conteiner element-pai-footer grid-template-colum justify-space-between">
                <div className="element-pai-media">
                    <Link to="/"><img src={logo}/></Link>
                    <p>A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
                    <div className="display-flex align-center justify-space-between social-media">
                        <a href="#" target="_blank"><img src={face} /></a>
                        <a href="#" target="_blank"><img src={insta} /></a>
                        <a href="#" target="_blank"><img src={linke} /></a>
                        <a href="#" target="_blank"><img src={twiter} /></a>
                    </div>
                </div>
                <div className="Pages-footer">
                    <h2>Pages</h2>
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/Projects">Projects</Link>
                </div>
                <div className="conatato">
                    <h2>Contact</h2>
                    <p>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 
                    </p>
                    <p>suporte@escoladnc.com.br</p>
                    <p>(19) 99187-4342</p>
                </div>
            </div>
            <div className="copy">
                <p>Copyright © DNC - 2024</p>
                <Link to="/"><img src={brasil} /></Link>
                <Link to="/"><img src={usa} /></Link>
            </div>
        </footer>
    )
}
export default footer