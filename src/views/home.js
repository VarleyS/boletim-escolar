import React from "react";

function Home() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header" >
                    <h2>Bem vindo ao sistema de cadastro, gerenciamento e acompanhamento estudantil!</h2>
                </div>
                <div className="card-body">
                    <p>Criamos este sistema com o intuito de gerar visibilidade do progresso e evolução do estudante, <br></br>facilitando o acompanhamento do responsável mais de perto.</p>
                    <p>The following is <strong>rendered as bold text</strong>.</p>
                    <p>The following is <em>rendered as italicized text</em>.</p>
                    <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>

                    <figure>
                        <blockquote className="blockquote">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

                        </blockquote>
                        <figcaption className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Home;