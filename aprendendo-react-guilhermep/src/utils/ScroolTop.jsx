import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const scroolTop =  ()=>{
    const {voltarTop} = useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
    },[voltarTop])
    return null;
}
export default scroolTop