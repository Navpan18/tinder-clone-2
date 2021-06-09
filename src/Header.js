import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";
import { Link , useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Header({ backButton }) {
  const history=useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={()=>history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header_icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header_icon" fontSize="large" />
        </IconButton>
      )}
      <Link to="/">
        <img className="header_logo" src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.svg" alt="tinder logo" />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header_icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
