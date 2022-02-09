import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import UsersImage from '../../../assets/images/user.png'


const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (<div className={s.dialog + ' ' + s.active}>

        <div className={s.avatar}>
            <img src={UsersImage}/>
        </div>
        <NavLink to={path}
                 className={isActive => isActive.isActive ? s.active : s.item}> {props.name} </NavLink>
    </div>)
}

export default DialogsItem;
