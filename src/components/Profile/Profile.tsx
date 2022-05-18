import React, {FC} from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from "../../types/Types";

type ProfilePropsType = {
    isOwner: any
    savePhoto: () => void
    profile: ProfileType
    status: string
    updateStatus: () => void
    saveProfile: () => void
    store: any
}

const Profile: FC<ProfilePropsType> = props => {
    return (<div>
            <ProfileInfo isOwner={props.isOwner} savePhoto={props.savePhoto} profile={props.profile}
                         status={props.status} updateStatus={props.updateStatus} saveProfile={props.saveProfile}/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;