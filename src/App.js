import React, { Component } from 'react'
import './App.css';
import {ContactCard} from './components/contactCard'


class App extends Component {

  render() {
    return (
      <div className = 'toRender'>
        <ContactCard lastName = 'Edwards' firstName = 'Travyse'/> <br/>
        <ContactCard lastName = 'Borhara' firstName = 'Deepak'/> <br/>
        <ContactCard lastName = 'Lapid' firstName = 'AJ'/>
      </div>
    );
  }
}

export default App;