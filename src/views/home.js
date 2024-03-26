import React from "react";

function Home(){
    return (
        <div className="list-group">
            <a href="cadastro-aluno" className="list-group-item list-group-item-action flex-column align-items-start active">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Bem vindo a tela Home!</h5>
                    <small>3 days ago</small>
                </div>
                <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small>Donec id elit non mi porta.</small>
            </a>
            <button type="button" class="btn btn-primary">Primary</button>
        </div>
    )
}

export default Home;