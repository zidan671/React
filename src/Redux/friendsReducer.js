const FOLLOW = 'FOLLOW' 
const UNFOLLOW = 'UNFOLLOW' 
const SET_FRIENDS = 'SET_USERS'

export const followAC = (friendId) => ({ type: FOLLOW, friendId }) 
export const unfollowAC = (friendId) => ({type: UNFOLLOW, friendId}) 
export const setFriendsAC = (friends) => ({type: SET_FRIENDS , friends}) 

let initialState = {
  friends: [
  ],

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
      return {...state, friends: [...state.friends, ...action.friends]}

    default:
      return state
  }


}

export default friendsReducer
