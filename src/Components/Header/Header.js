import React from "react";
import "./Header.css"

const Header = props => (
    <div className="header">
        <div className="title">{props.children}</div><br></br>
        <div className="score">
            Score: {props.score} <br></br> Highscore: {props.highscore}
        </div>


    </div>
);

export default Header;