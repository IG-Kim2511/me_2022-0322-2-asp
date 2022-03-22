import React, { useState } from 'react'
import './App.css'


function App() {
  const [theme, setTheme] = useState("")
  const [data, setData] = useState("")
  
  return (
    <div>
    <div className='title'>
      <h1>Hello, Pioneering Programmers!</h1>
      </div>
      <main className='world'>
        
        <div className='world-left'>
          <button className='myBtn' onClick={()=>{setData('Theme was set to Dark')}} >dark theme</button>
          <button className='myBtn btn_me' onClick={()=>{setData('Button 3 was added')}}>white</button>
          <div className="text">text</div>
        
        </div>
        <div className='world-right'>
          
          <div dangerouslySetInnerHTML={{__html: theme}}/>
          <div dangerouslySetInnerHTML={{__html: data}}/>
        </div>
      </main>

  </div>
  );
}

export default App;
