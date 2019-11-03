import React from 'react'
import BodyContent from './body_content'

const Body = (props) => {
    const {
        age,
        name,
        weight,
        height,
        hair
    } = props

    return (
        <div className="card-body">                    
            <h2>{name}</h2>       
            <div className="body">
               <BodyContent
                    age={age}
                    weight={weight}
                    height={height}
                    hair={hair}
               />
            </div>             
        </div>
    )
}

export default Body