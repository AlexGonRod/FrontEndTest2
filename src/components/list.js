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
            height={window.innerHeight - 10}
            itemCount={users.length}
            itemSize={500}
            scrollToIndex={0}
            overscanCount={50}
            className="VirtualList"
            renderItem={({ index }) => (
                <Character
                    index={users[index]}
                    user={users[index].node}
                />
            )}
        />
    )
}

export default List
