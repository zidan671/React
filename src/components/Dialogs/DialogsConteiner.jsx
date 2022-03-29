import {
  SendMessageActionCreator,
  UpdateNewMessageCreator,
} from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from "react-redux"


let mapStateToProps = (state) => {
  return {
    dialogsPage:state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: (messageBody) => {dispatch(UpdateNewMessageCreator(messageBody))},
    sendMessageClick:() => {dispatch(SendMessageActionCreator())}
  }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)


export default DialogsContainer
