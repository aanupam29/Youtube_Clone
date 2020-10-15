import React from 'react'
import './Row.css'

function Row({selected, Icon, title}) {
    return (
        <div className={`row ${selected && 'selected'}`} >
            <Icon className="row__icon" />
            <h2 className="row__title">{title}</h2>
        </div>
    )
}

export default Row
