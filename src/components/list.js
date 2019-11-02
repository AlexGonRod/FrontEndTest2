import React from 'react'
import VirtualList from 'react-tiny-virtual-list';
import Character from './character/character'
import { useStaticQuery, graphql } from "gatsby"

const List = () => {
    const data = useStaticQuery(graphql`
        query RandomCharQuery {
                allRandomChar {
                    edges {
                        node {
                            id
                            name
                            height
                            image
                        }
                    }
                }
        }
    `)

    const users = data.allRandomChar.edges;

    return (
        <VirtualList
            width={100}
            height='100vh'
            scrollDirection='horizontal'
            itemCount={users.length}
            itemSize={100}
            renderItem={ () => <Character data={users}/>}
        >
        </VirtualList>
    )
}

export default List
