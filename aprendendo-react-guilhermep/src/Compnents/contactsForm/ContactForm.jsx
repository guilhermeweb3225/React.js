import {Link} from "react-router-dom"
import Button from "../button/button"
import './ContactForm.css'
function ContactForm(){
    return(
        <div className="dvBox1">
            <div className="dvBox2">
                <h2>We love meeting new people and helping them.</h2>
            </div>
            <div className="dvBox3">
                <form className="dvInputs">
                    <input type="text" name="Nome" id="inputName" placeholder="Nome"/>
                    <input type="email" name="Email" id="inputEmail" placeholder="Email"/>
                </form>
                <div className="caixaDeTexto">
                    <textarea name="Ideia" className="IdeiaEscrita">Hello I am Interested in..</textarea>
                </div>
                <div className="dvButton">
                <Link to="/About"><Button buttonStyle="secondary" arrow>Get Started</Button></Link>
                </div>
            </div>
        </div>
    )
}
export default ContactForm