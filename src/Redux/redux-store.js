import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navbarReducer from './navbarReducer';
import friendsReducer from './friendsReducer';

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navBarPage: navbarReducer,
  friendsPage: friendsReducer,
});



let store = createStore(redusers)

window.store = store

export default store