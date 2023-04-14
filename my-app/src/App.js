
import {useState} from 'react'
import Counter from './Counter';


function App() {
  const [count, setCount]=useState(0);
  const addCount=()=>{ setCount(count+1)
  console.log(count)
}
let emp=[
  {name:"Fibin johnson",
  age:'23',job :'unemployed'},
  {name:"Joel m jose",
   age:'23',job :'employed'} ,
  {name:"Joel t john  ",
   age:'23',job :'csk'}
   ]

  return (
  <div class="app">
    <button onClick={addCount}> click me </button>
    {
emp.map((obj,index)=>{
  return(
    <Counter  key={index} {...obj}/>
    
  )
})  }

  </div>
  )
}

export default App;