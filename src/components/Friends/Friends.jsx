import classes from './Friends.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom'

const Friends = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
    if (i === 20) break
  }

  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page && classes.selectedPage}
              onClick={(e) => {
                props.onPageChanged(page)
              }}
            >
              {page}
            </span>
          )
        })}
      </div>
      {props.friends.map((friend) => (
        <div key={friend.id}>
          <div>
            <NavLink to={'/profile/' + friend.id}>
              <img
                className={classes.avatar_img}
                src={
                  friend.photos.small != null ? friend.photos.small : userPhoto
                }
                alt=""
              />
            </NavLink>

            <div>
              {friend.follow ? (
                <button
                  onClick={() => {
                    props.unfollow(friend.id)
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(friend.id)
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

export default Friends
