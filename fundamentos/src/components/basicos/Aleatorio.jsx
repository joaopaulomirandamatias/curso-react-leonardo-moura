import React from "react";

export default function Aleatorio(props){
    
    const { min, max } = props;
    
    const result = parseInt(Math.random() * (max - min )) + props.min
    
    return (
        <div>
            <h1>Valor Aleatório</h1>
            <p>valor Mínimo: <strong> {props.min} </strong></p>
            <p>valor Máximo: <strong> {props.max} </strong></p>
            <p>O resultado é: {result}</p>
        </div>
    )
}