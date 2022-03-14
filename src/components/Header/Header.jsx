import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src='https://st4.depositphotos.com/1720323/30204/v/1600/depositphotos_302043794-stock-illustration-colored-silhouette-of-a-dancing.jpg'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>
                        {props.login}
                        <button onClick={props.logout}>log out</button>
                    </div>
                    : <NavLink to='/login'>login</NavLink>}
            </div>
        </header>
    );
};

export default Header;