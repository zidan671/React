
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostContainer';


const Profile = (props) => {

  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer store={props.store}/>
    </div>
  )

} 

export default Profile
