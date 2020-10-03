import React from "react";
import { useState, useEffect } from "react";
import SendIcon from "@material-ui/icons/Send";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import "./App.css";
import {
  InputLabel,
  Input,
  FormControl,
  FormHelperText,
  Button,
} from "@material-ui/core";
import db from "./firebase";
import Message from "./Message";
import firebase from "firebase";
const App = () => {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const SetInput = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    const user = prompt("Enter your Username:");

    setUsername(user);

    try {
      db.collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((doc) => {
              return doc.data();
            })
          );
        });
    } catch (error) {
      return { username: "UnDefined", message: "Not Connected" };
    }
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    try {
      db.collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((doc) => {
              return doc.data();
            })
          );
        });
    } catch (error) {
      setMessages(...messages, {
        username: "Undefined",
        message: "Not Connected",
      });
    }

    setInput("");
  };

  return (
    <section className="App">
      <h1 className="shadow">Welcome to CHHAMP</h1>
      <section className="header">
        <section className="messages">
          {messages.map((messageContent) => {
            return (
              <Message
                message={messageContent.message}
                username={messageContent.username}
                thisUser={username}
              />
            );
          })}
        </section>
        <form className="form_alignment shadow">
          <FormControl className="inputField">
            <InputLabel htmlFor="my-input">Enter your Message...</InputLabel>

            <Input
              value={input}
              onChange={SetInput}
              id="my-input"
              aria-describedby="my-helper-text"
            />
            <FormHelperText id="my-helper-text">
              Your Messages are end to end encrypted
            </FormHelperText>
          </FormControl>
          <Button
            onClick={sendMessage}
            className="sendButton"
            variant="contained"
            disabled={!input}
          >
            <SendIcon />
          </Button>
        </form>
      </section>
    </section>
  );
};
export default App;
