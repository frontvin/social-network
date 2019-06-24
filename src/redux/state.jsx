// action types
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "History, how are you?", likesCount: 2 },
        { id: 2, message: "It's my first post", likesCount: 5 },
      ],
      newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Vika" },
        { id: 2, name: "Dimych" },
        { id: 3, name: "Andrey" },
        { id: 4, name: "Sveta" },
        { id: 5, name: "Sacha" },
        { id: 6, name: "Viktor" },
      ],
      messages: [
        { id: 1, message: "Vika" },
        { id: 2, message: "How is your deals?" },
        { id: 3, message: "Yo!" },
        { id: 4, message: "Vika" },
        { id: 5, message: "Vika" },
        { id: 6, message: "Vika" },
      ],
      newMessageBody: ''
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action){

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

  }
};

export default store;
window.store=store;