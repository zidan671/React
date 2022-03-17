import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import navbarReducer from './navbarReducer';

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
      newMessageBody: '',
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
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.navBarPage = navbarReducer(this._state.navBarPage, action)
  
    this._callSubscriber(this._state)
  },
}

export default store
window.store = store
