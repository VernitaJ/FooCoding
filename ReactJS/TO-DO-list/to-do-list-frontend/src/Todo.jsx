import React from "react";

/**
 * Here we can define different CSS styles
 * as Javascript objects.
 *
 * This is referred as "CSS-IN-JS" and it is
 * under constant debate since React came to be.
 *
 * It's worth learning it!
 * (and it is super easy)
 */
const activeStyle = {};
const completedStyle = {
  textDecoration: "line-through"
};

const Todo = ({ text, status }) => {
  // Here we use the "status" (booleand) information
  // to decide which style to apply.
  const style = status ? completedStyle : activeStyle;

  // And here we put stuff together.
  return <span style={style}>{text}</span>;
};

export default Todo;
