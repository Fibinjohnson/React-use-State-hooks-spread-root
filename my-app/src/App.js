
import {useState} from 'react'
import Counter from './Counter';



function App() {
  const [state, setState]=useState(false);
 
  



  return (
  <div class="app">
    <button onClick={()=>setState(!state)}> click me </button>
    {state?<Counter/>:null}
     
  
  </div>
  )
  }

export default App;