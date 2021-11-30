import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import "./App.css";
import ErrorAlert from "./service/errorAlert";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";
import userInfo from "./util/userInfo";
import { ChatIntro } from "./chat.intro";
import { theme } from "./util/customizeStyle";
function App() {
  const dispatch = useDispatch();
  const { logIn, logout, getUserData } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const isLoggedState = useSelector((state: State) => state.isLogged);
  useEffect(() => {
    if (isLoggedState) {
      const user = userInfo();
      getUserData(user);
    }
  }, [isLoggedState, getUserData]);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="success">
          Success
        </Button>
        <ErrorAlert></ErrorAlert>
        <button onClick={logIn}>login</button>
        <button onClick={logout}>logout</button>
        <ChatIntro />
      </ThemeProvider>
    </div>
  );
}
export default App;
