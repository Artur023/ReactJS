import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsersThunk,
    setCurrentPage, toggleIsProgressFollow, unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersConteinerAPI extends React.Component {

    componentDidMount() {

        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsersThunk(pageNumber, this.props.pageSize)
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingIsProgress: state.usersPage.followingIsProgress
    }
}

const UsersConteiner = connect(mapStateToProps, {
    follow, unfollow,
    setCurrentPage,
    toggleIsProgressFollow, getUsersThunk
})(UsersConteinerAPI);

export default UsersConteiner;
