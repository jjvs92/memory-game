import React from "react";
import "./css/CharacterCard.css"

const CharacterCard = props => (

<div className= "col-sm-3">

    <img className="card-img-top characterCard" onClick={()=> props.handleClick(props.id)}src={props.thumbnail} alt={props.name} id={props.id}/>


</div>

)

export default CharacterCard;