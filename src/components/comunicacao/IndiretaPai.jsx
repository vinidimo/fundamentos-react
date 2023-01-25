import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default function (props) {
    let nome = "Paulo";
    let idade = 50;
    let nerd = false;

function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
    console.log(nomeParam, idadeParam, nerdParam);
    nome = nomeParam;
    idade = idadeParam;
    nerd = nerdParam;
}
    return (
        <div>
            <span>{nome} </span>
            <span>{idade} </span>
            <span>{nerd ? "Verdadeiro" : "Falso"}</span>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}