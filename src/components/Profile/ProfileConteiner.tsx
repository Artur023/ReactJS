import React, { FC } from "react";
import Profile from "./Profile";
import {connect} from 'react-redux';
import {useParams} from "react-router-dom";
import {getProfileUser, getStatus, updateStatus, savePhoto, saveProfile} from "../../redux/profileReducer";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ProfileType} from "../../types/Types";
import {AppStateType} from "../../redux/reduxStore";

const withRouter = WrappedComponent => props => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks
    return (
        <WrappedComponent
            {...props}
            params={params}
            // etc...
        />
    );
};

type MapStateType = {
    profile: ProfileType
    status: string
    id: number
    params: any
    store: any
    isOwner: any
}

type DispatchStateType = {
    getProfileUser: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: () => void
    savePhoto: () => void
    saveProfile: () => void
}
type OwnStateType = {}

type ProfileContainerType = MapStateType & DispatchStateType & OwnStateType

class ProfileContainer extends React.Component<ProfileContainerType> {

    refreshProfile() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = this.props.id;

        }
        this.props.getProfileUser(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.params.userId != prevProps.params.userId)
            this.refreshProfile(); //status доработать
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
                     store={this.props.store}
            />
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.postsPage.profile,
    status: state.postsPage.status,
    id: state.auth.id
});

export default compose(
    connect<MapStateType, DispatchStateType, OwnStateType, AppStateType>(mapStateToProps, {
        getProfileUser,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile
    }),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)