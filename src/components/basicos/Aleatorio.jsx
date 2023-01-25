import React from "react";

export default function Aleatorio(props) {
    const min = props.min;
    const max = props.max;
    const randNum =  parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h3>Número aleatório entre {min} e {max}:</h3>
            {randNum}
        </div>
    );
};