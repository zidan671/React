import {
  SendMessageActionCreator,
  UpdateNewMessageCreator,
} from '../../Redux/dialogsReducer'
import StoreContext from '../../StoreContext'
import Dialogs from './Dialogs'

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState()

        let onSendMessageClick = () => {
          store.dispatch(SendMessageActionCreator())
        }
        let onChangeMessage = (messageBody) => {
          store.dispatch(UpdateNewMessageCreator(messageBody))
        }

        return (
          <Dialogs
            sendMessageClick={onSendMessageClick}
            updateMessage={onChangeMessage}
            dialogsPage={state.dialogsPage}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}

export default DialogsContainer
