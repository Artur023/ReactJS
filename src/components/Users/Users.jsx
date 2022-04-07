import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import s from './Users.module.css'

const Users = (props) => {
    return <div>
        <div className={s.paginator}><Paginator {...props}/></div>
        {
            props.users.map(u => <User user={u} key={u.id} {...props}/>)
        }
    </div>
}


export default Users;