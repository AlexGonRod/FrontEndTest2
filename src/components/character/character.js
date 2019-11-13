import React from 'react'
import BodyContent from './body_content'
import BodyFooter from './bodyFooter'
// import Collapse from './collapse'

import('./styles.scss')

const Character = (props) => {
    const [check, setCheck] = useState(false)
    const { user } = props

    addCollapse = () => {
       return check ? 'collapsed' : 'uncollapse' 
    }

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
                <div className="checkWrapper">
                    <button className="checkBtn" onClick={() => setCheck(!check)}>V</button>
                </div>
                <BodyFooter
                    className={this.addCollapse()}
                    professions={user.professions}
                    friends={user.friends}
                />
            </div>
    )
}
export default Character 

