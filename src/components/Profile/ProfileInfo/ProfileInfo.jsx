import { NavLink } from 'react-router-dom'
import Preloader from '../../common/Preloader'
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  
  if (!props.profile) {
    return <Preloader/>
  }
  
  return (
    <div>
    <div className={classes.bigImg}>
        <img src="https://www.bgoperator.ru/pr_img/1000787/20160930/39057527/marvel-img-worlds-of-adventure-dubai.jpg" />
      </div>
      <div className={classes.description__block}>
        <div>{props.profile.fullName}</div>
        <img src={props.profile.photos.large || ''} alt="" />
        <div> {props.profile.aboutMe || 'нет информации'}</div>
        <NavLink to={props.profile.contacts.vk || 'нет соцсетей'}> {props.profile.contacts.vk || 'нет соцсетей'} </NavLink>

        </div>
        <div> 
          {props.profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу' }
        </div>
    </div>
  )
}

export default ProfileInfo