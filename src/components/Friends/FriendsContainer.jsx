import {connect} from 'react-redux'
import { followAC, setCurrentPageAC, setFriendsAC, setTotalUsersCountAC, toogleIsFetchingAC, unfollowAC } from "../../Redux/friendsReducer";
import axios from 'axios'
import React from 'react'
import Friends from './Friends';
import Preloader from '../common/Preloader';




class FriendsContainer extends React.Component {

  componentDidMount () {
  this.props.toogleIsFetching(true)
  if (this.props.friends.length === 0) {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.toogleIsFetching(false)
        this.props.setFriends(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })}
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toogleIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.toogleIsFetching(false)
        this.props.setFriends(response.data.items)
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
    },
    toogleIsFetching: (isFetching) => {
      dispatch(toogleIsFetchingAC(isFetching))
    },
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(FriendsContainer)