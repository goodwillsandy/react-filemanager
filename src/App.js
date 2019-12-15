import React from "react";
import "./App.css";
import Explorer from "./containers/explorer";
// import SideBar from "./containers/sideBar";

function App() {
  return (
    <div className="App ">
      <div className="flex fullpage">
        <Explorer />
      </div>
    </div>
  );
}

export default App;
