import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Post from "../Profile/MyPosts/Post/Post";


const Navbar = (props) => {

    let topicItem =
        props.tops.map(t =>
            <div className={s.item}>
                <NavLink to={t.to}
                         className={navData => navData.isActive ? s.active : s.item}>{t.topic}</NavLink>
            </div>)

    return (
        <nav className={s.nav}>
            {topicItem}
            <div className={s.item + ' ' + s.friends}>
                <NavLink to='/friends' className={navData => navData.isActive ? s.active : s.item}>Friends</NavLink>
            </div>
            <div className={s.bestFriends}>
                <div>
                    <img src='https://cs4.pikabu.ru/post_img/2014/05/05/10/1399307834_282679763.gif'/>
                </div>
                <div>
                    <img src='https://cs4.pikabu.ru/post_img/2014/05/05/10/1399307834_282679763.gif'/>
                </div>
                <div>
                    <img src='https://cs4.pikabu.ru/post_img/2014/05/05/10/1399307834_282679763.gif'/>
                </div>
            </div>


            {/*<div className={s.item}>
                <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
            <div className={s.item + ' ' + s.friends}>
                <NavLink to='/friends' className={navData => navData.isActive ? s.active : s.item}>Friends</NavLink>
            </div>*/}

        </nav>
    );
};

export default Navbar;