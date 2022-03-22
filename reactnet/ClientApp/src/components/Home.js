import React, { Component } from 'react';
import './home.css'
export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello, Pioneering Programmers!</h1>
   
        <button className='myBtn'>btn</button>
      </div>
    );
  }
}
