import Header from "../Compnents/Header/Header"
import Footer from "../Compnents/footer/footer"
import Hero from "../Compnents/hero/Hero"
import ProjectsList from "../Compnents/projects-list/projectList"
function Home() {
    return(
        <>
            <Header/>
            <Hero/>
            <ProjectsList/>
            <Footer/>
        </>
    )
}
export default Home