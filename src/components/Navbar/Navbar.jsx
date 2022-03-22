import { NavLink, Link } from 'react-router-dom'
import classes from './Navbar.module.css'
import Bestfriends from './Bestfriends/Bestfriends';

const setActive = (navData) => navData.isActive ? classes.activeLink  : classes.item

const Navbar = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" className={setActive}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" className={setActive}> Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" className={setActive}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" className={setActive}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" className={setActive}>Settings</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/friends" className={setActive}>Friends</NavLink>
        <Bestfriends friendsData={props.navBarPage.friendsData}/>
      </div>
    </nav>
  )
}

export default Navbar
