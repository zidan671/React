import classes from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  let path = "/dialogs/"+ props.id
  const setActive = (navData) => navData.isActive ? classes.active  : classes.dialog
  
  return (
    <div className={classes.dialog}>
      <NavLink to={path} className={setActive}>{props.name}</NavLink>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU" alt="" />
      </div>
    </div>


    
  )
}

export default DialogItem