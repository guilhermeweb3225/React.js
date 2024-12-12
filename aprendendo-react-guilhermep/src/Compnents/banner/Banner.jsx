import './Banner.css'
function Banner(props){
    return(
        <div className="banner display-flex align-center"style={{backgroundImage:`url(/${props.image})`}}>
            <div className="conteiner">
                <div className="title-painel display-flex align-center justify-center">
                    <h1>{props.title}</h1>
                </div>
            </div>
        </div>
    )
}
export default Banner