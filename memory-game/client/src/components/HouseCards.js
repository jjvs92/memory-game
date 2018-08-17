import React from "react";
import "./css/houseCards.css"

const HouseCards = props => (
    
    <div className="container">

        <div className="row houseCards">
            {props.children}
        </div>
        
    </div>


)

export default HouseCards;