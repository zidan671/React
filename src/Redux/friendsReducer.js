const FOLLOW = 'FOLLOW' 
const UNFOLLOW = 'UNFOLLOW' 
const SET_FRIENDS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT= 'SET_TOTAL_USERS_COUNT'

export const followAC = (friendId) => ({ type: FOLLOW, friendId }) 
export const unfollowAC = (friendId) => ({type: UNFOLLOW, friendId}) 
export const setFriendsAC = (friends) => ({type: SET_FRIENDS , friends}) 
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE , currentPage}) 
export const setTotalUsersCountAC = (totalCount) => ({type:SET_TOTAL_USERS_COUNT, totalCount})

let initialState = {
  friends: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1
}

const friendsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case FOLLOW:
      return {
        ...state, 
        friends: state.friends.map ((friend)=> {
          if (friend.id === action.friendId) {
            return {...friend, follow: true}
          }
          return friend
        
        })
      }

    case UNFOLLOW:
      return {
        ...state, 
  
        friends: state.friends.map ((friend)=> {
          if (friend.id === action.friendId) {
            return {...friend, follow: false}
          }
          return friend
        })
      }

    case SET_FRIENDS:
      return {...state, friends: action.friends}

    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    
    
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.totalCount}
    default:
      return state
  }


}

export default friendsReducer
