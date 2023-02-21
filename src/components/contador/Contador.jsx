import Display from "./Display";
import "./Contador.css";
import React from "react";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    };

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        });
    }

    render () {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes onInc={this.inc} onDec={this.dec} />
            </div>
        );
    }
}

export default Contador;