import React from 'react';
import { useStaticQuery, graphql } from "gatsby"


const Character = (props) => {

    const data = useStaticQuery(graphql`
        query RandomCharQuery {
                allRandomChar {
                    edges {
                        node {
                            id
                            name
                            image
                            height
                        }
                    }
                }
        }
    `)

    const character = data.allRandomChar.edges;

    return (
        <div className="container">
            {character.map((char, i) => {
                const _char = char.node;
                return (
                    <div key={_char.id} className="card">
                        <h1>{_char.name}</h1>
                        {/* <img alt={i} className="img">{_char.image}</img> */}
                    </div>
                )
            })};
        </div>
    )
}

export default Character
