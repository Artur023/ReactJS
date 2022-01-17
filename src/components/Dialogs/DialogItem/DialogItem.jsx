import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (<div className={s.dialog + ' ' + s.active}>

        <div className={s.avatar}>
            <img src='https://pixelbox.ru/wp-content/uploads/2018/02/tumblr_okgix22aav1rpwm80o1_250.png'/>
        </div>
        <NavLink to={path}
                 className={isActive => isActive.isActive ? s.active : s.item}> {props.name} </NavLink>
    </div>)
}

export default DialogsItem;
