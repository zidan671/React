import React from 'react'
import {
  addPostActionCreator,
  addUpdatePostActionCreator,
} from '../../../Redux/profileReducer'
import StoreContext from '../../../StoreContext'
import MyPosts from './MyPosts'

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {

        let state = store.getState()

        let onAddPost = () => {
          store.dispatch(addPostActionCreator())
        }

        let onPostChange = (text) => {
          store.dispatch(addUpdatePostActionCreator(text))
        }

        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={onAddPost}
            posts={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer
