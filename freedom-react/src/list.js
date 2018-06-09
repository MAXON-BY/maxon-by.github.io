//var React = require("react");
import React from "react";
import Item from "./item";
import mtv from "./img/mtv.png";

function List(){

	let addBtn = "Add track";
	let copy = "Max Nirkov";
	let heading = "Best playlist";
	let arr = ["Calvin Harris & Dua Lipa", "David Guetta & Sia", "George Ezra", "5 Seconds Of Summer", "Nice For What","Sigala & Paloma Faith","Liam Payne & J Balvin","Don't Say You Love Me"];

	let fruits = arr.map( (item, index) => {
		return <Item key={index} text={item} test="hi" />; /// Props = {text: "test text", test: "hi"}
	} );

	return (
		<div>
			<div>
				<img className="mtv" src={mtv} alt="MTV logo"/>
				<h3 className="list-group-item-heading" style={ {color: "white", fontSize: 22, textTransform: 'uppercase'} }>{heading}</h3>
			</div>

			<ul className="list-group">
				{fruits}
			</ul>

			<div className="btn-block">
				<button>{addBtn}</button>
			</div>

			<div>
				<p className="copy">© copyright <a href='https://maxon-by.github.io/' target='_blank'>{copy}</a></p>
			</div>
		</div>
		)
}

///module.exports = List;
export default List;
