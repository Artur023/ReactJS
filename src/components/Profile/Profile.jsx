import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';

const Profile = props => {
    return (<div>
            <ProfileInfo isOwner={props.isOwner} savePhoto={props.savePhoto} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsConteiner store={props.store}/>
        </div>
    );
};

export default Profile;