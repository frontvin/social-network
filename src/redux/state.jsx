// action types
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
    if (action.type === ADD_POST){
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state)
    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state)
    }
    else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state)
    }
    else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';

      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state)
    }
  }
};

// action creators
export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
};

export const sendMessageCreator = (text) => {
  return {
    type: SEND_MESSAGE,
    newText: text
  }
};

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  }
};

export default store;
window.store=store;