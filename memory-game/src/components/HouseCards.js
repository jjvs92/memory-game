import React from "react";
import CharacterCard from "./CharacterCard";

const HouseCards = props => (
    
    <div className="container">

        <div className="row">
            {props.children}
        </div>
        
    </div>


)

export default HouseCards;