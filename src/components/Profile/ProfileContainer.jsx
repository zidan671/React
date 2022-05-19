import axios from 'axios';
import React from 'react';
import Profile from './Profile';
import { setFriendProfile } from './../../Redux/profileReducer';
import { connect } from 'react-redux';
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom"



class ProfileContainer extends React.Component {

  componentDidMount () {
    let userId = this.props.router.params.userId 
    if (!userId) {
      userId = 2
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setFriendProfile(response.data)        
      })

  }

  render() {
    return <Profile {... this.props} profile= {this.props.profile}/>   
  }
}


let mapStateToProps = (state) => ({profile:state.profilePage.profile})

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}



export default connect (mapStateToProps, {setFriendProfile} )(withRouter(ProfileContainer))


