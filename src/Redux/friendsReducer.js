const FOLLOW = 'FOLLOW' 
const UNFOLLOW = 'UNFOLLOW' 
const SET_FRIENDS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT= 'SET_TOTAL_USERS_COUNT'
const TOOGLE_IS_FETCHING= 'TOOGLE_IS_FETCHING'


export const follow = (friendId) => ({ type: FOLLOW, friendId }) 
export const unfollow = (friendId) => ({type: UNFOLLOW, friendId}) 
export const setFriends = (friends) => ({type: SET_FRIENDS , friends}) 
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE , currentPage}) 
export const setTotalUsersCount = (totalCount) => ({type:SET_TOTAL_USERS_COUNT, totalCount})
export const toogleIsFetching = (isFetching) => ({type:TOOGLE_IS_FETCHING, isFetching})

let initialState = {
  friends: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
}

const friendsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case FOLLOW:
      return {
        ...state, 
        friends: state.friends.map ((friend)=> {
          if (friend.id === action.friendId) {
            return {...friend, followed: true}
          }
          return friend
        
        })
      }

    case UNFOLLOW:
      return {
        ...state, 
  
        friends: state.friends.map ((friend)=> {
          if (friend.id === action.friendId) {
            return {...friend, followed: false}
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
    
    case TOOGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}

    default:
      return state
  }


}

export default friendsReducer
