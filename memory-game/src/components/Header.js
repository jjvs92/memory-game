import React from "react";
import "./css/header.css";


const Header = props => 
    <div>
        <nav class="navbar">            
                <div>Clicky App</div>
                <div>{props.children}</div>
                <div>score: {props.children}  |  Highscore: {props.children}</div>
        </nav>
        
    </div>
    

export default Header;
