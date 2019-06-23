let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "History, how are you?", likesCount: 2 },
        { id: 2, message: "It's my first post", likesCount: 5 },
      ],
      newPostText: 'it-kamasutra.com'
    },
    messagesPage: {
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
    },
  },
  getState(){
    return this._state
  },
  _callSubscriber() {
    console.log('state changed')
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state)
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store=store;