import React from "react";

function Home() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header" >
                    <h2>Example body text</h2>
                    <p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
                    <p><small>This line of text is meant to be treated as fine print.</small></p>
                    <p>The following is <strong>rendered as bold text</strong>.</p>
                    <p>The following is <em>rendered as italicized text</em>.</p>
                    <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
                
                    <figure>
                        <blockquote class="blockquote">
                            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

                        </blockquote>
                        <figcaption class="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Home;