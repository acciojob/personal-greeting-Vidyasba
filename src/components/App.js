
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[inputValue,setInputValue]=useState("");
  const onChangeText=(event)=>{
    setInputValue(event.target.value);
  }
  return (
    <div>
      <form>
         <label>Enter your name:</label>
         <br />
        <input onChange={onChangeText}/>
      </form>
      
        {inputValue && <p>{`Hello ${inputValue}!`}</p>}
    </div>
   
  )
}

export default App
