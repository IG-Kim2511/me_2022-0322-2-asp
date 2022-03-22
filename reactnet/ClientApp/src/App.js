import React, { useState } from 'react'
import './App.css'


function App() {
  const [data, setData] = useState("")
  
  // {/* js 1149 */}  {/* js 1208 */}
  const [input, setInput] = useState("")

  const renderingBtnElm = document.querySelector('.renderingBtn');


  //  {/* js 1208 */}
  function submit() {
    setData(`“Message Sent: [${input} from text area]”`)
    setInput("");    
  }

  
  function createBtn() {
    renderingBtnElm.innerHTML=`
      <button>btn(1)</button>
    `;

    // className="myBtn"
    // onClick={()=>{setData("button(1) clicked")}}

    
  }
  
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

            <div className='renderingBtn'></div>
          
          </div>
          <div className='world-right'>
            
            <div dangerouslySetInnerHTML={{__html: data}}/>
            
            {/* js 1149 */}
            {/* <div>“Message Sent: [{input} from text area]”</div> */}
            
          </div>
        </main>

        <footer>
          {/* js 1149 */}
          <input type="text" value={input}  onChange={(e) => setInput(e.target.value)} />

          {/* 🍀js 1208. Sending input text when I click button */}
          <button className='myBtn' onClick={()=>{ submit(); }}>send</button>

          <button className='myBtn clear' onClick={()=>{setData(``)}}>clear</button>

          <button className='myBtn block' onClick={()=>{createBtn();}}>Add Button</button>
        </footer>
    </div>
  );
}

export default App;
