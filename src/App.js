import { useState } from "react";
import Button from "./components/Button";

function App() {

  // Create state
  const [operationData, setOperationData] = useState({
    input: 0,
    prevInput: 0,
    operator: ""
  })

  // Helper functions
  function add (a,b){
    return a + b;
  }
  function subtract (a,b){
    return a - b;
  }
  function multiply (a,b){
    return a * b;
  }
  function divide (a,b){
    return a / b;
  }
  function modulus (a,b){
    return a % b;
  }

  // Update the state on a click event
  function handleButtonClick(display){
  
    setOperationData(prevOperationData => {

      let newState = { ...prevOperationData };

      if (typeof display === 'number') {
        newState.input = !String(newState.input).includes('.') ? newState.input * 10 + display : Number(`${newState.input}${display}`)
      } else if (['+', '-', 'x', '÷', '%'].includes(display)) {
        newState.prevInput = newState.input;
        newState.operator = display;
        newState.input = 0;
      }else if (display === '+/-'){
        newState.input = newState.input * -1;
      }else if (display === '.') {
        // Check if input already contains a decimal point
        if (!String(newState.input).includes('.')) {
          newState.input = String(newState.input) + '.';
        }
      }else if (display === '=') {
          // Perform the calculation based on newState.operator
          if(newState.operator === '+'){
            newState.input= add(newState.prevInput, newState.input);
          }else if(newState.operator === '-'){
            newState.input= subtract(newState.prevInput, newState.input);
          }else if(newState.operator === 'x'){
            newState.input= multiply(newState.prevInput, newState.input);
          }else if (newState.operator === '%') {
            newState.input= modulus(newState.prevInput, newState.input); 
          }else{
            newState.input= divide(newState.prevInput, newState.input); 
          }
      } else if (display === 'AC') {
        // Clear all fields
        newState.input = 0;
        newState.prevInput = 0;
        newState.operator = "";
      }

      return newState;
     })
  }

  return (
    <div className="grid h-screen justify-center items-center">
      <div className="grid grid-cols-4 grid-rows-6 border border-slate-400">
          <p className="col-span-4 grid justify-end bg-[#7B7A89] text-4xl">{operationData.input}</p>
          <Button display={`AC`} className="border border-slate-400 p-4 bg-[#DCDBDC]" updateState={handleButtonClick}/>
          <Button display={`+/-`} className="border border-slate-400 p-4 bg-[#DCDBDC]" updateState={handleButtonClick}/>
          <Button display={`%`} className="border border-slate-400 p-4 bg-[#DCDBDC]" updateState={handleButtonClick}/>
          <Button display={`÷`} className="bg-[#F48637] border border-slate-400 p-4 " updateState={handleButtonClick}/>
          <Button display={7} className="border border-slate-400 p-4 bg-[#DCDBDC]" updateState={handleButtonClick}/>
          <Button display={8} className="border border-slate-400 p-4 bg-[#DCDBDC]" updateState={handleButtonClick}/>
          <Button display={9} className="border border-slate-400 p-4 bg-[#DCDBDC]" updateState={handleButtonClick}/>
          <Button display={`x`} className="bg-[#F48637] border border-slate-400 p-4  " updateState={handleButtonClick}/>
          <Button display={4} className="border border-slate-400 p-4 bg-[#DCDBDC]" updateState={handleButtonClick}/>
          <Button display={5} className="border border-slate-400 p-4 bg-[#DCDBDC]" updateState={handleButtonClick}/>
          <Button display={6} className="border border-slate-400 p-4 bg-[#DCDBDC]" updateState={handleButtonClick}/>
          <Button display={`-`} className="bg-[#F48637] border border-slate-400 p-4 " updateState={handleButtonClick}/>
          <Button display={1} className="border border-slate-400 p-4 bg-[#DCDBDC]" updateState={handleButtonClick}/>
          <Button display={2} className="border border-slate-400 p-4 bg-[#DCDBDC]" updateState={handleButtonClick}/>
          <Button display={3} className="border border-slate-400 p-4 bg-[#DCDBDC]" updateState={handleButtonClick}/>
          <Button display={`+`} className="bg-[#F48637] border border-slate-400 p-4 " updateState={handleButtonClick}/>
          <Button display={0} className="col-span-2 border border-slate-400 p-4 bg-[#DCDBDC]" updateState={handleButtonClick}/>
          <Button display={`.`} className="border border-slate-400 p-4 bg-[#DCDBDC]" updateState={handleButtonClick}/>
          <Button display={`=`} className="bg-[#F48637] border border-slate-400 p-4" updateState={handleButtonClick}/>
      </div>
    </div>
  );
}

export default App;
