import React from "react";
import "./css/CharacterCard.css"

const CharacterCard = props => (

<div className= "col-sm-3 cardImage">

    <div className="card" styles="width: 18rem;">
    <img className="card-img-top characterCard" onClick={()=> props.handleClick(props.id)}src={props.thumbnail} alt={props.name} id={props.id}/>
    <div className="card-body">
        <p className="card-text characterCardText">{props.name}</p>
    </div>
    </div>




</div>

)

export default CharacterCard;