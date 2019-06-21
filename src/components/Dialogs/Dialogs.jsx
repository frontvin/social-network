import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export const Dialogs = (props) => {

  let dialogs = [
    { id: 1, name: "Vika" },
    { id: 2, name: "Dimych" },
    { id: 3, name: "Andrey" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Sacha" },
    { id: 6, name: "Viktor" },
   ];

  let messages = [
    { id: 1, message: "Vika" },
    { id: 2, message: "How is your deals?" },
    { id: 3, message: "Yo!" },
    { id: 4, message: "Vika" },
    { id: 5, message: "Vika" },
    { id: 6, message: "Vika" },
  ];

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = messages.map(m => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
};