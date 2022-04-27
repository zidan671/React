import axios from 'axios'
import classes from './Friends.module.css'
import userPhoto from '../../assets/images/user.png'
import React from 'react'


class Friends extends React.Component {

  componentDidMount () {
  if (this.props.friends.length === 0) {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setFriends(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })}
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setFriends(response.data.items)
      })
  }

  render() {
  
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []

    for (let i=1; i <= pagesCount; i++) {
      pages.push(i)
      if (i == 20) break;
    };
  
    return (
      <div>
        <div>
          {pages.map ((page) => {
            return <span className={this.props.currentPage === page &&classes.selectedPage} onClick={(e) => {this.onPageChanged(page)}}>{page}</span>
          })}     
        </div>
        {this.props.friends.map((friend) => (
          <div key={friend.id}>
            <div>
              <img
                className={classes.avatar_img}
                src={
                  friend.photos.small != null ? friend.photos.small : userPhoto
                }
                alt=""
              />

              <div>
                {friend.follow ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(friend.id)
                    }}
                  >
                    UnFollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(friend.id)
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
              <div className={classes.friend_info_status}>
                <div>{friend.name}</div>
                <div style={{ position: 'absolute', bottom: '-70px' }}>
                  {friend.status}
                </div>
              </div>

              <div className={classes.friend_info_location}>
                <div>{'friend.location.city'}</div>
                <div style={{ position: 'absolute', bottom: '-70px' }}>
                  {'friend.location.country'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Friends
