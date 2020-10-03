import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Divider } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import "./Message.css";

const Message = (props) => {
  const isUser = props.username === props.thisUser;

  return isUser ? (
    <Card className="message_user">
      <CardActionArea className="iB">
        <CardContent className="iM">
    
      <Typography
        width="100%"
        variant="body2"
        color="textSecondary"
        component="p"
      >
        <h4 className="name">You</h4>
      </Typography>
    
      <Typography gutterBottom variant="h5" component="h2">
        {props.message}
      </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  ) : (
    <Card className="message_thisUser">
      <CardActionArea className="iM">
      <CardContent className="iB">
      <Typography
        width="100%"
        variant="body2"
        color="textSecondary"
        component="p"
      >
        <h4 className="name">{props.username}</h4>
      </Typography>


      <Typography gutterBottom variant="h5" component="h2">
        {props.message}
      </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default Message;
