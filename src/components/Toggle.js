// import React from "react";
import React, {useState} from "react";

function Toggle() {
  const [isOn,setIsOn] = useState(false)

  console.log(isOn);
  function handleCLick(){
    setIsOn(((isOn) => !isOn));
  }

  return  <button style={{background:'red'}} onClick={handleCLick} >{isOn ? 'ON' : "OFF"}</button>;
}

export default Toggle;
