import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import db from "./firebase";
import Message from "./Message";
import firebase from "firebase";
const App = () => {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const Input = (event) => {
    setInput(event.target.value);
  };
  useEffect(() => {
    const user = prompt("Enter your Username:");

    setUsername(user);

    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => {
            return doc.data();
          })
        );
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => {
            return doc.data();
          })
        );
      });
    setInput("");
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Welcome to CHHAMP</h1>
        <form>
          <input value={input} onChange={Input} type="text" />
          <button onClick={sendMessage}>Send</button>
        </form>
        <div className="messages">
          {messages.map((messageContent) => {
            return (
              <Message
                message={messageContent.message}
                username={messageContent.username}
                thisUser={username}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default App;
