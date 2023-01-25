import React from "react";
import alunos from "../../data/alunos";

export default (props) => {
    const listaAlunos = alunos.map((alunoIndividual) => {
        return (
            <li key = {alunoIndividual.id}>
                {alunoIndividual.id} - {alunoIndividual.nome}: Nota {alunoIndividual.nota}
            </li>
        );
    });

    return (
        <div>
            <ul style={{listStyle: "none"}}>
                {listaAlunos}
            </ul>
        </div>
    );
};