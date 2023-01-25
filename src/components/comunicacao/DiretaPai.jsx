import React from "react";
import DiretaFilho from "./DiretaFilho";

export default function (props) {
    return (
        <div>
            <DiretaFilho nome="Junior" idade={20} bool={true} />
            <DiretaFilho nome="Felipe" idade={16} bool={false} />
        </div>
    )
}