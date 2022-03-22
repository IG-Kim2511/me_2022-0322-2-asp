import React, { useState } from 'react'
import './App.css'


function App() {
  const [first, setfirst] = useState("")
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
        <div className="text">{first}</div>
      </div>
    </main>

  </div>
  );
}

export default App;
