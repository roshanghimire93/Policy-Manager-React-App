import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'
import PoliciesArray from '../component/PoliciesArray';
import 'tachyons';
import SearchBox from '../component/SearchBox';
import ErrorBoundary from '../component/ErrorBoundary';
import Scroll from '../component/Scroll';

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
    const {PoliciesList, searchfield} = this.state
    const filteredlist = PoliciesList.filter(policy => {
      return policy.title.toLowerCase().includes(searchfield.toLowerCase())
    })
    return(!PoliciesList.length ?
      <div className='tc'>
        <img className='App-logo' src={logo} alt='logo'/>
        <h1>Loading<span className='blink'>...</span></h1>
      </div>
    :
      <div className='App'>
        <h1 className='Title'>POLICIES</h1>
        <ErrorBoundary>
          <SearchBox searchChange = {this.onSearchChange}/>
          <Scroll>
            <PoliciesArray PoliciesList = {filteredlist}/>
          </Scroll>
        </ErrorBoundary>
      </div>
    )
  }
}

export default App;