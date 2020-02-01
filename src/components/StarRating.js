import React, { useState } from "react";
import "./StarRating.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  function myHandler(param) {
    console.log("hi", param);
  }

  function clickHandler(e) {
    console.log(e.target.id);
    setRating(parseInt(e.target.id));
  }

  return (
    <>
      <div className="star-rating">
        <span id="1" onClick={clickHandler}>
          *
        </span>
        <span id="2" onClick={clickHandler}>
          *
        </span>
        <span id="3" onClick={clickHandler}>
          *
        </span>
        <span id="4" onClick={clickHandler}>
          *
        </span>
        <span id="5" onClick={clickHandler}>
          *
        </span>
      </div>
      <span>{rating}</span>

      <div onClick={() => myHandler(5)}>Click Me</div>
    </>
  );
};

export default StarRating;
