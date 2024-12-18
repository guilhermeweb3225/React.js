import { useState,useEffect } from "react"
import Button from "../button/button"
import './ContactForm.css'
function ContactForm(){
    const [dadosForm,setDadosForm]=useState({
        name:"",
        email:"",
        message:""
    })
    const [validForm,formNotValid]=useState(false)
    const [formLoading,setFormLoading]=useState(false)
    const [formEnviado,setFormEnviado]= useState(false)
    //identifica quando o botao é precionado e chama o evento de submit
    const indentificadorSubmit= async (e)=>{
        e.preventDefault()//impende q a pagina recarregue
        if(validForm){
            setFormLoading(true)
            try{
                const resposta= await fetch('https://api.web3forms.com/submit',
                    {
                        method:'POST',
                        headers:{'Content-Type':'application/json'},
                        body: JSON.stringify({...dadosForm,access_key:'98314b08-efe2-4110-bbe7-750539182c3c'})
                    }
                )
                if(resposta.ok){
                    setFormEnviado(true)
                }else{
                    alert('erro ao enviar formulario')
                }
            }catch(e){
                alert("error:", e)
            }finally{
                setFormLoading(false)
            }
        }
    }
    useEffect(()=>{
        const validandoEmail=(email)=>{
            const regexEmail= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            return regexEmail.test(email)
        }
        const valido=
        dadosForm.name.trim() && //verifica se o campo "name" não está vazio.
        dadosForm.email.trim() && // verifica se o campo "email" não está vazio.
        validandoEmail(dadosForm.email) && // Chama a função validandoEmail
        dadosForm.message.trim()// verifica se o campo "message" não está vazio.
        formNotValid(valido)
    },[dadosForm])
    const lidarComMudancas=(e)=>{
        const {name,value}= e.target
        setDadosForm({
            ...dadosForm,
            [name]:value
        })
    }
    return(
        <div className="dvBox1">
            <div className="dvBox2">
                <h2>We love meeting new people and helping them.</h2>
            </div>
            <div className="dvBox3">
                <form className="form"onSubmit={indentificadorSubmit}>
                    <div className="dvInputs">
                        <input
                            type="text"
                            name="name"
                            id="inputName"
                            placeholder="Nome"
                            onChange={lidarComMudancas}/>
                        <input
                            type="email"
                            name="email"
                            id="inputEmail"
                            placeholder="Email"
                            onChange={lidarComMudancas}/>
                    </div>

                    <div className="caixaDeTexto">
                        <textarea
                        name="message"
                        className="IdeiaEscrita"
                        id="message"
                        placeholder="Hello Iam Intrested in.."
                        rows={4}
                        onChange={lidarComMudancas}></textarea>
                    </div>

                    <div className="dvButton">
                        {formEnviado && <p className="primary-color">enviado</p>}
                        <Button id="bt"
                        buttonStyle="secondary"
                        type="submit"
                        disabled={!validForm || formLoading}>to send</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ContactForm