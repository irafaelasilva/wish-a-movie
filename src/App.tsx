import React from "react";
import * as s from "./App.styles";
import MainView from "./components/main-view";
import SideBar from "./components/sidebar";

function App() {
  return (
    <s.Wrapper>
      <SideBar />
      <MainView />
    </s.Wrapper>
  );
}

export default App;
