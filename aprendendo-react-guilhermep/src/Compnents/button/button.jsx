import "./button.css"
import whitearrow from "../../assets/white-arrow.svg"
function button({ arrow, buttonStyle, loading, children, ...props }){
    return(
        <>
        <button className={`button ${buttonStyle}`} {...props}>
            {children } {arrow && <img src={whitearrow}/>}
        </button>
        </>
    )
}
export default button