import React from 'react'
import BodyContent from './body_content'
import BodyFooter from './bodyFooter'

import('./styles.scss')

const Character = (props) => {
    const { user } = props

    const style = { backgroundImage: 'url(' + user.image + ')' };
    return (
            <div key={user.name} className="card">
                <header style={style} className="card-header">
                    <h4 className="card-header--title">{user.name}</h4>
                </header>
                <BodyContent
                    age={user.age}
                    weight={user.weight}
                    height={user.height}
                    hair={user.hair}
                />
                <BodyFooter
                    professions={user.professions.length > 0 ? user.professions : "none"}
                    friends={user.friends.length > 0 ? user.friends : "none"}
                />
            </div>
    )
}
export default Character

