import React from 'react';
import('./styles.scss')

const Character = (props) => {
    const { users } = this.props.data

    return (
        <>
            {users.map((user) => {
                const userData = user.node;
                var style = {
                    backgroundImage: 'url(' + userData.image + ')',
                };
                return (
                     <div key={userData.id}>
                        <header style={style} className="card-header">
                            <h4 className="card-header--title">{userData.name}</h4>
                        </header>
                        <div className="card-body">
                            <p className="date">March 20 2015</p>

                                {/* <h2>{userData.name}</h2> */}
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default Character

