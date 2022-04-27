

import {connect} from "react-redux"
import { followAC, setCurrentPageAC, setFriendsAC, setTotalUsersCountAC, unfollowAC } from "../../Redux/friendsReducer";
import Friends from './Friends';



let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
    pageSize:state.friendsPage.pageSize,
    totalUsersCount:state.friendsPage.totalUsersCount,
    currentPage:state.friendsPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (friendId) => {
      dispatch(followAC(friendId))
    },
    unfollow: (friendId) => {
      dispatch(unfollowAC(friendId))
    },
    setFriends: (friends) => {
      dispatch(setFriendsAC(friends))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    }
  }
}

const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends)

export default FriendsContainer
