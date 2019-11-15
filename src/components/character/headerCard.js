import React from 'react'

const HeaderCard = (props) => {
    const {
        style,
        user
    } = props

    return (
        <header style={style} className="card-header">
            <h4 className="card-header--title">{user}</h4>
        </header>
    )
}

export default HeaderCard
