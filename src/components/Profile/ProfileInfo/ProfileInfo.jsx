import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import profileInfo from './../../../assets/images/profileInfo.jpeg'
import {NavLink} from "react-router-dom";
import pageUser from "../../../assets/images/user.png"
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (<div>
            <div className={s.pictureInfo}>
                <img alt='фон'
                     src={profileInfo}/>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    {props.profile.photos.large
                        ? <img src={props.profile.photos.large}/>
                        : <img src={pageUser}/>
                    }
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <div>
                    {props.profile.fullName}
                </div>
                <div>
                    {props.profile.aboutMe}
                </div>
                <div>
                    <div><NavLink to={'/news'}> {props.profile.contacts.facebook}</NavLink></div>
                    <div><NavLink to={'/news'}> {props.profile.contacts.vk}</NavLink></div>
                    <div><NavLink to={'/news'}> {props.profile.contacts.github}</NavLink></div>
                </div>
                <div>
                    lookingForAJob: {props.profile.lookingForAJob.toString()}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;