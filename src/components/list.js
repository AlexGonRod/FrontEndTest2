import React from 'react'
import VirtualList from 'react-tiny-virtual-list';
import Character from './character/character'
import { useStaticQuery, graphql } from "gatsby"

const List = (props) => {
    const data = useStaticQuery(graphql`
        query RandomCharQuery {
                allRandomChar {
                    edges {
                        node {
                            id
                            name
                            age
                            height
                            weight
                            image
                            hair
                            professions
                            friends
                        }
                    }
                }
        }
    `)

    const users = data.allRandomChar.edges;


    return (
        <VirtualList
        width='100%'
        height={window.innerHeight - 124}
        itemCount={1000}
        itemSize={200}
        style={{ border: '1px solid' }}
        renderItem={({ index, style }) => (
            <Character 
                key={index} 
                style={style}
                users={users}
            />
        )} />
    )
}

export default List
