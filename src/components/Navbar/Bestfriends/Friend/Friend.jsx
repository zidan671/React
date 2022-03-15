import classes from '../Bestfriends'

const Friend = (props) => {

  return (
    <div className={classes.friends__block}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU" alt="" /> 
        {props.name}
      </div>
    </div>
  )
}

export default Friend
