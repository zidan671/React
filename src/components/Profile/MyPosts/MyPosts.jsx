import classes from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'


const MyPosts = (props) => {

  let postsElement = props.posts.map((element) => (
    <Post message={element.text} likesCount={element.likesCount} key={element.id} />
  ))

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost()  
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
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
          <button onClick={onAddPost}>Add Post</button>
        </div>
      </div>
      <div className={classes.posts}> 
        {postsElement}
      </div>
    </div>
  )
}

export default MyPosts
