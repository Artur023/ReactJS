// @ts-ignore
import s from "../ProfileInfo.module.css";
import React, {FC} from "react";
import {ProfileType} from "../../../../types/Types";

type PropsType = {
    profile: ProfileType
}

const ProfileData: FC<PropsType> = (props) => {
    return <div>
        <div className={s.pictureInfo}>
        </div>
        <div className={s.descriptionBlock}>
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
                        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                    }
                )}
            </div>
        </div>
    </div>
}

export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contacts}>
        <b>{contactTitle}</b>: {contactValue
        ? <a href={contactValue}>{contactValue}</a>
        : "no contact"}
    </div>
}
export const Contacts = ({contactTitle, contactValue}) => {
    return <div className={s.contacts}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileData;