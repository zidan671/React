const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY' //40lesson
const SEND_MESSAGE = 'SEND_MESSAGE' //40lesson

export const UpdateNewMessageCreator = (messageBody) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  messageBody: messageBody,
}) //40

export const SendMessageActionCreator = () => ({ type: SEND_MESSAGE }) //40

let initialState = {
  dialogsData: [
    { id: 1, name: 'Andrey' },
    { id: 2, name: 'Petr' },
    { id: 3, name: 'Vera' },
    { id: 4, name: 'Alexey' },
    { id: 5, name: 'Sergey' },
  ],

  messagesData: [
    { id: 1, text: 'Hi' },
    { id: 2, text: 'How are you ?' },
    { id: 3, text: 'Bye-Bye' },
    { id: 4, text: 'Bye-Bye!!!' },
  ],
  newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.messageBody
      return state
    case SEND_MESSAGE:
      let messageBody = state.newMessageBody
      state.newMessageBody = ''
      state.messagesData.push({ id: 5, text: messageBody }) 
      return state
    default:
      return state
  }


}

export default dialogsReducer