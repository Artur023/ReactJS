import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    return <div>
        <Paginator {...props}/>
        {
            props.users.map(u => <User user={u} key={u.id} {...props}/>)
        }
    </div>
}


export default Users;