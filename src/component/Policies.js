import React from 'react'

const Policies = ({id, link, name}) => {
        return (
            <div>
                <a href={link} target='_blank' rel="noopener noreferrer" className = 'item grow'>
                {name}</a>
            </div>
        )
    }

export default Policies;