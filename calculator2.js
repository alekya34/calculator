//clear
document.querySelector("#clear").addEventListener("click",()=>{
  document.querySelector("#display").value=" ";})
  //backspace use to delete the single element in display sectoin
  const backspace = () =>{
    const num=document.querySelector("#display").value.slice(0,-1);
    document.querySelector("#display").value = num;
  }
  //first function
  const one = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "1";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "1"
    }
  } 
  //secondfunction
  const two = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "2";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "2"
    }
  } 
  //third function
  const three = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "3";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "3"
    }
  } 
  //fourth function
  const four = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "4";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "4"
    }
  } 
  //five function
  const five = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "5";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "5"
    }
  } 
  //sixth function
  const six = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "6";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "6"
    }
  } 
  //seventh function
  const seven = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "7";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "7"
    }
  } 
  //eighth function
  const eight = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "8";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "8"
    }
  } 
  //ninth function
  const nine = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "9";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "9"
    }
  } 
  //zero
  const zero = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "0";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "0"
    }
  } 
  //point function
  const point= () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = ".";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "."
    }
  } 
    const square = () =>{
    const num=document.querySelector("#display").value;
    document.querySelector("#display").value = num*num;
  } 
  