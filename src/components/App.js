
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[inputValue,setInputValue]=useState("");
  const onChangeText=(event)=>{
    setInputValue(event.target.value);
  }
  return (
    <div>
      { <form>
         {/* <p>Enter your name:</p> <br /> */}
         {/* <br /> */}
        <input onChange={onChangeText}/>
      </form> }
      
        <p>{`Hello ${inputValue}!`}</p>
    </div>
   
  )
}

export default App
