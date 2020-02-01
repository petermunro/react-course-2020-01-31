import React, { useState } from "react";

function FormDemo() {
  let [content, setContent] = useState("hi");

  function handleChange(e) {
    setContent(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting form: content is:", content);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={content} onChange={handleChange}></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormDemo;
