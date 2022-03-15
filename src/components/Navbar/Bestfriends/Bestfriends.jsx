import classes from './Bestfriends.module.css'
import Friend from './Friend/Friend';

const Bestfriends = (props) => {

  let friendsElement = props.friendsData.map((element) => (
    <Friend name={element.name}  />
  ))

  return (
    <div className={classes.friends__block}>
      {friendsElement}
    </div>
  )
}

export default Bestfriends
