
import React, { useState } from "react";
import './../styles/App.css';
import ChildOne from "./ChildComponent1";
import ChildTwo from "./ChildComponent2";

const App = () => {
  let [selectedOption,setselectedOption] = useState("");
  return (
    <div style={{height:"40%",width:"100%",backgroundColor:"green"}} className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <ChildOne setselectedOption={setselectedOption}/>
        <ChildTwo setselectedOption={setselectedOption}/>
        <p>Selected Option: {selectedOption != ""?selectedOption:selectedOption}</p>

    </div>
  )
}

export default App
