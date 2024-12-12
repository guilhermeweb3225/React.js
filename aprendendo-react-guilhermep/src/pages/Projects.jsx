import Header from "../Compnents/Header/Header"
import Footer from "../Compnents/footer/footer"
import Button from "../Compnents/button/button"
import Banner from "../Compnents/banner/Banner"
import ProjectList from "../Compnents/projects-list/projectList"
function Projects(){
    return(
        <>
        <Header/>
        <Button buttonStyle="primary" arrow>ola</Button>
        <Banner title="Projects" image="projects.svg"/>
        <ProjectList/>
        <Footer/>
        </>
    )
}
export default Projects