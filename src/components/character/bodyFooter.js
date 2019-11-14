import React from 'react'

const BodyFooter = (props) => {
    const {
        professions,
        friends
    } = props

    return (
        <div className="body_footer">
            <div footer-wrapper>
                <h3 className="title">Professions</h3>
                <p className="description">{professions}</p>
            </div>
            <div footer-wrapper>
                <h3 className="title">Friends</h3>
                <p className="description">{friends}</p>
            </div>
        </div>
    )
}

export default BodyFooter