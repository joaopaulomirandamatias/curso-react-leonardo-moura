import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParamentro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default (_) => (
  <div id="app">
    <h1>Fundamento React</h1>
    <Aleatorio 
        min={1}
        max={100}
    />
    <Fragmento />
    <ComParamentro titulo="Situação do Aluno" aluno="João Paulo" nota={8.3} />
    <Primeiro></Primeiro>
  </div>
);
