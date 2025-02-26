import React from "react";
import './assets/css/index.css'
import TitleCard from "./TitleCard";
import ShopsContainer from "./ShopsContainer";

const App = () => {
  return (
    <div className="app">
      <TitleCard />
      <ShopsContainer />
    </div>
  );
};

export default App;