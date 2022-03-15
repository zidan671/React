const ADD_POST = 'ADD-POST'  //39 lesson
const NEW_POST_TEXT = 'UPDATE-NEW-POST'//39 lesson
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY' //40lesson
const SEND_MESSAGE = 'SEND_MESSAGE' //40lesson

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, text: 'Hi, how are you?" ', likesCount: 14 },
        { id: 2, text: 'It is my first post', likesCount: 25 },
        { id: 3, text: 'It is my second post', likesCount: 0 },
      ],
      newPostText: '',
    },
    dialogsPage: {
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
    newMessageBody:'',
    },
    navBarPage: {
      friendsData: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Petr' },
        { id: 3, name: 'Vera' },
        { id: 4, name: 'Alexey' },
        { id: 5, name: 'Sergey' },
      ],
    },
  },
  _callSubscriber() {
    console.log('State is change')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        text: this._state.profilePage.newPostText,
        likesCount: 0,
      }
      this._state.profilePage.postsData.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } 
    else if (action.type === NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    }
    else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.messageBody
      this._callSubscriber(this._state)
    }
    else if (action.type === SEND_MESSAGE) {
      let messageBody = this._state.dialogsPage.newMessageBody 
      this._state.dialogsPage.newMessageBody = ''
      this._state.dialogsPage.messagesData.push({id:5, text:messageBody})
      this._callSubscriber(this._state)
    }
  },
}

export const addPostActionCreator = () => ({type: ADD_POST})   //39 lesson

export const addUpdatePostActionCreator = (text) => 
  ({type: NEW_POST_TEXT, newText: text,}) //39 lesson

export const UpdateNewMessageCreator = (messageBody) => ({type:        UPDATE_NEW_MESSAGE_BODY, messageBody:messageBody})   //40

export const SendMessageActionCreator = () => 
    ({type: SEND_MESSAGE}) //40

export default store
window.store = store
