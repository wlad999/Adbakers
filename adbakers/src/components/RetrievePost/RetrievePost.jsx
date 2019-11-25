import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./RetrievePost.module.css";

const RetrievePost = props => {
  const [editModeTitle, setEditModeTitle] = useState(false);
  const [editModeBody, setEditModeBody] = useState(false);
  const [title, setTitle] = useState(props.dataPost.title);
  const [body, setBody] = useState(props.dataPost.body);
  const [warning, setWarning] = useState("");

  const { dataPost, delPostThunk, updatePostThunk, id } = props;
  const delPost = () => delPostThunk(dataPost.id);

  useEffect(() => {
    setTitle(dataPost.title);
  }, [dataPost.title]);
  useEffect(() => {
    setBody(dataPost.body);
  }, [dataPost.body]);

  let activateModeTitle = () => {
    setEditModeTitle(true);
  };
  let activateModeBody = () => {
    setEditModeBody(true);
  };
  const deactivateEditModeTitle = () => {
    if ((title || body) && (title.length <= 10 && body.length <= 20)) {
      setEditModeTitle(false);
      updatePostThunk(id, {
        title: title,
        body: body
      });
    } else if (title.length >= 10) {
      setWarning("Title must be less than 10 characters");
      setEditModeBody(false);
      setTitle(props.dataPost.title);
    } else if (!title && !body) {
      setWarning("Post can`t be empty");
      setEditModeBody(false);
      setTitle(props.dataPost.title);
    }
    setEditModeTitle(false);
  };
  const deactivateEditModeBody = () => {
    if ((title || body) && (title.length <= 10 && body.length <= 20)) {
      setEditModeBody(false);
      updatePostThunk(id, {
        title: title,
        body: body
      });
    } else if (body.length >= 20) {
      setWarning("Body must be less than 20 characters");
      setEditModeBody(false);
      setBody(props.dataPost.body);
    } else if (!title && !body) {
      setWarning("Post can`t be empty");
      setEditModeBody(false);
      setBody(props.dataPost.body);
    }
    setEditModeBody(false);
  };

  let onTitleChange = e => {
    if (e.target.value.length > 10) {
      setWarning("Title must be less than 10 characters");
    } else {
      setWarning("");
    }
    setTitle(e.target.value);
  };
  let onBodyChange = e => {
    if (e.target.value.length > 20) {
      setWarning("Title must be less than 20 characters");
    } else {
      setWarning("");
    }
    setBody(e.target.value);
  };

  return (
    <div className={styles.main}>
      <p>POST ID: {dataPost.id}</p>
      <div className={styles.mark} onDoubleClick={activateModeTitle}>
        {!editModeTitle &&
          (dataPost.title ? <p>TITLE: {dataPost.title}</p> : <p>"NO TITLE"</p>)}
      </div>
      {editModeTitle && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditModeTitle}
            onChange={onTitleChange}
            value={title}
          />
        </div>
      )}
      <div className={styles.mark} onDoubleClick={activateModeBody}>
        {!editModeBody &&
          (dataPost.body ? (
            <p>POST: {dataPost.body}</p>
          ) : (
            <p> "NO POST BODY"</p>
          ))}
      </div>
      {editModeBody && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditModeBody}
            onChange={onBodyChange}
            value={body}
          />
        </div>
      )}
      {dataPost.author && <p>AUTOR: {dataPost.author}</p>}
      {dataPost.date && <p>DATA:{dataPost.date}</p>}
      {warning && <p className={styles.warning}>{warning}</p>}
      <NavLink className={styles.nav} to={`/`}>
        <button onClick={delPost}>DELETE POST</button>
      </NavLink>
    </div>
  );
};

export default RetrievePost;
