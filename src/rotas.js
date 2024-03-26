import React from 'react';
import { Route, HashRouter, Routes } from 'react-router-dom';
import Home from './views/home';
import CadastroAluno from './views/alunos/cadastro';

export default () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cadastro-aluno" element={<CadastroAluno />} />
            </Routes>
        </HashRouter>
    )
}