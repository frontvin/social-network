import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "History, how are you?", likesCount: 2 },
      { id: 2, message: "It's my first post", likesCount: 5 },
    ],
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
    ]
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state)
};

export default state