import React, { useState } from "react";
import "./App.css";
// react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
// context api
import { useStateValue } from "./StateProvider";

function App() {
  // getting data user from context api that have being dispatch from Login
  // so now we have user
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {/* give conditional rendering if user null render login page */}
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route exact path="/">
                <Chat />
                {console.log("this is user data: ", user)}
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
