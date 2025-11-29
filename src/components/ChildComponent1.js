import React from 'react'

function ChildComponent1({setselectedOption}) {
  return (
     <div style={{height:"50%",width:"100%",backgroundColor:"orange"}}>
      <h1>Child Component 1</h1>
      <button onClick={()=>setselectedOption("Option 1")}>Option 1</button>
    </div>
  )
}

export default ChildComponent1
