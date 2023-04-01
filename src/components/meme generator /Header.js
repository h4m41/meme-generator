import React from "react";
import "./meme.css";
import troll from "../../images/meme/Troll.png";
const Header = () => {
  return (
    <header className="header">
      <div className="flex">
        <img src={troll} className="header-image" alt="troll" />
        <h2 className="header-title">Hama Meme Generator </h2>
      </div>
      <h4 className="header-project">make memes in seconds</h4>
    </header>
  );
};

export default Header;
