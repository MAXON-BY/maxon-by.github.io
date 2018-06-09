import React from "react";

function Item(props){

	return (
		<li className="list-group-item"><span>{props.text}</span><span><i className="far fa-play-circle"></i></span></li>
		)
}

export default Item;
