import classes from './Message.module.css'

const Message = (props) => {
  return (
    <div className={classes.messages}>
      <div className={classes.message}>{props.text}</div>
    </div>
  )
}

export default Message