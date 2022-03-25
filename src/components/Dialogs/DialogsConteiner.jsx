import { SendMessageActionCreator, UpdateNewMessageCreator } from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs'


const DialogsContainer = (props) => {

  let state = props.store.getState()

  let onSendMessageClick = () => {
    props.store.dispatch(SendMessageActionCreator())   
  }
  let onChangeMessage = (messageBody) => {
    props.store.dispatch(UpdateNewMessageCreator(messageBody)) ;
  }

  return (
    <Dialogs sendMessageClick={onSendMessageClick}
            updateMessage={onChangeMessage}
            dialogsPage={state.dialogsPage}/>
  )
}

export default DialogsContainer
