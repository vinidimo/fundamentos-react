import React from "react";
import If from "./If";

export default function (props) {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test ={usuario && usuario.nome}>
                Seja bem-vindo <strong>{ props.usuario.nome }</strong>!
            </If>
            <If test ={!usuario || !usuario.nome}>
                Nome incompleto!
            </If>
        </div>
    )
}