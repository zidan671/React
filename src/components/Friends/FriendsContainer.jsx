import {connect} from 'react-redux'
import { follow, setCurrentPage, setFriends, setTotalUsersCount, toogleIsFetching, unfollow } from "../../Redux/friendsReducer";
import React from 'react'
import Friends from './Friends';
import Preloader from '../common/Preloader';
import { userAPI } from '../../api/api';




class FriendsContainer extends React.Component {

  componentDidMount () { 
  this.props.toogleIsFetching(true)
  if (this.props.friends.length === 0) {

    userAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
        this.props.toogleIsFetching(false)
        this.props.setFriends(data.items)
        this.props.setTotalUsersCount(data.totalCount)
      })}
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toogleIsFetching(true)
    userAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
        this.props.toogleIsFetching(false)
        this.props.setFriends(data.items)
      })
  }

  render() {   
    return <>
          {this.props.isFetching ? <Preloader/> : null}
          <Friends totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    friends={this.props.friends}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
          />  
          </>    
  }
}


let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
    pageSize:state.friendsPage.pageSize,
    totalUsersCount:state.friendsPage.totalUsersCount,
    currentPage:state.friendsPage.currentPage,
    isFetching:state.friendsPage.isFetching
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (friendId) => {
//       dispatch(followAC(friendId))
//     },
//     unfollow: (friendId) => {
//       dispatch(unfollowAC(friendId))
//     },
//     setFriends: (friends) => {
//       dispatch(setFriendsAC(friends))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount))
//     },
//     toogleIsFetching: (isFetching) => {
//       dispatch(toogleIsFetchingAC(isFetching))
//     },
//   }
// }



export default connect(mapStateToProps, {
  follow,unfollow,setFriends,setCurrentPage,
  setTotalUsersCount,toogleIsFetching})(FriendsContainer)