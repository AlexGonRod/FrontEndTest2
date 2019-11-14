import React, { useState } from 'react'

const Collapse = () => {
    const [check, setCheck] = useState(false)

    return (
        <div className="checkWrapper">
            <button className="checkBtn" onClick={() => setCheck(!check)}>V</button>
        </div>
    )
}

export default Collapse