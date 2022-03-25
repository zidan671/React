import React from 'react'
import { addPostActionCreator, addUpdatePostActionCreator } from '../../../Redux/profileReducer'
import MyPosts from './MyPosts'


const MyPostsContainer = (props) => {

  let state = props.store.getState()

  let onAddPost = () => {
    props.store.dispatch(addPostActionCreator())   
  }

  let onPostChange = (text) => {
    props.store.dispatch(addUpdatePostActionCreator(text)) ;
  }

  
  return (
    <MyPosts updateNewPostText={onPostChange} addPost={onAddPost}
              posts={state.profilePage.postsData}
              newPostText={state.profilePage.newPostText}/>
  )
}

export default MyPostsContainer
