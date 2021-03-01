import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParamentro from './components/basicos/ComParametro'

ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParamentro 
            titulo="Situação do Aluno"
            aluno="João Paulo"
            nota={8.3}
        />
            
    </div>, 
    document.getElementById('root')
)