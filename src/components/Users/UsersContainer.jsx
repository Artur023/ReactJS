import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsersThunk,
    setCurrentPage, toggleIsProgressFollow, unfollow
} from "../../redux/usersReducer.tsx";
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

class UsersContainerAPI extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsersThunk(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsersThunk(pageNumber, pageSize)
    }

    render() {
        return <div>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleIsProgressFollow={this.props.toggleIsProgressFollow}
                followingIsProgress={this.props.followingIsProgress}
            />
        </div>
    }
}

let mapStateToProps = (state) => {
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
    connect(mapStateToProps, {
        follow, unfollow,
        setCurrentPage,
        toggleIsProgressFollow, getUsersThunk
    })
)(UsersContainerAPI);



