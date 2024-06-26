import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { appStore } from "./utils/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;
