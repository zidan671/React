const ADD_POST = 'ADD-POST' //39 lesson
const NEW_POST_TEXT = 'UPDATE-NEW-POST' //39 lesson

export const addPostActionCreator = () => ({ type: ADD_POST }) //39 lesson
export const addUpdatePostActionCreator = (text) => ({
  type: NEW_POST_TEXT,
  newText: text,
  
}) //39 lesson

let initialState = {
  postsData: [
    { id: 1, text: 'Hi, how are you?" ', likesCount: 14 },
    { id: 2, text: 'It is my first post', likesCount: 25 },
    { id: 3, text: 'It is my second post', likesCount: 0 },
  ],
  newPostText: '',
}

const profileReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_POST: 
      let newPost = {
        id: 4,
        text: state.newPostText,
        likesCount: 0,
      }

      return {
        ...state,
        postsData:[...state.postsData, newPost],
        newPostText: ''
      
      }

    case NEW_POST_TEXT: 
    
      return {
        ...state,
        newPostText:action.newText
      }
      
    
    default:
      return state
  }


}

export default profileReducer
