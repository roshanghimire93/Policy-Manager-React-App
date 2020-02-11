import React from 'react'

const SearchBox = ({searchChange}) => {
    return (
        <div className = 'pa2'>
            <input onChange = {searchChange} className='pa2 mb3 ba b--green bg-lightest-blue' type='search' placeholder='search policies'/>
        </div>
    )
}

export default SearchBox;