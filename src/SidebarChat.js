import React, { useState, useEffect } from "react";
// react router dom
import { Link } from "react-router-dom";
// Material UI / Core
import { Avatar } from "@material-ui/core";
// SidebarChat Style
import "./SidebarChat.css";
// firebase
import db from "./firebase";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("7876");
  const [messages, setMessages] = useState("");

  // give us last message from firebase collection by last time order
  // every times react being render
  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  // give us random number everytime react being render
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat room");

    if (roomName) {
      // do some clever database stuff...
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  // conditional rendering : if compt not have props addNewChat then return this
  return !addNewChat ? (
    // give every sidebar chat a link for go to page rooms/different id
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        {/* dicebear link is the web that can generate random avatar image with number parameter */}
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    // otherwaise return this
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Room</h2>
    </div>
  );
}

export default SidebarChat;
