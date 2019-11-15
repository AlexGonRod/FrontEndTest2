import React from 'react'
import HeaderCard from './headerCard'
import BodyContent from './body_content'
import BodyFooter from './bodyFooter'

import('./card.scss')

const Character = (props) => {
    const { user } = props

    const style = { backgroundImage: 'url(' + user.image + ')' };
    return (
            <div key={user.name} className="card">
                <HeaderCard style={style} user={user.name}/>
                <BodyContent
                    age={user.age}
                    weight={user.weight}
                    height={user.height}
                    hair={user.hair}
                />
                <BodyFooter
                    professions={user.professions ? user.professions : "none"}
                    friends={user.friends ? user.friends : "none"}
                />
            </div>
    )
}
export default Character 

