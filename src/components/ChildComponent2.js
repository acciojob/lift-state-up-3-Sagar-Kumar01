import React from 'react'

function ChildComponent2({setselectedOption}) {
  return (
    <div style={{height:"50%",width:"100%",backgroundColor:"yellow"}}>
      <h1>Child Component 2</h1>
      <button onClick={()=>setselectedOption("Option 2")}>Option 2</button>
    </div>
  )
}

export default ChildComponent2
