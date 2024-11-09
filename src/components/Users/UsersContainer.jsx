import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, toggleFollowingProgress, unfollow, requestUsers } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { getUsers, getCurrentPage, getInProgress, getIsFetching, getPageSize, getTotalUsersCount } from "../../redux/users-selectors";
// import { getUsers } from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
        
    }

    onPageChanged = (pageNumber) => {

        this.props.requestUsers(pageNumber, this.props.pageSize);

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                inProgress={this.props.inProgress} />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        inProgress: getInProgress(state),
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers})(UsersContainer);
