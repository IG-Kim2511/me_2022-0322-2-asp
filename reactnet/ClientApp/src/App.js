import React, { useState } from 'react'
import './App.css'


function App() {
  
  const [data, setData] = useState("")
  
  // {/* js 1149 */}  {/* js 1208 */}
  const [input, setInput] = useState("")
  
  const [dark, setDark] = useState("dark")
  
  
  
  // 🍀 js220400. dateTime      
    let today = new Date();
    let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;



  
  // 🍀 js 0310. dark mode
  const worldLeft = document.querySelector('.world-left');  
  const worldLeftText = document.querySelector('.world-left .text');

  const worldRight = document.querySelector('.world-right');
  const worldRightText = document.querySelector('.world-right .text');
  
  const myBtn = document.querySelector('.myBtn');
  
  const myBtnAll = document.querySelectorAll('.myBtn');
  


  function darkMode() {
    worldLeft.classList.toggle('dark');    
    worldRight.classList.toggle('dark');    

    worldLeftText.classList.toggle('dark');    
    worldRightText.classList.toggle('dark');    
     

    myBtnAll.forEach((p_item)=>{
      p_item.classList.toggle('dark');

    });

   
    // js220400
    setData(`${dateTime} Theme was set to Dark `)

    setTimeout(() => {   setData('')}, 1000);

    setDark("light");
  }

  
  function lightMode() {
    worldLeft.classList.toggle('dark');    
    worldRight.classList.toggle('dark');    

    worldLeftText.classList.toggle('dark');    
    worldRightText.classList.toggle('dark');    
       

    myBtnAll.forEach((p_item)=>{
      p_item.classList.toggle('dark');

    });



    setData(`${dateTime} Theme was set to light `)


    setTimeout(() => {   setData('')}, 1000);

    setDark("dark");
  }


  
    
  //  {/* js 1208 */}
  function submit() {
    setData(`“Message Sent: [${input} from text area]”`)
    
    setTimeout(() => {   setData('')}, 1000); 
    setInput("");   
  }

    //  {/* 🍀js 0108 */}  
  const renderingBtnElm = document.querySelector('.renderingBtn');

  const [i, setI] = useState(1)

  function createBtn() {
  
 
      let button = document.createElement('button');
      button.classList.add(`myBtn`)

  
      setI(i+1);
      button.innerHTML = `button ${i}`;
  
      button.onclick = function(){
           setData(`${dateTime} Button ${i} clicked`)
              return false;
          };
      
      renderingBtnElm.appendChild(button);


      setData(`button 1 added`)
  }
  


  return (
    <div>
      <div className="title">
        <h1>Hello, Pioneering Programmers!</h1>
      </div>
        <main className='world'>
          
          <section className='world-left light'>

            <button className='myBtn light' onClick={()=>{ dark ==="dark" ? darkMode() : lightMode()}}>dark theme</button>

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
          <button className='myBtn light' onClick={()=>{ submit(); }}>send</button>

          <button className='myBtn clear light' onClick={()=>{setData(``)}}>clear</button>

          <button className='myBtn block light' onClick={()=>{createBtn();}}>Add Button</button>
        </footer>
    </div>
  );
}

export default App;
