import React, { useState } from 'react'
import './App.css'


function App() {
  
  const [data, setData] = useState("")
  
  // {/* js 1149 */}  {/* js 1208 */}
  const [input, setInput] = useState("")
  
  const [dark, setDark] = useState(true)
  
  
  //  {/* js 1208 */}
  function submit() {
    setData(`“Message Sent: [${input} from text area]”`)
    setInput("");    
  }


  //  {/* 🍀js 0108 */}  
  const renderingBtnElm = document.querySelector('.renderingBtn');
  
  function createBtn() {

      // let button =  document.createElement('button');
      // button.classList.add('myBtn');
      // button.innerHTML = `btn(1)`;     

      // renderingBtnElm.append(`button`);
    
    renderingBtnElm.innerHTML +=`
      <button className="myBtn">btn(1)</button>
    `;

    setData(`button 1 added`)

    // className="myBtn"
    // onClick={()=>{setData("button(1) clicked")}}    
  }
  
  
  // 🍀js 0310. dark mode
  const worldLeft = document.querySelector('.world-left');  
  const worldLeftText = document.querySelector('.world-left .text');

  const worldRight = document.querySelector('.world-right');
  const worldRightText = document.querySelector('.world-right .text');
  
  const myBtn = document.querySelector('.myBtn');


  function darkMode() {
    worldLeft.classList.toggle('dark');    
    worldRight.classList.toggle('dark');    

    worldLeftText.classList.toggle('dark');    
    worldRightText.classList.toggle('dark');    
    myBtn.classList.toggle('dark');    


    setData('Theme was set to Dark')
  }


  return (
    <div>
      <div className="title">
        <h1>Hello, Pioneering Programmers!</h1>
      </div>
        <main className='world'>
          
          <section className='world-left light'>

            <button className='myBtn' onClick={()=>{darkMode();}} >dark theme</button>

            <button className='myBtn btn_me light' onClick={()=>{setData('Button 3 was added')}}>button 1</button>


            <div className="text light">text</div>

            {/* js 0108 */}
            <div className='renderingBtn'></div>
          
          </section>


          <section className='world-right light'>
            
            <div dangerouslySetInnerHTML={{__html: data}}/>

            
            <div className="text light">text</div>
            
            {/* js 1149 */}
            {/* <div>“Message Sent: [{input} from text area]”</div> */}
            
          </section>
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
