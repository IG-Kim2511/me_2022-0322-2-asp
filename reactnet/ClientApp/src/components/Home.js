import React, { Component, useState } from 'react';
import './home.css'



export class Home extends Component {
  static displayName = Home.name;

  
  render () {

    return (
      <div>
        <div className='title'>
          <h1>Hello, Pioneering Programmers!</h1>
          <button className='myBtn'>dark</button>
        </div>
        <main className='world'>
          <div className='world-left'>
            <button className='myBtn btn_me'>white</button>
            <div className="text">text</div>
          
          </div>
          <div className='world-right'>
            <div className="text">text</div>
          </div>
        </main>
   
      </div>
    );
  }
}
