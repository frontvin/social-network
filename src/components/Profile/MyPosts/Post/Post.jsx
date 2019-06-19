import React from 'react'
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="http://video-editor.su/images/kak-snimalsya-film-avatar_01.jpg" alt="avatar image"/>
        {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  )
}
export default Post
