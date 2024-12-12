import Button from "../button/button"
import {Link} from "react-router-dom"
import './Hero.css'
function Hero(){
    return(
        <div className="hero display-flex align-center">
            <div className="hero-text">
               <h1>Let Your Home Be Unique</h1>
               <p>There are many variations of the passages of
               lorem Ipsum fromavailable, majority.</p>
               <Link to="/About"><Button buttonStyle="secondary" arrow>Get Started</Button></Link>
            </div>
        </div>
    )
}
export default Hero