import React from "react";

import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './views/home';
import CadastroAluno from "./views/alunos/cadastro";


export default () => {
    return(
        <HashRouter>
            <Routes>
                <Route exact path='/cadastro-aluno' component={CadastroAluno} /> 
                <Route exact path="/" component={Home}/>  
            </Routes>
        </HashRouter>
    )
}