import React from "react";

class CadastroAluno extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h2>Example body text</h2>
                    <p>Nullam quis risus eget <a href="/">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
                    <p><small>This line of text is meant to be treated as fine print.</small></p>
                    <p>The following is <strong>rendered as bold text</strong>.</p>
                    <p>The following is <em>rendered as italicized text</em>.</p>
                    <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
                </div>
                <div className="card-body">
                    Card Body
                </div>
            </div>
        )
    }
}

export default CadastroAluno; 