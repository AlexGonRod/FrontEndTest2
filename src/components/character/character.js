import React from 'react'
import Body from './body'
import('./styles.scss')

const Character = (props) => {
    const {user} = props
    const style = { backgroundImage: 'url(' + user.image + ')' };
    return (
            <div key={user.name} className="card">
                <header style={style} className="card-header">
                    <h4 className="card-header--title">{user.name}</h4>
                </header>
                
            </div>
    )
}
export default Character

