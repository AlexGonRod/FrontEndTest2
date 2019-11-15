import React from 'react'

const BodyFooter = (props) => {
    const {
        professions,
        friends
    } = props

    return (
        <div className="body-footer">
            <div className="footer-wrapper">
                <h3 className="title">Professions</h3>
                <p className="description">{professions.join(', ')}</p>
            </div>
            <div className="footer-wrapper">
                <h3 className="title">Friends</h3>
                <p className="description">{friends.join(', ')}</p>
            </div>
        </div>
    )
}

export default BodyFooter
