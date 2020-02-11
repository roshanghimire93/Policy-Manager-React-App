import React, { Component } from 'react';
import './App.css';
import PoliciesArray from './PoliciesArray';
import 'tachyons';
import {PoliciesList} from './PoliciesList'
import SearchBox from './SearchBox';

class App extends Component {

  constructor(){
    super()
    this.state = {
      PoliciesList: PoliciesList,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }



  render(){
    const filteredlist = this.state.PoliciesList.filter(policy => {
      return policy.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className="App">
        <h1 className='Title'>POLICIES</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <PoliciesArray PoliciesList = {filteredlist}/>
      </div>
    );
  }
}

export default App;