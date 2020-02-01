import React, { useState } from "react";

const MAXLENGTH = 10;

function TweetBox(props) {
  let [message, setMessage] = useState("");

  function handleChange(e) {
    if (e.target.value.length <= MAXLENGTH) setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSend(message);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={message} onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
      <p>{MAXLENGTH - message.length} characters remaining</p>
    </form>
  );
}

export default TweetBox;
