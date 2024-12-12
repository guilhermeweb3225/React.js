import {Link} from 'react-router-dom'
import { useState } from 'react'
//assets
import './Header.css'
import logo from '../../assets/dnc-logo.svg'
//components
import Button from "../button/button"
function Header(){
    const [menuAberto,menuFechado]=useState(false)
    const fechamento=()=>{
        menuFechado(!menuAberto)
    }
    return(
        <header>
            <div className="conteinerm div-princip">
                <div className="align-center display-flex justify-space-around">
                    <Link to="/"><img src={logo} /></Link>
                    <div className="mobileMenu">
                        <Button buttonStyle="secondary" onClick={()=> menuFechado(!menuAberto)}>
                            Menu
                        </Button>
                    </div>
                <nav className={`${menuAberto ? 'open':''}`}>
                    <button className="mobileMenu closeBTN"onClick={fechamento}>X</button>
                    <ul className="display-flex align-center">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/Projects">Project</Link></li>
                    </ul>
                </nav>
                </div>
            </div>
        </header>
    )
}
export default Header