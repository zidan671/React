import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'



const Dialogs = (props) => {

  let messagesElement = props.dialogsPage.messagesData.map((element) => (
    <Message text={element.text} key={element.id}/>
  ))
  let dialogsElement = props.dialogsPage.dialogsData.map((element) => (
    <DialogItem name={element.name} key={element.id} id={element.id} />
  ))
  let newMessageBody= props.dialogsPage.newMessageBody

  let onSendMessageClick = () => {
    props.sendMessageClick() 
  }
  let onChangeMessage = (event) => {
    let messageBody = event.target.value
    props.updateMessage(messageBody) ;
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>
        {dialogsElement}
      </div>
      <div className={classes.messages}>
        <div>{messagesElement}</div>
        <div>
          <div><textarea value={newMessageBody} 
                          placeholder='Enter your message'
                          onChange = {onChangeMessage}>
                </textarea>
          </div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>
    </div>

  )
}

export default Dialogs
