import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/home';
import CadastroAluno from './views/alunos/cadastro';
import CadastroNotas from './views/notas/cadastro';
import ConsultaAlunos from './views/alunos/consulta';

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cadastro-aluno/:cpf?" element={<CadastroAluno />} />
            <Route path="cadastro-nota" element={<CadastroNotas />} />
            <Route path="consulta-aluno" element={<ConsultaAlunos />} />
        </Routes>
    )
}