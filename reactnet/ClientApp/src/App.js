import React, { useState } from 'react'
import './App.css'


function App() {
  const [first, setfirst] = useState("")
  const [data, setData] = useState("hi")
  
  return (
    <div>
    <div className='title'>
      <h1>Hello, Pioneering Programmers!</h1>
      </div>
      <main className='world'>
        
        <div className='world-left'>
          <button className='myBtn' >dark theme</button>
          <button className='myBtn btn_me' onClick={()=>{setData('hello')}}>white</button>
          <div className="text">text</div>
        
        </div>
        <div className='world-right'>
          <div className="text">{first}</div>
          <div dangerouslySetInnerHTML={{__html: data}}/>
        </div>
      </main>

  </div>
  );
}

export default App;
