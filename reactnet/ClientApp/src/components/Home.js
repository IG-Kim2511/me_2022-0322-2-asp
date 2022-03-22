import React, { Component } from 'react';
import './home.css'
export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello, Pioneering Programmers!</h1>
        <main className='world'>
          <div className='world-left'></div>
          <div className='world-right'></div>
        </main>
   
        <button className='myBtn'>btn</button>
      </div>
    );
  }
}
