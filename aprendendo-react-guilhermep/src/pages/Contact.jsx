import Header from "../Compnents/Header/Header"
import Footer from "../Compnents/footer/footer"
import Button from "../Compnents/button/button"
import Banner from "../Compnents/banner/Banner"
import ContactForm from "../Compnents/contactsForm/ContactForm"
function Contact(){
    return(
        <>
        <Header/>
        <Button buttonStyle="primary" arrow>ola</Button>
        <Banner title="Contact" image="contact.svg"/>
        <ContactForm/>
        <Footer/>
        <h1>Contact</h1>
        </>
    )
}
export default Contact