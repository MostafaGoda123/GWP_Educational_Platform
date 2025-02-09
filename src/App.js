import React from "react";
import Sidebar from "./components/Sidebar";
import MainBar from "./components/MainBar";
import { useLocation } from "react-router-dom";

const App = () => {

  let location = useLocation();

  return (
    <main className="App flex">
      { !(location.pathname==='/signin') && !(location.pathname==='/signup') && <Sidebar />}
      <MainBar />
    </main>
  );
};

export default App;
