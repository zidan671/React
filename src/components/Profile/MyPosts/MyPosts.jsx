import classes from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import { addPostActionCreator, addUpdatePostActionCreator } from '../../../Redux/profileReducer'




const MyPosts = (props) => {

  let postsElement = props.postsData.map((element) => (
    <Post message={element.text} likesCount={element.likesCount} />
  ))

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator())   
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.dispatch(addUpdatePostActionCreator(text)) ;
  }

  
  return (
    <div className={classes.posts__block}>
      <h3>My Post</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} 
                    ref= {newPostElement} 
                    value ={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={classes.posts}> 
        {postsElement}
      </div>
    </div>
  )
}

export default MyPosts
