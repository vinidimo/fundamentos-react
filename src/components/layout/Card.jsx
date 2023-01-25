import React from "react";
import "./Card.css"

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || "#ff0000", //cor = props.color, caso n seja definida, sera #f00
        borderColor: props.color || "#ff0000",
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title"><h2>{props.titulo}</h2></div>
            <div className="Content">{props.children}</div>
        </div>
    );
};