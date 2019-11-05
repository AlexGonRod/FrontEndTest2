import React from 'react'

const BodyContent = (props) => {
    const {
        age,
        weight,
        height,
        hair
    } = props

    return (
        <div className="card-body">   
            <div className="body">
                <div className="body_content">
                    <p className="body-content_top">Age</p>
                    <p className="body-content_bottom">{age}</p>
                </div>
                <div className="body_content">
                    <p className="body-content_top">Weight</p>
                    <p className="body-content_bottom">{weight}</p>
                </div>
                <div className="body_content">
                    <p className="body-content_top">Height</p>
                    <p className="body-content_bottom">{height}</p>
                </div>
                <div className="body_content">
                    <p className="body-content_top">Hair Color</p>
                    <p className="body-content_bottom">{hair}</p>
                </div>
            </div>             
        </div>
    )
}

export default BodyContent