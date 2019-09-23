import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import hogs from '../porkers_data';

class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: [...hogs]
    }
  }

  filterFn = () => {
    this.setState(prevState => {
      let filtered = prevState.hogs.filter(hog => {
        return hog.greased
      })
      // debugger
      return {hogs: [...filtered]}
    }, () => console.log(this.state.hogs) )
  }

  sortFn = () => {
    // debugger
    this.setState(prevState => {
      let sorted = prevState.hogs.sort((hogA, hogB) => {
        return hogB.weight - hogA.weight
      })
      hogs: return [...sorted]
    }) 
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < HogContainer onSort={this.sortFn} onFilter={this.filterFn} hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
