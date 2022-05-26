
import React  from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from './../../Redux/auth-reducer';
import { userAPI } from '../../api/api';


class HeaderContainer extends React.Component {

  componentDidMount () { 
    userAPI.setAuth()
        .then((data) => {
          if (data.resultCode===0) {
            let {id:userId, email, login} = data.data
            this.props.setAuthUserData(userId, email, login)
          }
        })
      }

  render () {
    return <Header {...this.props}/>
  }
}


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)