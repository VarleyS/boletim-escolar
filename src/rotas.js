import React from 'react';
import { Route, HashRouter, Routes } from 'react-router-dom';
import Home from './views/home';
import CadastroAluno from './views/alunos/cadastro';
import CadastroNotas from './views/notas/notas';

export default () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cadastro-aluno" element={<CadastroAluno />} />
                <Route path="cadastro-nota" element={<CadastroNotas />} />
            </Routes>
        </HashRouter>
    )
}