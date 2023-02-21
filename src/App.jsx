import React from "react";

import PrimeiroComponente from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import FragmentoComReactFragment from "./components/basicos/FragmentoComReactFragment";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";

import Card from "./components/layout/Card"
import "./App.css" 

export default function (props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="12 - Contador" color="#424242">
                    <Contador numeroInicial={10} />
                </Card>

                <Card titulo="11 - Componente Controlado (Input)" color="#E45F56">
                    <Input />
                </Card>

                <Card titulo="10 - Comunicação Indireta" color="#8BAD39">
                    <IndiretaPai />
                </Card>

                <Card titulo="09 - Comunicação Direta" color="#59323C">
                    <DiretaPai />
                </Card>

                <Card titulo="08 - Renderização Condicional" color="#982395">
                    <ParOuImpar numero={20} />
                    <UsuarioInfo usuario={{nome: "Fernando"}} />
                    <UsuarioInfo usuario={{email: "joao@email.com"}} />
                </Card>

                <Card titulo="07 - Desafio Repetição" color="#3A9AD9">
                    <TabelaProdutos />
                </Card>

                <Card titulo="06 - Repetição" color="#FF4C65">
                    <ListaAlunos />
                </Card>

                <Card titulo="05 - Familia" color="#00C8F8">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>

                <Card titulo="04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="03 - Fragmento" color="#E94C6F">
                    <FragmentoComReactFragment />
                </Card>

                <Card titulo="02 - Com Parâmetro" color="#588C73">
                    <ComParametro titulo="Situação do Aluno" aluno="Pedro Silva" nota={9.3} />
                </Card>

                <Card titulo="01 - Primeiro Componente">
                    <PrimeiroComponente></PrimeiroComponente>
                </Card>
            </div>
        </div>
    );
}