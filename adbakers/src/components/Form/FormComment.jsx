import React from "react";
import { useState, useEffect } from "react";
import styles from "./AddPost.module.css";
const FormComment = props => {
  const [onMode, setMode] = useState(false);
  const { setComenst, value, onSubmit, onCleanWarning } = props;
  let onSetMode = () => {
    setMode(!onMode);
    // !onMode && onCleanWarning();
  };
  useEffect(() => {
    onCleanWarning(onMode);
  }, [onCleanWarning, onMode]);
  return (
    <div className={styles.addPost}>
      {!onMode ? (
        <button onClick={onSetMode}>Add comment</button>
      ) : (
        <div>
          <form onSubmit={onSubmit}>
            <div>
              <textarea
                onChange={setComenst}
                value={value}
                placeholder="enter your comment"
                cols="30"
                rows="3"
              />
            </div>
            <button type="submit">SUBMIT</button>
            <button onClick={onSetMode}>close form comment</button>
          </form>
        </div>
      )}
    </div>
  );
};
export default FormComment;
