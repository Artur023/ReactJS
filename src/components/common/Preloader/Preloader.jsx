import React from "react";
import loader from "../../../assets/images/loader.gif"
import s from "./Preloader.module.css"

const Preloader = (props) => {
    return <div className={s.preloader}>
        <img src={loader}/>
    </div>
}
export default Preloader;