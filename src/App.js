import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'
import PoliciesArray from './PoliciesArray';
import 'tachyons';
import SearchBox from './SearchBox';

class App extends Component {

  constructor(){
    super()
    this.state = {
      PoliciesList: [],
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  componentDidMount(){
    fetch('https://my-json-server.typicode.com/roshanghimire93/demo/policies').then(response => {
      return response.json()
    })
    .then(users => {
      return this.setState({PoliciesList: users})
    })
  }
  
  render(){
    const filteredlist = this.state.PoliciesList.filter(policy => {
      return policy.title.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    if(this.state.PoliciesList.length === 0){
      return(
        <div className='tc'>
          <img className='App-logo' src={logo} alt='logo'/>
          <h1>Loading..</h1>
        </div>
      )
    }
    else{
      return (
        <div className='App'>
          <h1 className='Title'>POLICIES</h1>
          <SearchBox searchChange = {this.onSearchChange}/>
          <PoliciesArray PoliciesList = {filteredlist}/>
        </div>
      );
    }
  }
}

export default App;