import React, {Component} from 'react'

class Policies extends Component{
    render(){
        return (
            <div>
                <a href={this.props.link} target='_blank' rel="noopener noreferrer" className = 'item grow'>
                {this.props.name}</a>
            </div>
        )
    }
}

export default Policies;