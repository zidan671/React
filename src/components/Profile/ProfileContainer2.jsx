import axios from 'axios';
import React from 'react';
import Profile from './Profile';
import { setFriendProfile } from '../../Redux/profileReducer';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';



const ProfileContainer2= (props) => {

  const { userId } = useParams()


  
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        props.setFriendProfile(response.data)
      })


    return <Profile {...props} profile= {props.profile}/>   
  
}


let mapStateToProps = (state) => ({profile:state.profilePage.profile})





export default connect (mapStateToProps, {setFriendProfile} )(ProfileContainer2)


