import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsersThunk, unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingIsProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers

} from "../../redux/usersSelectors";
import {UsersType} from "../../types/Types";
import {AppStateType} from "../../redux/reduxStore";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UsersType>
    followingIsProgress: Array<number>
    // toggleIsProgressFollow: any


}
type DispatchStatePropsType = {
    getUsersThunk: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void

}
type OwnStatePropsType = {
    pageTitle: string
}

type PropsType = MapStatePropsType & DispatchStatePropsType & OwnStatePropsType

class UsersContainerAPI extends React.Component<PropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsersThunk(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;
        this.props.getUsersThunk(pageNumber, pageSize)
    }

    render() {
        return <div>
            <h2>{this.props.pageTitle}</h2>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingIsProgress={this.props.followingIsProgress}
                // toggleIsProgressFollow={this.props.toggleIsProgressFollow}
            />
        </div>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingIsProgress: getFollowingIsProgress(state),
    }
}

export default compose(
    connect<MapStatePropsType, DispatchStatePropsType, OwnStatePropsType, AppStateType>(mapStateToProps, {
        follow, unfollow, getUsersThunk
    })
)(UsersContainerAPI);



