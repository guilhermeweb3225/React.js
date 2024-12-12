import './ProjectList.css'
import likeWhite from "../../assets/like-white.svg"
import likeBlack from "../../assets/like-black.svg"
function ProjectList(){
    return(
        <div className="projectsList display-flex align-center flex-direction-column">
          <div className="projectsTest">
            <div className="textP">
                <h2>Follow Our Projects</h2>
                <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
            </div>
          </div>
          <div className="cardsProject">

            <din className="cards">
                <div className="imgsCards"></div>
                <div className="text">
                    <h3>Levi Cohen</h3>
                    <p>Levi Cohen</p>
                </div>
                <img src={likeBlack} height="20px"className="likes"/>
            </din>
            <din className="cards">
                <div className="imgsCards"></div>
                <div className="text">
                    <h3>Levi Cohen</h3>
                    <p>Levi Cohen</p>
                </div>
                    <img src={likeWhite} height="20px"className="likes"/>
            </din>
            <din className="cards">
                <div className="imgsCards"></div>
                <div className="text">
                    <h3>Levi Cohen</h3>
                    <p>Levi Cohen</p>
                </div>
                <img src={likeWhite} height="20px"className="likes"/>
            </din>
            <din className="cards">
                <div className="imgsCards"></div>
                <div className="text">
                    <h3>Levi Cohen</h3>
                    <p>Levi Cohen</p>
                </div>
                <img src={likeWhite} height="20px"className="likes"/>
            </din>
            <din className="cards">
                <div className="imgsCards"></div>
                <div className="text">
                    <h3>Levi Cohen</h3>
                    <p>Levi Cohen</p>
                </div>
                <img src={likeWhite} height="20px"className="likes"/>
            </din>
            <din className="cards">
                <div className="imgsCards"></div>
                <div className="text">
                    <h3>Levi Cohen</h3>
                    <p>Levi Cohen</p>
                </div>
                <img src={likeWhite} height="20px"className="likes"/>
            </din>
            <din className="cards">
                <div className="imgsCards"></div>
                <div className="text">
                    <h3>Levi Cohen</h3>
                    <p>Levi Cohen</p>
                </div>
                <img src={likeWhite} height="20px"className="likes"/>
            </din>
            <din className="cards">
                <div className="imgsCards"></div>
                <div className="text">
                    <h3>Levi Cohen</h3>
                    <p>Levi Cohen</p>
                </div>
                <img src={likeWhite} height="20px"className="likes"/>
            </din>
          </div>
        </div>
    )
}
export default ProjectList