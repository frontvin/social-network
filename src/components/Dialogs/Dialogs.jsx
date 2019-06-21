import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  )
};

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
};

export const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Dimych" id="1"/>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Andrey</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Sveta</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Sacha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Viktor</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Dimych</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <div className={s.message}>How is your deals?</div>
        <div className={s.message}>Yo!</div>
      </div>
    </div>
  )
};