import React from "react";
import "./Message.css";
const Message = (props) => {
  const isUser = props.username === props.thisUser;
  return isUser ? (
    <h3 className="message_user">
      {props.username}:{props.message}
    </h3>
  ) : (
    <h3 className="message_thisUser">
      {props.username}:{props.message}
    </h3>
  );
};
export default Message;
