import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import pageUser from "../../../assets/images/user.png"
import ProfileStatusWithHook from "./ProfileStatusWhisHooks";
import {Link, NavLink} from "react-router-dom";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    let onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (<div>
            <div className={s.pictureInfo}>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    {props.profile.photos.large
                        ? <img src={props.profile.photos.large}/>
                        : <img src={pageUser}/>
                    } <span>
                    {props.isOwner && <input className={s.button} type={"file"} onChange={onMainPhotoSelected}/>}
                </span>
                    <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <div>
                    <b>Full name:</b> {props.profile.fullName}
                </div>
                <div>
                    <b>About me:</b> {props.profile.aboutMe}
                </div>
                <div>
                    <b>looking for a job:</b> {props.profile.lookingForAJob ? "yes" : "no"}
                </div>
                {props.profile.lookingForAJob &&
                    <div>
                        <b>My skills:</b> <i className={s.skills}>{props.profile.lookingForAJobDescription}</i>
                    </div>
                }
                <div>
                    <b>Contacts:</b> {Object.keys(props.profile.contacts)
                    .map(key => {
                            return <Contact contactTitle={key} contactValue={props.profile.contacts[key]}/>
                        }
                    )}
                </div>
            </div>
        </div>
    );
};

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contacts}>
        <b>{contactTitle}</b>: {contactValue
        ? <a href={contactValue} >{contactValue}</a>
        : "no contact"}
    </div>
}

export default ProfileInfo;