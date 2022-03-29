import {
  addPostActionCreator,
  addUpdatePostActionCreator,
} from '../../../Redux/profileReducer'
import MyPosts from './MyPosts'
import {connect} from "react-redux"


let mapStateToProps = (state) => {
  return {
    posts:state.profilePage.postsData,
    newPostText:state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {dispatch(addUpdatePostActionCreator(text))},
    addPost:() => {dispatch(addPostActionCreator())}
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer
