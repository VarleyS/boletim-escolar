import React from "react";

import { Route, HashRouter, Routes } from 'react-router-dom';

import Home from './views/home';
import CadastroAluno from './views/alunos/cadastro';


const Rotas = () => {
    return (
        <HashRouter>        
            <Routes>
                <Route exact path="/cadastro-aluno" component={CadastroAluno} />
                <Route exact path="/" component={Home} />
            </Routes>
        </HashRouter>

    )
}

export default Rotas;