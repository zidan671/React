const ADD_POST = 'ADD-POST' //39 lesson
const NEW_POST_TEXT = 'UPDATE-NEW-POST' //39 lesson

export const addPostActionCreator = () => ({ type: ADD_POST }) //39 lesson

export const addUpdatePostActionCreator = (text) => ({
  type: NEW_POST_TEXT,
  newText: text,
}) //39 lesson

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        text: state.newPostText,
        likesCount: 0,
      }
      state.postsData.push(newPost)
      state.newPostText = ''
      return state
    case NEW_POST_TEXT:
      state.newPostText = action.newText
      return state
    default:
      return state
  }


}

export default profileReducer
