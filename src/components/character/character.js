import React from 'react'
import Body from './body'
import('./styles.scss')

const Character = (props) => {
    const { users } = props

    return (
        <>
            {users.map(user => {
                const {
                    name,
                    age,
                    height,
                    weight,
                    hair,
                    image
                } = user.node;
                const style = { backgroundImage: 'url(' + image + ')' };

                return (
                    <>
                        <div key={name} className="card">
                            <header style={style} className="card-header">
                                <h4 className="card-header--title">{name}</h4>
                            </header>
                            <Body
                                name={name}
                                age={age}
                                height={height}
                                weight={weight}
                                hair={hair}
                            />
                        </div>
                    </>
                )
            })}
        </>
    )
}
export default Character

