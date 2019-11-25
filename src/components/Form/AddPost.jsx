import React from "react";
import styles from "./AddPost.module.css";

import { useState } from "react";
const AddPost = props => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [warning, setWarning] = useState("");

  const onTitleChange = e => {
    if (e.target.value.length > 10) {
      setWarning("Title must be less than 10 characters");
    } else {
      setWarning("");
    }
    setTitle(e.target.value);
  };
  const onBodyChange = e => {
    if (e.target.value.length > 20) {
      setWarning("Title must be less than 20 characters");
    } else {
      setWarning("");
    }
    setBody(e.target.value);
  };

  let onSubmit = e => {
    e.preventDefault();
    if ((title || body) && (title.length < 11 && body.length < 21)) {
      props.putPostThunk({
        title: title,
        body: body
      });
      setTitle("");
      setBody("");
    } else if (!title && !body) {
      setWarning("Post can`t be empty");
      console.log("Post can`t be empty");
    } else if (title.length > 10 && body.length <= 20) {
      setWarning("Title must be less than 10 characters");
      console.log("Title must be less than 10 characters");
    } else if (body.length > 20 && title.length <= 10) {
      setWarning("Body must be less than 20 characters");
      console.log("Body must be less than 20 characters");
    } else if (title.length > 10 && body.length > 20) {
      setWarning("Title and Body should be shorter");
      console.log("Title and Body should be shorter");
    }
  };
  return (
    <div className={styles.addPost}>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <p>title:</p>
            <input
              type="text"
              value={title}
              onChange={onTitleChange}
              placeholder="enter title"
            />
          </div>
          <p>body:</p>
          <textarea
            onChange={onBodyChange}
            value={body}
            placeholder="enter your post"
            cols="30"
            rows="3"
          />
        </div>
        {warning && <p className={styles.warning}>{warning}</p>}
        <button type="submit">SUBMIT</button>
        <button onClick={props.onCloseForm}>close form</button>
      </form>
    </div>
  );
};
export default AddPost;
