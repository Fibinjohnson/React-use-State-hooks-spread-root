import React,{useState} from 'react'

 function Counter() {
  const [count, setCount]=useState(0);
  
    return(
     <div>
      <h3 onClick={()=>setCount(count+1)}>hello</h3>
       <h2 >  Hello, my name is fibin johnson:{count} </h2>
     </div>)
  
 }

 export default Counter
