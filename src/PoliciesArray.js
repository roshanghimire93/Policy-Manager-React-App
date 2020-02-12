import React from 'react'
import Policies from './Policies'
import './Policies.css'

const PoliciesArray = ({PoliciesList}) => {
    return (
        <div className='wrapper'>
            {PoliciesList.map(policy => {
                return <Policies key = {policy.id} name = {policy.title} link = {policy.link}/>
            })
        }
        </div>
    )
}

export default PoliciesArray;