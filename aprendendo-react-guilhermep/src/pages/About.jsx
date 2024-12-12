import Header from "../Compnents/Header/Header"
import Footer from "../Compnents/footer/footer"
import Button from "../Compnents/button/button"
import Banner from "../Compnents/banner/Banner"
import Services from "../Compnents/services/Service"
function About(){
    return(
        <>
        <Header/>
        <Button buttonStyle="primary" arrow>ola</Button>
        <Banner title="About"image="about.svg"/>
        <Services/>
        <Footer/>
        </>
    )
}
export default About