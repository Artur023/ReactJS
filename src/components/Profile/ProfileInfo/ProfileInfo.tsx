import React, {ChangeEvent, FC, useState} from 'react';
// @ts-ignore
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
// @ts-ignore
import pageUser from "../../../assets/images/user.png"
import ProfileStatusWithHook from "./ProfileStatusWhisHooks";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import {ProfileType} from "../../../types/Types";


type PropsType = {
    status: string
    savePhoto: (e:ChangeEvent<HTMLInputElement> ) => void
    isOwner: any
    saveProfile: (dataForm: any) => any
    profile: ProfileType
    updateStatus: () => void

}

const ProfileInfo: FC<PropsType> = (props) => {
    let [editMode, setEditMode] = useState(false)

    let activateEditMode = () => {
        setEditMode(true)
    }
    let deActivateEditMode = () => {
        setEditMode(false)
    }

    if (!props.profile) {
        return <Preloader/>
    }

    let onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    };

    let onSubmit = (dataForm) => {
        let promise = props.saveProfile(dataForm)
        promise
            .then(
                deActivateEditMode
            )
    }

    return <div>
        <div>
            <div className={s.avatar}>
                {props.profile.photos.large
                    ? <img src={props.profile.photos.large}/>
                    : <img src={pageUser}/>
                }
            </div>
            <ProfileStatusWithHook isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus}/>
            <span className={s.buttonAvatar}>
                    {props.isOwner && <input className={s.button} type={"file"} onChange={onMainPhotoSelected}/>}
                </span>
        </div>
        {props.isOwner &&
            <button className={s.button} onClick={activateEditMode} onDoubleClick={deActivateEditMode}>Edit</button>}
        {editMode
            ? <ProfileDataForm {...props} initialValues={props.profile} onSubmit={onSubmit}/>
            : <ProfileData profile={props.profile}/>}
    </div>
}

export default ProfileInfo;