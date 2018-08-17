import React from "react";
import "./css/header.css";


const Header = props => 
    <div>
        <nav className="navbar">            
                <div>Clicky App</div>
                <div>{props.centerText}</div>
                <div>score: {props.score}  |  Highscore: {props.highScore}</div>
        </nav>
        
    </div>
    

export default Header;
