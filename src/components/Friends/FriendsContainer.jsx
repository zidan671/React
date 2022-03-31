

import {connect} from "react-redux"
import { followAC, setFriendsAC, unfollowAC } from "../../Redux/friendsReducer";
import Friends from './Friends';



let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends
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
    }
  }
}

const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends)

export default FriendsContainer
