import React from "react";

export default function Aleatorio(props){
    
    const { min, max } = props;
    
    const result = parseInt(Math.random() * (max - min )) + props.min
    
    return (
        <div>
            <h1>Valor Aleatório</h1>
            <p><strong>Mínimo:</strong> {props.min} </p>
            <p><strong> Máximo: </strong>  {props.max}</p>
            <p> <strong>Resultado </strong> {result}</p>
        </div>
    )
}