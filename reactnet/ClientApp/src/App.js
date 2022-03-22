import React, { useState } from 'react'
import './App.css'


function App() {
  
  // 🍀{/* js 220540 */}  
  const [data, setData] = useState("")
  
  // {/* js 1149 */}  {/* js 1208 */}
  const [input, setInput] = useState("")
  
  const [dark, setDark] = useState(true)
  
  const [darktitle, setDarktitle] = useState("Dark")
  
  
  
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
  
  const myBtnAll = document.querySelectorAll('.myBtn');
  

  function darkMode() {
       
    //🧨 js220400
    // setData(`${dateTime} Theme was set to Dark `)
    createMessage(`${dateTime} Theme was set to light `)

    if ({dark}) {
      setDarktitle("Light");            
    }else{
      setDarktitle("Dark");
    }

    worldLeft.classList.toggle('dark');    
    worldRight.classList.toggle('dark');    

    worldLeftText.classList.toggle('dark');    
    worldRightText.classList.toggle('dark');   
     
    myBtnAll.forEach((p_item)=>{
      p_item.classList.toggle('dark');

    });

  }

  
  // function lightMode() {
  //   worldLeft.classList.toggle('light');    
  //   worldRight.classList.toggle('light');    

  //   worldLeftText.classList.toggle('light');    
  //   worldRightText.classList.toggle('light');    
       

  //   myBtnAll.forEach((p_item)=>{
  //     p_item.classList.toggle('light');

  //   });

  //   // setData(`${dateTime} Theme was set to light `)

  //   createMessage(`${dateTime} Theme was set to light `)
  //   setDark("dark");
  // }


  
    


    //  {/* 🍀js 0108. create button  */}  
  const renderingBtnElm = document.querySelector('.renderingBtn');

  const [i, setI] = useState(1)

  function createBtn() {

      let button = document.createElement('button');
      button.classList.add(`myBtn`)
  
      setI(i+1);
      button.innerHTML = `button ${i}`;
  
      button.onclick = function(){
          //  setData(`${dateTime} Button ${i} clicked`)
          createBtnMessage(`clicked`)
              return false;
          };
      
      renderingBtnElm.appendChild(button);

      // setData(`${dateTime} button ${i} added`)
      createBtnMessage(`added`)
  }


  //  {/* 🍀js 0504 */}  
  const renderingBtn = document.querySelector('.renderingBtn');

  function clear() {
    // setData(``)
    renderingMessageE.innerHTML=``;
    renderingBtn.innerHTML=``
    setI(1);  
  }
  


  // 🍀 {/* js 220540 */}  

  const renderingMessageE = document.querySelector('.renderingMessage');

  function createBtnMessage(p_message) {
      let div = document.createElement('div');
      div.classList.add(`text`)
  
      div.innerHTML = `${dateTime} button ${i} ${p_message}`;
        
      renderingMessageE.appendChild(div);
  }


function createMessage(p_message) {
  let div = document.createElement('div');
  div.classList.add(`text`)

  div.innerHTML = `${p_message}`;
    
  renderingMessageE.appendChild(div);
  
}

  // 🍀 {/* js 1208, js 1149 */}
  function submit() {

     createMessage(`“Message Sent: [${input} from text area]”`);

     setInput("");   
  }



  return (
    <div>
      <div className="title">
        <h1>Hello, Pioneering Programmers!</h1>
      </div>
        <main className='world'>
          
          <section className='world-left light'>

            <button className='myBtn light theme' onClick={()=>{darkMode()}}>{darktitle} theme</button>


            {/* js 0108 */}
            <div className='renderingBtn'></div>
          
          </section>


          <section className='world-right light'>
     
            {/* js 220540 */}  
            <div className='renderingMessage'></div>

            
            {/* js 1149 */}
            {/* <div>“Message Sent: [{input} from text area]”</div> */}
            
          </section>
        </main>

        <footer>
          {/* js 1149 */}
          <textarea type="text" value={input}  onChange={(e) => setInput(e.target.value)} />

          {/* 🍀js 1208. Sending input text when I click button */}
          <button className='myBtn light' onClick={()=>{ submit() }}>send</button>
          

          <br />
          <button className='myBtn light' onClick={()=>{createBtn()}}>Add Button</button>
          <button className='myBtn clear light' onClick={()=>{clear()}}>clear Buttons</button>
        </footer>
    </div>
  );
}

export default App;
