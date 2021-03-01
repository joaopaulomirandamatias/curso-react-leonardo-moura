import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParamentro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import "./App.css";

export default (_) => (
  <div className="App">
    <h1>Fundamento React</h1>

    <div className="Cards">
      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio min={1} max={100} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - ComParamentro" color="#E8B71A">
        <ComParamentro
          titulo="Situação do Aluno"
          aluno="João Paulo"
          nota={8.3}
        />
      </Card>

      <Card titulo="#01 - Primeiro" color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
