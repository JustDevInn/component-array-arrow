import React from "react";
import "../notes";

function Note(props) {
  return (
    <div className="note">
      <p>{props.id}</p>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
